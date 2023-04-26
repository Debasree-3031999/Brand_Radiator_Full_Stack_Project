const express=require("express");

const {getData,postData}=require("../Controller/about.controller");

const aboutRouter=express.Router();

aboutRouter.get("/",getData);
aboutRouter.post("/",postData);

module.exports=aboutRouter;