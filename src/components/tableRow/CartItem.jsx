import React, { useContext, useState } from 'react'
import './cartItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import cartContext from '../../context/cartContext';
const CartItem = ({ item }) => {

    const { cart, setCart } = useContext(cartContext);
    const [quantityCount, setQuantityCount] = useState(item.quantity);
    const handleAdd = () => {
        setQuantityCount(prev => prev + 1);
        const newCart = cart.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i))
        setCart((prevItems) => {
            return prevItems.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i))
        })
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
    const handleMinus = () => {
        setQuantityCount(prev => prev - 1);
        const newCart = cart.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i))
        setCart((prevItems) => {
            return prevItems.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i))
        })
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const handleRemove = () =>{
        const newCart = cart.filter(i=> i.name !== item.name);
        setCart(cart.filter(i=> i.name !== item.name));
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(JSON.parse(localStorage.getItem("cart")));
    }

    return (
        <>
            <div className="cartItemContainer">
                <div className="cartItem">
                    <div className="cartItemImage">
                        <img src={item.img} />
                        <div className="addRemoveButtons">
                            <button disabled={quantityCount===1} className='addRemoveBuutton' onClick={handleMinus}>-</button>
                            <span className='cartItemQuantity'>{quantityCount}</span>
                            <button className='addRemoveBuutton'onClick={handleAdd}>+</button>
                        </div>
                    </div>
                    <div className="cartItemDetail">
                        <span className='cartItemName'>{item.name}</span>
                        <span className="cartItemPrice">₹{item.price}</span>
                        <span onClick ={handleRemove} className="removeItem">Remove</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
