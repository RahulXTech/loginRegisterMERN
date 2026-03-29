import userSchema from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import config from "../config/config.js";

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

  const token = jwt.sign({
    id : newUser._id
  },config.JWT_SECRET,{expiresIn : "1d"})

  return res.status(201).json({
    message: "User registered successfully",
    User : {
      username : newUser.user,
      email : newUser.email,
      token : token
    }
  });
}

// LOGIN 
export async function loginUserController(req, res) {
  const { email, password } = req.body;

  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password please try again." });
  }
  const checkPass = bcrypt.compareSync(password, user.password)

  if (!checkPass) {
    return res.status(400).json({ message: "Invalid email or password please try again." });
  }

  const token = jwt.sign({
    id : user._id
  },config.JWT_SECRET ,{expiresIn : "1d"})
  res.cookie("token", token);
  return res.status(200).json({
    message: "Login successful",
    user: user,
    email: email,
    token
  });
}