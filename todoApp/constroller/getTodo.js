const Todo=require("../models/todo");

exports.getTodo = async(req,res)=>{
  try{
    const todos=await Todo.find();      //http://localhost:3000/api/v1/getTodo
    res.status(200).json({
      success:true,
      Data:todos,
      message:"succesfully find",
    });

    }
  
  catch(err){
    console.error(err);
    console.log(err);
   res.status(500).json({
     success:false,
      Data:"internal server problem",
      message:err.message,
   });
}
}

exports.getTodoById=async(req,res)=>{
  try{
    const Id=req.params.Id;
    const todo=await Todo.findById({_id:Id});
    if(!todo){
     return res.status(400),json({
        success:false,
        message :`not found by this ${Id}`,
      })
    }
    
      res.status(200).json({
        success:true,
        Data:todo,
        message:"succesfully find",
      });

    
  }
  catch(err){
    console.error(err);
    console.log(err);
   res.status(500).json({
     success:false,
      Data:"internal server problem",
      message:err.message,
   });
}

    
  }

