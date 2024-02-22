import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'
const PorductCard = ({ img, title, desc, rating, price }) => {
  return (
    <div>
      <Link className='productCard' to={`/productDetail/${title}`} style={{ textDecoration: 'none', color: 'black' }} >
        <div className='productCardWrapper' >
          <img className='productCardImg' src={img} />
          <span className='productTitle' >{title}</span>
          
          <span className='rating' >{rating}★</span>
          <span className='price' >₹{price}</span>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  )
}
export default PorductCard
