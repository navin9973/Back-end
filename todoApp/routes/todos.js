const express=require("express");
const router=express.Router();

const {createTodo}=require("../constroller/createTodo");
const {getTodo}=require("../constroller/getTodo");
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);

module.exports=router;
