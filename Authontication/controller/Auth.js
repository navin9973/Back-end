const User = require("../model/model");
const bcrypt = require("bcrypt");

exports.Signup = async (req, res) => {
  try {
    const {name, email, password, role} = req.body;
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

    const create=await User.create({name,email,password:hashPassword,role});
    return res.status(200).json({
      success:true,
      message:"successfully created in DB",
    })
  } catch (error) {
console.log("problem in creating database");
res.status(500).json({
success:false,
message:"issue in creating account ,please try again",
})
  }
};
