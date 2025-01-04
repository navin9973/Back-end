const express=require("express")
const routes=express.Router();

const {createComment}=require("../controller/commentController")
const {createPost}=require("../controller/postConstroller")
routes.post("/createvlog",createComment);
routes.post("/create/post",createPost);

module.exports=routes;