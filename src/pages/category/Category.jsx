import React, { useEffect, useRef, useState } from 'react'
import './category.css'
import Navbar from '../../components/navbar/Navbar'
import { Link, useParams } from 'react-router-dom';
import PorductCard from '../../components/product card/PorductCard';
import { motion, useInView } from "framer-motion";
import { allProductList } from '../../sampledata';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Category = () => {

    const ref = useRef();
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    })

    const priceRef = useRef();
    const brandRef = useRef();
    const ratingRef = useRef();
    const product = useParams().product;
    const productSection = useRef();
    const isproductSectionInView = useInView(productSection, { once: true })
    const [productList, setProductList] = useState([]);
    const pageSize = 8;
    const [pageNumber, setPageNumber] = useState(1);
    const [page, setPage] = useState([]);


    function paginateArray(array, pageSize, pageNumber) {
        --pageNumber;
        return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    }
    useEffect(() => {
        if (product !== 'all') {
            setProductList(allProductList.filter(item => item.category === product))
        } else {
            setProductList(allProductList);
        }
        setPage(paginateArray(productList, pageSize, pageNumber));
    }, [])

    useEffect(() => {
        setPage(paginateArray(productList, pageSize, pageNumber));
    }, [pageNumber, page, productList])

    const handleFilters = (e) => {
        e.preventDefault();
        if (brandRef.current.value) {
            setProductList(allProductList.filter(item => item.brand === brandRef.current.value))
        }
        if (ratingRef.current.value) {
            setProductList(allProductList.filter(item => item.rating >= parseInt(ratingRef.current.value, 10)));
        }
        if (priceRef.current.value === 'aesc') {
            const sortedItems = [...productList].sort((a, b) => a.price - b.price);
            setProductList(sortedItems);
        } else if (priceRef.current.value === 'desc') {
            const sortedItems = [...productList].sort((a, b) => b.price - a.price);
            setProductList(sortedItems);
        }
    }


    return (
        <div ref={ref} className='containerCategory'>
            <div className="filters">
                <form className='filterForm' onSubmit={handleFilters}>
                    <select ref={priceRef} name="price" id="price">
                        <option value="">Price</option>
                        <option value="aesc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                    <select ref={ratingRef} name="rating" id="price">
                        <option value="">Rating</option>
                        <option value="4">4★ & above</option>
                        <option value="3">3★ & above</option>
                        <option value="2">2★ & above</option>
                        <option value="1">1★ & above</option>
                    </select>
                    <button className='filterButton' type='submit'>Filter</button>
                </form>
            </div>
            <motion.div
                initial={{ y: 100 }}
                animate={isproductSectionInView ? { y: 0 } : {}}
                transition={{
                    delay: "0.2"
                }}
                className="productSection" ref={productSection}>

                {page.map((item, index) => (
                    <motion.div
                        className='productCardDiv'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (index / 10) }}
                    >
                        <PorductCard price={item.price} img={item.images[0]} title={item.title} desc={item.description} rating={item.rating} />
                    </motion.div>
                ))}
            </motion.div>
            <div className="prevNextButtons">
                <span>Prev Page &nbsp;</span>
                <button disabled={pageNumber == 1} onClick={() => setPageNumber(prev => prev - 1)}><ArrowBackIosIcon /></button>
                <button disabled={(pageNumber * 8) >= productList.length} onClick={() => setPageNumber(prev => prev + 1)}><ArrowForwardIosIcon /></button>
                <span>&nbsp; Next Page</span>
            </div>
        </div>
    )
}

export default Category
