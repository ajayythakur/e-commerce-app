import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();
const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        let orderItems=localStorage.getItem("order");
        if(orderItems) setOrder(JSON.parse(orderItems));
    },[])
    return (
        <OrderContext.Provider value={[order, setOrder]}>
            {children}
        </OrderContext.Provider>
    )
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };