const express=require("express")
const routes=express.Router();

const {createComment}=require("../controller/commentController")
// const {createPost}=require("../controller/postConstroller")
const{Createpost,getAllPost}=require("../controller/postConstroller");
const{LikeController,unlinkController}=require("../controller/likeController")

routes.post("/create/comment",createComment);
routes.post("/create/post",Createpost);
routes.get("/get/posts",getAllPost);
routes.post("/likes/like",LikeController);
routes.post("/likes/unlike",unlinkController);

module.exports=routes;