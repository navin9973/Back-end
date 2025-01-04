const Post=require("../models/post");

exports.createPost=async(req,res)=>{
  try{
  
    const {title,body}=req.body;
    const post= new Post({title,body,});
    const savedata=await post.save();
    res.json({
      post:savedata,
    });
  }
  catch(error){
    res.status(500).json({
      error:"error occur in post",
    });

  }
}