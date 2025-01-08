const Like=require("../models/likes");
const Post =require("../models/post");

exports.LikeController=async(req,res)=>{
  try{
    const {post,user}=req.body;
    const like=new Like({post,user});
    const savedata=await like.save();
    const updateData=await Post.findByIdAndUpdate(post,{$push:{likes:savedata._id}},{new:true}).populate("likes").exec();

    res.json({
      updateData,
    })
  }
  catch(error){
    console.log("internal during like fetching problem");
    
    res.json({
      message:error.message,
    })
  }
}

exports.unlinkController=async(req,res)=>{
  try{
    const{like,post}=req.body;
    const unlike=await Like.findOneAndDelete({post:post,_id:like});   //Like ke post me pasrh kiya hua post aur Like ke id me like ko comare kr rhe h
    const update=await Post.findByIdAndUpdate(post,{$pull:{likes:unlike._id}},{new:true});  //aur likes array me se like isko hm req.body se parse kiye usko v comapre kr shate h
    res.status(200).json({
      update,
    });
  }
  catch(error){
    console.log("internal during unlike fetching problem");
    
    res.json({
      message:error.message,
    });
  }
}