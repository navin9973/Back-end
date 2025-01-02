const vlog=require("../models/model");

exports.createvlog=async(req,res)=>{
try{
    const{title,description}=req.body;
    const data=await vlog.create({title,description});
    res.status(200).json({
      success:true,
      Data:data,
      message:"successfuly created",
    })
}
catch(err){
  console.log("issue");
  console.error(err.message);
  res.status(500).json({
    success:false,
    Data:"intenmal issue",
    message:err.message,
  })
  

}
}