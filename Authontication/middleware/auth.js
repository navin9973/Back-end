const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.Auth=(req,res,next)=>{
try{

  const token=req.body.token;
  if(!token){
     return res.status(401).json({
      success:false,
      message:"token is empty",
    })
  }
    try{
      const payload= jwt.verify(token,process.env.JWT_SECRET);
      req.user=payload;

    }
    catch(error){
      return res.status(401).json({
        success:flase,
        message:"invalid token",

      })
    }
      next();

    
  }


catch(error){
  return res.status(401).json({
    success:false,
    message:"something went wrong ! while varfing token",
  })

}
}

exports.isStudent=(req,res,next)=>{
  try{
  if(req.user.role!=="student"){
    return res.status(401).json({
      success:false,
      message:"this is protected route for student you can enter in this route it is for student only",
    })
  }
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message:"problem in matching user role"
    })

  }
  next();
}
exports.isAdmin=(req,res,next)=>{
  try{
  if(req.user.role!=="admin"){
    return res.status(401).json({
      success:false,
      message:"this is protected route for admin you can enter in this route it is for admin only",
    })
  }
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message:"problem in matching user role"
    })

  }
  next();
}