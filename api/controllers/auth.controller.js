import { error } from "console";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
;import { errorHandler } from "../utils/error.js";
export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
   next(errorHandler(500,"All Fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password,10);

  const newUser = new User({
    username,
    email,
    password:hashedPassword,
  });
  try {
    await newUser.save();
    res.json("Sign up Successful");
  } catch (err) {
    next(err);
  }
};