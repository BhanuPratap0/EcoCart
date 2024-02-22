import { useEffect, useState } from "react";
import CartContext from "./cartContext";


const CartState = (props) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem("cart"));
        if (temp) {
            setCart(temp);
        }
    }, [setCart])
    return (
        <CartContext.Provider
            value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;
