// const Post=require("../models/post");

// exports.createPost=async(req,res)=>{
//   try{
  
//     const {title,body}=req.body;
//     const post= new Post({title,body,});
//     const savedata=await post.save();
//     res.json({
//       post:savedata,
//     });
//   }
//   catch(error){
//     res.status(500).json({
//       error:"error occur in post",
//     });

//   }
// }


const post=require("../models/post");

exports. Createpost=async(req,res)=>{
  try{
    const {title,body}=req.body;
    const Post=new post({
      title,body
    })
    const savedata=await Post.save();

    res.status(200).json({
      success:true,
      post:savedata,
    });

  }
  catch(error){
    console.log("internal problem"),
    console.error(error),
    res.status(500).json({
      message: error.message,
    });
    
  
  }
}

exports.getAllPost=async(req,res)=>{
  try{
    const Post=await post.find().populate("comments").populate("likes").exec();
    res.json({
      Post,
    })
  }
  catch(error){

    return res.status(400).json({
    message:error.message,
  });
}
}
