import React  from 'react'
import { useCart } from './context/Cart'
import { useAuth } from './context/auth'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { useOrder } from './context/order';
import { Link } from 'react-router-dom';

   //calculating total amount of cart items
   const TotalPrice = () => {
    const [cart, setCart] = useCart();
    console.log(cart)
    try {
        let total = 0;
            // eslint-disable-next-line
        cart?.map((item) => {
            
            //removes the , in the price which we getting form API and converts it into number;
            // parseFloat("2,299.00".replace(/,/g, ''));
            // let price = parseFloat(item.price.replace(/,/g, ''));
            let price = item.price;
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

 const Cart = () => {
    // eslint-disable-next-line
    const [auth, setAuth] = useAuth();
    // eslint-disable-next-line
    const [cart, setCart] = useCart();
    console.log("Cart Items", cart)

    const handleDecrement = (dataId) => {
        setCart(cart =>
            cart.map((item) =>
                dataId === item.id ? { ...item, qty: item.qty - 1 } : item
            )
        );
        setCart(cart =>
            cart.map((item) =>
                dataId === item.id ? { ...item, price: item.uPrice * item.qty } : item
            )
        );
        console.log("Updated Cart Items are", cart)
    }



    const handleIncrement = (dataId) => {
        setCart(cart =>
            cart.map((item) =>
                dataId === item.id ? { ...item, qty: item.qty + 1 } : item
            )

        );
        setCart(cart =>
            cart.map((item) =>
                dataId === item.id ? { ...item, price: item.uPrice * item.qty } : item
            )
        );
        // console.log(price)

    }

    const [order, setOrder] = useOrder();
    // console.log(order)

// eslint-disable-next-line
    const navigate = useNavigate();

 
    //deleting item
    const removeItem = (dataId) => {
        try {
            const myCart = [...cart]
            let index = myCart.findIndex(item => item.id === dataId);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem("cart", JSON.stringify(myCart));
            toast.success("Item Removed");
            // console.log("item removed")
        } catch (error) {
            console.log("Error in Removing item", error)
        }
    }
    return (
        <div>
            <div className='cartAuth'>
                <h1>Cart</h1>
                {/* eslint-disable-next-line */}
                <h3>{`Hello  ${auth?.token && auth?.user?.name || "Anonymous"} `}</h3>
                <h4>
                    {cart?.length > 0 ? `You have ${cart.length} items in your cart. ${auth?.token ? "" : "Please Login to checkout"}` : "Your Cart is Empty"}
                </h4>
            </div>
            <div className='cart'>
                <div className='prod-side'>
                    {cart && cart.map((data, index) => {
                        return (
                            <div key={index}>
                                <div className='product'>
                                    <div>
                                        <img alt='404' src={data.image}></img><br />
                                    </div>
                                    <div>
                                        Name - {data.name} <br />
                                        Price - ₹{data.price} <br />
                                        Quantity - <span>
                                            <button className='qtyBtn' onClick={() => handleDecrement(data.id)}>-</button>
                                            <input type='text' className='qty' placeholder={data.qty} />
                                            <button onClick={() => handleIncrement(data.id)}>+</button>
                                        </span>

                                        <button className='rmvBtn' onClick={() => removeItem(data.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>

                <div className='pay-side'>
                    <h3>Total :-{TotalPrice()} </h3>
                    <div>
                        <Link to='/payment'>
                            <button>Payment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Cart,TotalPrice}