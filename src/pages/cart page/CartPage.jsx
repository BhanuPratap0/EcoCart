import React, { useEffect, useState } from 'react'
import './cartPage.css'
import CartItem from '../../components/tableRow/CartItem';
import { motion } from "framer-motion";

const CartPage = () => {
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const cart = JSON.parse(localStorage.getItem("cart"));
    useEffect(() => {
        const getTotal = () => {
            {
                cart.map((item) => {
                    setTotal(prev => prev + item.cost);
                    setItemCount(prev => prev + 1);
                })
            }
        }
        getTotal();
    }, [])

    return (
        <>
            <div className="cartContainer">
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: "0.2",
                    }}
                    className="leftSide">
                    <div className="leftSideWrapper">

                        {cart?.map((item,index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: ((index+1)/3) }}>
                                <CartItem item={item} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="placeOrder">
                        <buton className='placeOrderButton'>Place Order</buton>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: "0.2",
                    }}
                    className="rightSide">
                    <div className="rightSideHeading">
                        <span className=''>PRICE DETAILS</span>
                    </div>
                    <div className="rightSideItem">
                        <span>Price ({itemCount} items)</span>
                        <span>₹{total}</span>
                    </div>
                    <div className="rightSideItem">
                        <span>Discount (10%)</span>
                        <span className='otherCosting'>₹{total / 10}</span>
                    </div>
                    <div className="rightSideItem">
                        <span>Delievery Charges</span>
                        <span className='otherCosting'>Free</span>
                    </div>
                    <hr class="rightSideLine" />
                    <div className="rightSideItem">
                        <span className='rightSideTotalText'>Total Amount</span>
                        <span className='otherCosting'>₹{total - (total / 10)}</span>
                    </div>
                    <hr class="rightSideLine" />
                    <span className='totalSave'>You will save ₹{(total / 10)} on this order</span>
                </motion.div>
            </div>
        </>
    )
}

export default CartPage
