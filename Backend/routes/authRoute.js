const express=require("express");
const {registerController,loginController,testController,orderController}=require("../controller/authController");
// const controller=require("../controller/authController")
const {signinMiddleware}=require("../middleware/authMiddleware");

//Router Object
const router=express.Router();

//Routing 

//Routing for Register || POST
router.post("/register",registerController);
router.post("/login",loginController)
router.post("/order",orderController)
router.get("/orders",orderController)
router.get("/test",signinMiddleware,testController)
router.get("/user-auth",signinMiddleware,(req,res)=>{
    res.status(200).send({ok:true});
})

module.exports=router;
 