const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    name:{
        type:{},
        // required:true,
     },
     email:{
        type:String,
        // required:true,
        unique:true,
     },
     quantity:{
        type:String,
        // required:true,

     },
    //  phone:{ 
    //     type:String,
    //     required:true,
    //  },
     address:{
        type:String,
        // required:true,
     }
     
},{timestamps:true});

const orderSchema=mongoose.model("order",Schema);
module.exports={orderSchema};

