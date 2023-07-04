const express=require("express");
const {registerController,loginController,testController,orderController}=require("../controller/authController");
// const controller=require("../controller/authController")
const {signinMiddleware}=require("../middleware/authMiddleware");
const { paymentController, tokenController } = require('../config/payment_gateway');;

//Router Object
const router=express.Router();

//Routing 

//Routing for Register || POST
router.post("/register",registerController);
router.post("/login",loginController)
router.post("/order",orderController)
router.get("/orders",orderController)
router.get('/braintree/token',tokenController)
router.post('/braintree/payment',paymentController);
router.get("/test",signinMiddleware,testController)
router.get("/user-auth",signinMiddleware,(req,res)=>{
    res.status(200).send({ok:true});
})

module.exports=router;
 