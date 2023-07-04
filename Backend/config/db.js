const mongoose=require("mongoose");

const connect=async()=>{
    try {
        // mongodb+srv://ajayythakur:Ajay123@cluster0.2btgmaj.mongodb.net/e_commerce
        const connection=await mongoose.connect(process.env.DB_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error in Connection to database",error);       
    }
};

module.exports=connect;