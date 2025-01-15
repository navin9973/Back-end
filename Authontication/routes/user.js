const express=require("express");
const routes=express.Router();

const {Login,Signup}=require("../controller/Auth");

routes.post("/signup",Signup);
routes.post("/login",Login);

module.exports = routes;