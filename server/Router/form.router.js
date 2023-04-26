const express = require("express");

const { getData, postData } = require("../Controller/form.controller");

const formRouter = express.Router();

formRouter.get("/", getData);
formRouter.post("/", postData);

module.exports = formRouter;