const express=require("express")
const routes=express.Router();

const {createvlog}=require("../controller/createvlog")
routes.post("/createvlog",createvlog);

module.exports=routes;