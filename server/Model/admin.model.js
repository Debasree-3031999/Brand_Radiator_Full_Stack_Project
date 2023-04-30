const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema(
    {
        email:{type:String, require:true},
        pwd:{type:String, require:true}
    }
)

const Admin=mongoose.model("admin",adminSchema);

module.exports=Admin;