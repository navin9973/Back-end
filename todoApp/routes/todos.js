const express=require("express");
const router=express.Router();

const {createTodo}=require("../constroller/createTodo");
const {getTodo,getTodoById}=require("../constroller/getTodo");
const {updateTodo}=require("../constroller/update");
const {deleteTodo}=require("../constroller/delete");

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:Id",getTodoById)
router.put("/update/:id",updateTodo)
router.delete("/delete/:id",deleteTodo);

module.exports=router;
