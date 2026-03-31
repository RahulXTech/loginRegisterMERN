import userSchema from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import config from "../config/config.js";
import sessionSchem from "../models/session.mode.js"
// REGISTER
export async function registerUserController(req, res) {
  const { user, email, password } = req.body;

  if (!user || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const isUser = await userSchema.findOne({
        $or : [
            {email},
            {user}
        ]
        });
  if (isUser) return res.status(409).json({ message: "User already registered." });

    const hashPass = bcrypt.hashSync(password, 12);

  const newUser = await userSchema.create({
    user,
    email,
    password : hashPass
  });

  const accessToken = jwt.sign({
    id : newUser._id
  },config.JWT_SECRET,{expiresIn : "15m"})

  const refreshToken = jwt.sign({
    id : newUser._id
  }, config.JWT_SECRET, {expiresIn : "7d"})


  const oneDay = 24*60*60*1000; //Oneday * hourse * second * microsecond
  res.cookie("refreshToken", refreshToken,{
    httpOnly : true,
    secure : true,
    sameSite : "strict",
    maxAge : 7 * oneDay // 7 days
  })


  return res.status(201).json({
    message: "User registered successfully",
    User : {
      username : newUser.user,
      email : newUser.email,
      accessToken
    }
  });
}

// Get-info from token.
export async function getInfo(req, res){
  try{
    const token = req.headers.authorization?.split(" ")[ 1 ];

    if (!token) {
      return res.status(401).json({ message: "Token is not available." });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET)
    const user = await userSchema.findById(decoded.id)
    if (!user) {
       return res.status(404).json({ message: "User not found." });
    }
  
    console.log(user.email)
    return res.status(200).json({
      message : "User info fetched successfully.",
      user : {
        user : user.user,
        email : user.email
      }
    })
    

  }catch(err){
    console.log(err)
    return res.status(500).json({messaage : "Server error in side of get-info",
      "Error message: " : err
    })
  }
}

//Refresh token 
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