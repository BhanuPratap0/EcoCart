import React, { useEffect, useRef, useState } from 'react'
import './category.css'
import Navbar from '../../components/navbar/Navbar'
import { Link, useParams } from 'react-router-dom';
import PorductCard from '../../components/product card/PorductCard';
import { motion, useInView } from "framer-motion";
const Category = () => {
    const product = useParams().product;
    const productSection = useRef();
    const isproductSectionInView = useInView(productSection, { once: true })
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            let data = await fetch(`https://dummyjson.com/products/category/${product}`);
            let parsedData = await data.json();
            console.log(parsedData.products)
            setProductList(parsedData.products);
        }
        fetchProducts();
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => console.log(json));
    }, [])
    return (
        <div className='containerCategory'>
            <div className="filters">
                <form className='filterForm'>
                    <select name="price" id="price">
                        <option value="volvo">Price</option>
                        <option value="volvo">Low to High</option>
                        <option value="saab">High to Low</option>
                    </select>
                    <select name="price" id="price">
                        <option value="volvo">Rating</option>
                        <option value="saab">4★ & above</option>
                        <option value="opel">3★ & above</option>
                        <option value="audi">2★ & above</option>
                        <option value="audi">1★ & above</option>
                    </select>
                    <select name="price" id="price">
                        <option value="volvo">Brands</option>
                        <option value="saab">₹1000-4000</option>
                        <option value="opel">₹4000-8000</option>
                        <option value="audi">₹8000-10000</option>
                    </select>
                </form>
            </div>
            <motion.div
                initial={{ y: 100 }}
                animate={isproductSectionInView ? { y: 0 } : {}}
                transition={{
                    delay: "0.2"
                }}
                className="productSection" ref={productSection}>

                {productList.map((item,index) => (
                    <motion.div
                        className='productCardDiv'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (index / 10) }}
                    >
                        <PorductCard img={item.images[0]} title={item.title} desc={item.description} rating={item.rating} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Category
