const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT ||4000;

app.use(express.json());
const totoRoutes=require("./routes/todos");

app.use("/api/v1",totoRoutes);

app.listen(PORT,()=>{
  console.log(`successfull connection started at server${PORT}`);
  
})

const dbconnect=require("./config/dataBase");
dbconnect();

app.get("/",(req,res)=>{
  res.send(`<h1>This is new page</h1>`);
  
})