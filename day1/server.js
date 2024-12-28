const express= require("express");
const app=express();

const bodyparser=require('body-parser');
app.use(bodyparser.json());

app.listen(3000,()=>{
  console.log("sever is running at port 3000");
  
})

app.get('/',(req,res)=>{
  res.send("sb thik h");
  
})

app.post('/get/car',(req,res)=>{
  const{name,brand}=req.body;
  console.log(name);
  console.log(brand);
  res.send("sucessfully uploarded")
  
  
})

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/car")

.then(()=>{console.log("secuessfully connected")
})

.catch((error)=>{console.log("something wrong")
})