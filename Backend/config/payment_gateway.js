var braintree= require('braintree');
const env=require('dotenv')

env.config();

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY,
  });

  const tokenController=async(req,res)=>{
    try {
       gateway.clientToken.generate({}, function(error,result){
        if(error){
            res.status(500).send(error);
        } else {
            res.send(result);
        }
       }) 
    } catch (error) {
        console.log(error);
    }
  };

 const paymentController=async(req,res)=>{
    try {
        const {order, nonce}=req.body;
        let total = 0;
        order.map(i=>{ 
          total+=i.price;
        });
        let newTranscation= gateway.transaction.sale({
          amount:total,
          paymentMethodNonce:nonce,
          options:{
            submitForSettlement:true
          },      
        },
        function(error,result){
          if(result){
            console.log("Processing Payment");
          }
          else{
            res.status(500).send(error)
          }

        })
    } catch (error) {
        console.log(error);
    }
  };

  module.exports={tokenController,paymentController}