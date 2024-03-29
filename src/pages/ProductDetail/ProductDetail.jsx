import React, { useContext, useEffect, useRef, useState } from 'react'
import './productDetail.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { categoryList, productsList } from '../../data.js';
import Carousel from 'react-multi-carousel';
import { Link, useNavigate, useParams } from 'react-router-dom';
import cartContext from '../../context/cartContext.js';
import { allProductList } from '../../sampledata';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ProductDetail = () => {
    
    const ref = useRef();
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    })

    const { cart, setCart } = useContext(cartContext);
    const productName = useParams().productName;
    console.log(productName)
    const found = allProductList.find(obj => {
        return obj.title === productName;
    });
    const similarProducts = allProductList.filter(obj => {
        return obj.category===found.category
    });

    const object = {
        img: found.images[0],
        name: found.title,
        price: found.price,
        cost: found.cost,
        category: found.category,
        quantity: 1,
    }
    let newObject = [];

    const addToCart = () => {
        let ifPresent = cart.find((i) => i.name === object.name);
        if (ifPresent) {
            newObject = cart.map((i) => (i.name === object.name ? { ...i, quantity: i.quantity + 1 } : i));
        } else {
            newObject = [...cart, object];
        }
        localStorage.setItem("cart", JSON.stringify(newObject));
        setCart((prevItems) => {
            const existingItem = prevItems.find((i) => i.name === object.name);

            if (existingItem) {
                return prevItems.map((i) => (i.name === object.name ? { ...i, quantity: i.quantity + 1 } : i))
            } else {
                return [...prevItems, object];
            }
        })
    }

    let history = useNavigate();
    const buyNow = () => {
        let ifPresent = cart.find((i) => i.name === object.name);
        if (ifPresent) {
            newObject = cart.map((i) => (i.name === object.name ? { ...i, quantity: i.quantity + 1 } : i));
        } else {
            newObject = [...cart, object];
        }
        localStorage.setItem("cart", JSON.stringify(newObject));
        setCart((prevItems) => {
            const existingItem = prevItems.find((i) => i.name === object.name);

            if (existingItem) {
                return prevItems.map((i) => (i.name === object.name ? { ...i, quantity: i.quantity + 1 } : i))
            } else {
                return [...prevItems, object];
            }
        })
        history('/cartPage')
    }
    console.log(cart);
    return (
        <>
            <div ref={ref} className="mainContainer">
                <div className="leftSide">
                    <img className='productImage' src={found.images[0]} />
                    <div className="leftSideButtons">
                        <button className='cart' onClick={addToCart}> <ShoppingCartIcon fontSize='large' />ADD TO CART</button>
                        <button onClick={buyNow} className='buy'><FlashOnIcon fontSize='large' /> BUY NOW</button>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="title">{found.title}</div>
                    <span className="ratingText">3.8★</span>
                    <span className="priceText">₹{found.price}</span>
                    <span>Available offers</span>
                    <div className="offers">
                        <div className="tag">
                            <LocalOfferIcon fontSize='small' color='success' />
                            <LocalOfferIcon fontSize='small' color='success' />
                            <LocalOfferIcon fontSize='small' color='success' />
                        </div>
                        <div className="offersItems">
                            <span className='offerItem'><b> &nbsp;&nbsp;Bank Offer</b>10% off on Citi-branded Credit and Debit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</span>
                            <span className='offerItem'><b> &nbsp;&nbsp;Bank Offer</b>10% off on Citi-branded Credit and Debit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</span>
                            <span className='offerItem'><b> &nbsp;&nbsp;Bank Offer</b>10% off on Citi-branded Credit and Debit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</span>
                        </div>
                    </div>
                    <div className="desc">
                        <span className='descHead'>{found.description}</span>
                        <br></br>
                        {found.desc}
                    </div>
                </div>

            </div>
            <div className="smililarProducts">
                {/* Similar Products */}
                <div className="similarProducts">
                    <div className="similarProductsHeading">
                        <h3>Similar Products</h3>
                        <ArrowCircleRightIcon fontSize='large' style={{ marginRight: '30px' }} />
                    </div>
                    <Carousel
                        responsive={responsive}
                    >
                        {similarProducts.map((item) => (
                            <div className="popularItem">
                                <Link to={`/productDetail/${item.title}`} ><img src={item.images[0]} /></Link>
                                <span className='popularItemName'>{item.title}</span>
                                <span className='popularItemPrice'>₹{item.price}</span>
                            </div>
                        )
                        )}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
