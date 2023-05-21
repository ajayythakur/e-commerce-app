const {userSchema}=require("../models/userModel");
const {orderSchema}=require("../models/orderModel");
const {hashPassword,comparePassword}= require("../helper/authHelper");
const jwt=require("jsonwebtoken");
const secret="QWERTY";

const orderController=async(req,res)=>{
    try {
        const {name,email,quantity,address}=req.body;
        const order=await new orderSchema({
            name,
            email,
            address,
            quantity,
        }).save();
        res.status(200).send({
            success:true,
            message:"Order Received",
            order
        })
    } catch (error) {
        console.log("Error in saving the orders",error);
        
    }
};

const registerController=async(req,res)=>{
    try {
        const {name,email,password,phone,address}=req.body;
        //check if fields are provided or not
        if (!name) {
            return res.send({ error: "Name is Required" });
          }
          if (!email) {
            return res.send({ message: "Email is Required" });
          }
          if (!password) {
            return res.send({ message: "Password is Required" });
          }
          if (!phone) {
            return res.send({ message: "Phone no is Required" });
          }
          if (!address) {
            return res.send({ message: "Address is Required" });
          }

        //   check if user exist
          const userExist=await userSchema.findOne({email});

          //exisitin user 
          if(userExist){
            return res.status(200).send({
                success:false,
                message:"User Already Exist..Try to Login"
            });
          }
          //register user
          const hashedPassword=await hashPassword(password);

          //saving the user in database
          const user=await new userSchema({
            name,
            email,
            phone,
            address,
            password:hashedPassword
          }).save();
          res.status(201).send({
            success:true,
            message:"User Registered Successfully",
            user,
          });
    } catch (error) {
        console.log("Error in Registeration",error);
    }
};

//Login Controller
const loginController=async(req,res)=>{
    try {
        const{email,password}=req.body;

        //checking if input fields are empty
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid Email or Password",
            });
        }

        //checking if user is registered or not
        const user=await userSchema.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registerd..Try to Register or Signup"
                });
        }

        //if user is registered comparing the password 
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        //if password is matched generating the token
        const token=await jwt.sign({_id:user._id},secret,{expiresIn:"1d"});
        res.status(200).send({
            success:true,
            message:"Login Successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Login",
            error,
        });
    }
}

const testController=(req,res)=>{
    try {
        res.send("Protected Routes")
    } catch (error) {
        res.send({error});
    }
}


module.exports={registerController,loginController,testController,orderController}
