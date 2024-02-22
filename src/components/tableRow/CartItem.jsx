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
    }

    return (
        <>
            <div className="cartItemContainer">
                <div className="cartItem">
                    <div className="cartItemImage">
                        <img src={require(`../../images/${item.img}`)} />
                        <div className="addRemoveButtons">
                            <button disabled={quantityCount===0} className='addRemoveBuutton' onClick={handleMinus}>-</button>
                            <span className='cartItemQuantity'>{quantityCount}</span>
                            <button className='addRemoveBuutton'onClick={handleAdd}>+</button>
                        </div>
                    </div>
                    <div className="cartItemDetail">
                        <span className='cartItemName'>SJCAM SJ8 Dual Touch Screen 2.33'/1.3' 140.5° Wide-Angle Super Night Vision</span>
                        <span className="cartItemPrice">{item.price}</span>
                        <span onClick ={handleRemove} className="removeItem">Remove</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
