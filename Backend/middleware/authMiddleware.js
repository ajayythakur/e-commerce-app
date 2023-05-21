const jwt=require("jsonwebtoken");
const userSchema=require("../models/userModel");
const secret="QWERTY"
const signinMiddleware=(req,res,next)=>{
    try {
        const verify=jwt.verify(req.headers.authorization,secret);
        req.user=verify;
        next();
    } catch (error) {
        console.log(error);
        res.send("Invalid token")
    }

};

module.exports={signinMiddleware};