import React from 'react'
import { useCart } from './context/Cart'
import { useOrder } from './context/order';
import { useAuth } from './context/auth';

const Order = () => {
  // eslint-disable-next-line
  const[cart,setCart]=useCart();
  // console.log("Cart in Order",cart)
  // eslint-disable-next-line
  const [order, setOrder] = useOrder();
  console.log("Here are the Ordered Items", order);
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  console.log(auth)

  //  const res=async()=>{
  //  const data= await axios.get("http://localhost:8080/orders")
  //   return data
  //  }
  //  console.log("Api data",res)


  console.log("Order Page",order)

//   const removeItem = (dataId) => {
//     try {
//         // const myOrder = [...order]
//         // let index = myOrder.findIndex(item => item.id === dataId);
//         // myOrder.splice(index, 1);
//         // setOrder(myOrder);
//         // localStorage.setItem("order", JSON.stringify(myOrder));
//         // toast.success("Item Removed");
//         console.log("item removed")
//     } catch (error) {
//         console.log("Error in Removing item", error)
//     }
// }
 
  const totalPrice = () => {
    try {
        let total = 0;
        // eslint-disable-next-line
        order?.map((item) => {
          
            //removes the , in the price which we getting form API and converts it into number;
            // parseFloat("2,299.00".replace(/,/g, ''));
            // let price = parseFloat(item.price.replace(/,/g, ''));
            let price=item.price;
            console.log("Price of items are", price)
            total += price;
            console.log("Total of Cart items is", total)
        })

        return total
            .toLocaleString("en-IN", {
                style: "currency",
                currency: "INR"
            })

    } catch (error) {
        console.log("Error in Calculating", error);
    }
}
  return (
    <div>
      <hr></hr>
     <h3> Make sure you are Logged in to see Order Details</h3>
<hr></hr>
      <table border='1px' width='70%' style={{margin:'auto'}}>
        {/* <thead> */}
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Delivery Address</th>
        <th>Status</th>
        <th colSpan={2}>Payment Status and Amount</th>
        <th>Grand Total</th>
        {/* </thead> */}
        <tbody>
          <td>{
            order.map((n, index) => {
              return (
                <div key={index}>
                  {
                    !auth?.user ? (<>No Data</>) : (<>{n.name}</>)
                  }
                </div>
              )
            })
          } </td>

          <td>
          {
            order.map((n, index) => {
              return (
                <div key={index}>
                  {
                    !auth?.user ? (<>No Data</>) : (<>{n.qty}</>)
                  }
                </div>
              )
            })
          }           </td>
          <td>
          {!auth?.user ? (<>No Data</>) : (<>{auth?.user.address}</>)}         </td>
          <td>
          {order.length===0 ? (<>No Data</>) : (<>Order Placed</>)}
          </td>
          <td>
          {order.length===0 ? (<>No Data</>) : (<>Successfull</>)}
          </td>
          <td>         
           {
            order.map((n, index) => {
              return (
                <div key={index}>
                  {
                    !auth?.user ? (<>No Data</>) : (<>Rs.{n.price}</>)
                  }
                </div>
              ) 
            })
          } </td>

          <td>
          {
                    !auth?.user ? (<>No Data</>) : (<>Rs.{totalPrice()}</>)
                  }          </td>
                  </tbody>

      </table>

    </div>
  )
}

export default Order