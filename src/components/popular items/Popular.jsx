import React from 'react'

import './popular.css'
const Popular = ({ img, name, price }) => {
    return (
        <>
            {/* Popular products Electronics */}
            <div className="popularItem">
                <img src={require(`../../images/${img}`)} />
                <span className='popularItemName'>{name}</span>
                <span className='popularItemPrice'>{price}</span>
            </div>
        </>
    )
}

export default Popular
