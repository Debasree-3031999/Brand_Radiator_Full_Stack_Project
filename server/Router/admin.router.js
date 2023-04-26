const express = require("express");

const { getData, postData } = require("../Controller/admin.controller");

const adminRouter = express.Router();

adminRouter.get("/", getData);
adminRouter.post("/", postData);

module.exports = adminRouter;