import userSchema from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto"; // 
import config from "../config/config.js";
import sessionModel from "../models/session.model.js"; 
import { generateOtp, getOtpHtml } from "../utils/utils.js";
import otpModel from "../models/otp.model.js";
import { sendEmail } from "../services/email.service.js";

// REGISTER
export async function registerUserController(req, res) {
  const { user, email, password } = req.body;

  if (!user || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const isUser = await userSchema.findOne({
    $or: [
      { email },
      { user }
    ]
  });

  if (isUser) {
    return res.status(409).json({ message: "User already registered." });
  }

  const hashPass = bcrypt.hashSync(password, 12);

  const newUser = await userSchema.create({
    user,
    email,
    password: hashPass
  });

  const otp = generateOtp();
  const html = getOtpHtml(otp)

  const otpHash = crypto.createHash("sha256").update(String(otp)).digest("hex")


  await otpModel.create({
    email,
    user : newUser._id,
    otpHash
  })
  await sendEmail(email,"OTP Verification", `Your OTP code is ${otp}`, html );

  return res.status(201).json({
    message: "User registered successfully",
    User: {
      username: newUser.user,
      email: newUser.email,
      verified : newUser.verified
    }
  });
}



//LOGIN
export async function loginController(req, res){
  const {email, password} = req.body;

  const user = await userSchema.findOne({email})
  if(!user){
    return res.status(401).json({
      message : "Invalid email or password"
    })
  }

  if(!user.verified){
    return res.status(401).json({
      message : "Email not verified"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    return res.status(401).json({
      message : "Invalid email or password"
    })
  }
  const refreshToken = jwt.sign({
    id : user._id
  }, config.JWT_SECRET, {
    expiresIn : "7d"
  })

  const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

  const session = await sessionModel.create({
    user : user._id,
    refreshTokenHash,
    ip : req.ip,
    userAgent : req.headers["user-agent"]
  })

  const accessToken = jwt.sign({
    id : user._id,
    sessionId : session._id
  }, config.JWT_SECRET,{
    expiresIn : "15m"
  })

  res.cookie("refreshToken", refreshToken, {
    httpOnly : true,
    secure : true,
    sameSite : "strict", 
    maxAge : 7*24*60*60*1000 //7day
  })

  res.status(200).json({
    message : "Logged in successfully.",
    user: {
        user : user.user,
        email : user.email,
    },
    accessToken
  })


}

// Get-info from token.
export async function getInfo(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token is not available." });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = await userSchema.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    console.log(user.email);

    return res.status(200).json({
      message: "User info fetched successfully.",
      user: {
        user: user.user,
        email: user.email
      }
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error in side of get-info", 
      error: err
    });
  }
}

// Refresh token
export async function refreshToken(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token not found."
      });
    }

    const decoded = jwt.verify(
      refreshToken,
      config.JWT_SECRET
    );


    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    
    const session = await sessionModel.findOne({
      refreshTokenHash,
      revoked: false
    })
    if(!session){
      return res.status(401).json({
        message : "Invalid refresh token"
      })
    }

    const accessToken = jwt.sign(
      { id: decoded.id },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const newRefreshToken = jwt.sign(
      { id: decoded.id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );
    const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex");
    session.refreshTokenHash = newRefreshTokenHash;
    await session.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
      message: "Access token refreshed successfully",
      accessToken
    });

  } catch (err) {
    console.log(err);
    return res.status(403).json({
      message: "Invalid or expired refresh token"
    });
  }
}


export async function logout(req, res){
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){
      return res.status(400).json({
        message : "Refresh token not found"
      })
    }
    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    const session = await sessionModel.findOne({
      refreshTokenHash,
      revoked : false
    })
    if(!session){
      return res.status(400).json({
        message : "Invalid refresh token"
      })
    }

    session.revoked = true;
    await session.save();

    res.clearCookie("refreshToken")

    res.status(200).json({
      message : "Logged out successfully"
    })
}

export async function logoutAll(req, res) {
  const refreshToken = req.cookies.refreshToken

  if(!refreshToken){
    return res.status(400).json({
      message : "Refresh token not found"
    })
  }
  const decode = jwt.verify(refreshToken, config.JWT_SECRET)
  await sessionModel.updateMany({
    user: decode.id,
    revoked : false
  },{
    revoked : true
  })
  res.clearCookie("refreshToken")

  res.status(200).json({
    message : "Logged out from all devices successfully."
  })
}

export async function verifyEmailController(req, res) {
    const {otp, email} = req.body;

    const otpHash = crypto.createHash("sha256").update(String(otp)).digest("hex")
    const otpDoc = await otpModel.findOne({
      email,
      otpHash
    })

    if(!otpDoc){
      return res.status(400).json({
        message : "Invalid OPT try again"
      })
    }

    const user = await userSchema.findByIdAndUpdate(otpDoc.user, {
      verified : true
    })
    await otpModel.deleteMany({
      user : otpDoc.user
    })

    return res.status(200).json({
      message : "Email verified successfully",
      user : {
        username : user.username,
        email : user.email,
        verified : user.verified
      }
    })
}   
