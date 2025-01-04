const Comment=require("../models/comment");
const Post=require("../models/post");
// const Like=require("../models/likes")

exports.createComment=async(req,res)=>{
try{
    const{post,user,body}=req.body;
    const comment=new Comment({
      post,user,body
    });

    const savedata=await comment.save();
    const updatedpost=await Post.findByIdAndUpdate(post,{$push:{comments:savedata._id}},{new:true})
    .populate("comments")
    .exec();
    res.status(200).json({
      success:true,
      post:updatedpost,
      
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