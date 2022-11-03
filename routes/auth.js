import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
const router = express.Router();
//register user
router.post("/register", async (req, res) => {
  try {
    console.log("here");
    const existedUser = await User.findOne({ email: req.body.email });
    existedUser && res.status(403).json("User already exists.");
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
});

//login user
router.post("/login", async (req, res) => {
  try {
    console.log("login");
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
      const savedPassword = bytes.toString(CryptoJS.enc.Utf8);
      console.log(savedPassword);
      if (savedPassword === req.body.password) {
        const accessToken = jwt.sign(
          { userId: user._id, isAdmin: user.isAdmin },
          process.env.SECRET,
          { expiresIn: "5d" }
        );
        console.log(savedPassword);
        const { password, ...userDet } = user._doc;
        res.status(200).json({ ...userDet, accessToken });
      } else {
        res.status(400).json("invalid creadientials");
      }
    }
    !user && res.status(400).json("invalid creadientials");
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
});

export default router;
