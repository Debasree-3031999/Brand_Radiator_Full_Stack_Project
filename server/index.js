const express=require('express');
const connect=require('./Config/db');
const port=process.env.PORT||5050;
const cors=require("cors");
const aboutRouter=require("./Router/about.router");
const adminRouter=require("./Router/admin.router");
const formRouter=require("./Router/form.router");

const app=express();
app.use(express.json());
app.use(cors());
app.use("/about",aboutRouter);
app.use("/admin",adminRouter);
app.use("/form",formRouter);


app.listen(port,async()=>{
    try {
        await connect();
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log(    `listening to the port ${port}`)
})
