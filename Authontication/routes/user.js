const express=require("express");
const routes=express.Router();

const {Login,Signup}=require("../controller/Auth");
const{Auth,isStudent,isAdmin}=require("../middleware/auth")
routes.post("/signup",Signup);
routes.post("/login",Login);

//protected routes after login page
routes.get("/admin",Auth,isAdmin,(req,res)=>{
  res.status(200).json({
    success:true,
    message:"welcome to the Admin page after loggd in",
  })
})
routes.get("/student",Auth,isStudent,(req,res)=>{
  res.status(200).json({
    success:true,
    message:"welcome to the student page after loggd in",
  })
})

module.exports = routes;