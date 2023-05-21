const express=require("express");
const app=express();
const route=require("./routes/authRoute");
const  connect  = require("./config/db");
const cors=require("cors");


//Middlewares
app.use(cors({origin:"*"}))
app.use(express.json());

//Routes
app.use(route)


app.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>")
})

app.listen(8080,async()=>{
    try {
       await connect();
       console.log("Connected to database");
    } catch (error) {
    console.log("Error in connection");
    }

    console.log(`App is running on Port 8080`);
})