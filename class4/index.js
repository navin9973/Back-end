const express=require('express');
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||4000;

app.use(express.json());
const vlogroutes=require("./routes/routes");

app.use("/api/v1",vlogroutes);

app.listen(PORT,()=>{
  console.log(`successfull connection start at server${PORT}` );
  
})

const dbconnect=require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
  res.send(`<h1>this is home page</h1>`)
})




