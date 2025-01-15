const User = require("../model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.Signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exitstingUser = await User.findOne({ email });
    if (exitstingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }

    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "problem in hashing password",
      });
    }

    const create = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      message: "successfully created in DB",
    });
  } catch (error) {
    console.log("problem in creating database");
    res.status(500).json({
      success: false,
      message: "issue in creating account ,please try again",
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill all the detail carefully",
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user does't exist",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const option = {
        expire: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, option).status(200).json({
        success: true,
        user,
        token,
        message: "seccesfully log in",
      });
    } else {
      res.status(403).json({
        success: false,
        message: "incorrect password",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "error in log in try again",
    });
  }
};
