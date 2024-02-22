import React, { useEffect, useState } from 'react'
import './cartPage.css'
import CartItem from '../../components/tableRow/CartItem';
import { easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const CartPage = () => {
    const [total, setTotal] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const cart = JSON.parse(localStorage.getItem("cart"));
    useEffect(() => {
        const getTotal = () => {
            {
                cart.map((item) => {
                    setTotal(prev => prev + item.price);
                })
            }
        }
        getTotal();
    }, [])

    const handleOrderplaced = () => {
        setOrderPlaced(!orderPlaced);
        const emptyCart = [];
        localStorage.setItem("cart", JSON.stringify(emptyCart));
    }

    return (
        <>
            {!orderPlaced && <div className="cartContainer">
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: "0.2",
                    }}
                    className="leftSide">
                    <div className="leftSideWrapper">
                        {cart?.map((item, index) => (
                            <motion.div
                                className='cartItemDiv'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: ((index + 1) / 3) }}>
                                <CartItem item={item} />
                            </motion.div>
                        ))}
                        {cart.length == 0 &&
                            <div className='emptyCartDiv'>
                                <ProductionQuantityLimitsIcon fontSize='large'/>
                                Empty Cart! Buy Something to see Products Here!
                            </div>
                        }
                    </div>
                    <div className="placeOrder">
                        <button disabled={cart.length === 0} onClick={handleOrderplaced} className='placeOrderButton'>Place Order</button>
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
                        <span>Price ({cart.length} items)</span>
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

            </div>}
            {orderPlaced && <motion.div
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                className="orderPlacedDiv">
                <div className='orderplacedText'>
                    <img src={require('../../images/orderplaced.jpg')} />
                    <h1>Thankyou For Shopping from EcoCart!</h1>
                </div>
                {/* EXPLORE ALL PRODUCTS */}
                <div className="explore">
                    <Link to={'/category/all'} ><button class="button-56" role="button">Explore All Products</button></Link>
                </div>
            </motion.div>}

        </>
    )
}

export default CartPage
