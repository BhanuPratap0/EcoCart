import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import { categoryList } from '../../data'
import Popular from '../../components/popular items/Popular'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Carousel from 'react-multi-carousel';
import { motion, useInView } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

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


const Home = () => {
  
  const categorySection = useRef();
  const bestProductSection = useRef();
  const bestProductSection2 = useRef();
  const isCategorySectionInView = useInView(categorySection, { once: true, margin: "-100px" })
  const isbestProductSectionInView = useInView(bestProductSection, { once: true, margin: "-100px" })
  const isbestProductSectionInView2 = useInView(bestProductSection2, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        delay: "0.2"
      }}
    >
      <div>
        <div  id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={require('../../images/banner.jpg')} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require('../../images/banner-2.jpg')} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={require('../../images/banner-3.jpg')} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <motion.div
        ref={categorySection}
        className="category"
        initial={{ x: "-300px" }}
        animate={isCategorySectionInView ? { x: 0 } : {}}
      >
        {categoryList.map((item, index) => (
          <Link to={`/category/${item.link}`} style={{ textDecoration: 'none', color: 'black' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index / 5) }}
              className="categoryItem">
              <img src={require(`../../images/${item.img}`)} />
              <span>{item.name}</span>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* BEST OF ELECTRONIC */}
      <motion.div
        ref={bestProductSection}
        initial={{ x: -200 }}
        animate={isbestProductSectionInView ? { x: 0 } : {}}
        className="popularProducts">
        <div className="popularProductsHeading">
          <h3>Best of Electronics</h3>
          <ArrowCircleRightIcon fontSize='large' style={{ marginRight: '30px' }} />
        </div>
        <Carousel
          responsive={responsive}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView ? { opacity: 1 } : {}}
            transition={{ delay: '0.5' }}
            className="popularItem">
            <Link to='productDetail/iPhone 9'><img src={`https://cdn.dummyjson.com/product-images/1/thumbnail.jpg`} /></Link>
            <span className='popularItemName'>iPhone 9</span>
            <span className='popularItemPrice'>Shop Now!</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView ? { opacity: 1 } : {}}
            transition={{ delay: '1' }}
            className="popularItem">
            <Link to='productDetail/Samsung Universe 9'><img src={`https://cdn.dummyjson.com/product-images/3/thumbnail.jpg`} /></Link>
            <span className='popularItemName'>Samsung Universe 9</span>
            <span className='popularItemPrice'>Shop Now!</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView ? { opacity: 1 } : {}}
            transition={{ delay: '1.5' }}
            className="popularItem">
            <Link to='productDetail/MacBook Pro'><img src={`https://cdn.dummyjson.com/product-images/6/thumbnail.png`} /></Link>
            <span className='popularItemName'>MacBook Pro</span>
            <span className='popularItemPrice'>From ₹59,999</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView ? { opacity: 1 } : {}}
            transition={{ delay: '2' }}
            className="popularItem">
            <Link to='productDetail/HP Pavilion 15-DK1056WM'><img src={`https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg`} /></Link>
            <span className='popularItemName'>HP Pavilion 15-DK1056WM</span>
            <span className='popularItemPrice'>From ₹442</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView ? { opacity: 1 } : {}}
            transition={{ delay: '2.5' }}
            className="popularItem">
            <Link to='productDetail/Microsoft Surface Laptop 4'><img src={`https://cdn.dummyjson.com/product-images/8/thumbnail.jpg`} /></Link>
            <span className='popularItemName'>Microsoft Surface Laptop 4</span>
            <span className='popularItemPrice'>From ₹149</span>
          </motion.div>
        </Carousel>
      </motion.div>

      {/* BEST OF CLOTHING */}
      <motion.div
        ref={bestProductSection2}
        initial={{ x: -200 }}
        animate={isbestProductSectionInView2 ? { x: 0 } : {}}
        className="popularProducts">
        <div className="popularProductsHeading">
          <h3>Best of Clothings</h3>
          <ArrowCircleRightIcon fontSize='large' style={{ marginRight: '30px' }} />
        </div>
        <Carousel
          responsive={responsive}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView2 ? { opacity: 1 } : {}}
            transition={{ delay: '0.5' }}
            className="popularItem">
            <img src={require(`../../images/shopping-1.png`)} />
            <span className='popularItemName'>Shirts</span>
            <span className='popularItemPrice'>Shop Now!</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView2 ? { opacity: 1 } : {}}
            transition={{ delay: '1' }}
            className="popularItem">
            <img src={require(`../../images/shopping-2.png`)} />
            <span className='popularItemName'>Deep Neck Dori Top</span>
            <span className='popularItemPrice'>From ₹147</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView2 ? { opacity: 1 } : {}}
            transition={{ delay: '1.5' }}
            className="popularItem">
            <img src={require(`../../images/shopping-3.png`)} />
            <span className='popularItemName'>Korean Baggy Shirt</span>
            <span className='popularItemPrice'>From ₹1299</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView2 ? { opacity: 1 } : {}}
            transition={{ delay: '2' }}
            className="popularItem">
            <img src={require(`../../images/shopping-4.png`)} />
            <span className='popularItemName'>Printed White Dress</span>
            <span className='popularItemPrice'>From ₹442</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isbestProductSectionInView2 ? { opacity: 1 } : {}}
            transition={{ delay: '2.5' }}
            className="popularItem">
            <img src={require(`../../images/shopping-5.png`)} />
            <span className='popularItemName'>Salwar Suit</span>
            <span className='popularItemPrice'>From ₹1449</span>
          </motion.div>
        </Carousel>
      </motion.div>

      {/* EXPLORE ALL PRODUCTS */}
      <div className="explore">
        <Link to={'/category/all'} ><button class="button-56" role="button">Explore All Products</button></Link>
      </div>
    </motion.div>
  )
}

export default Home
