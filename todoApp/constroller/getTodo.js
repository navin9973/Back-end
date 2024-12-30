const Todo=require("../models/todo");

exports.getTodo = async(req,res)=>{
  try{
    const todos=await Todo.find();
    res.status(200).json({
      "success":true,
      "Data":todos,
      "message":"succesfully find",
    });

    }
  
  catch(err){
    console.error(err);
    console.log(err);
   res.status(500).json({
     "success":false,
      "Data":"internal server problem",
      "message":err.message,
   });
}
}
