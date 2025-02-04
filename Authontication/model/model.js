const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
    trim:true,
  },
  email:{
    type:String,
    require:true,
    trim:true,
  },
  password:{
   type:String,
   require:true,
  },
  role:{
    type:String,
    enum:["student","admin","visitor"]
  }
})

module.exports=mongoose.model("user",UserSchema)