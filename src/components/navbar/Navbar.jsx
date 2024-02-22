import React, { useContext, useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Search } from "@mui/icons-material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import cartContext from '../../context/cartContext';

const Navbar = () => {
  const [search, setSearch] = useState(null);
  const { cart } = useContext(cartContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  })
  return (
    <>
      <div ref={ref} className="navbar">
        <div className="navbarLeft">
          <Link to="/" style={{ textDecoration: "none" }} >
            <span className='logo' >EcoCart</span>
          </Link>
        </div>
        <div className="navbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input id="searchFriends" onChange={(e) => setSearch(e.target.value)} placeholder="Search for product" className="searchInput" />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarRightIcons">
            <div className="iconItem">
              <Link to={'/'} style={{ color: 'black' }}>
                <HomeIcon />
                <span>Home</span>
              </Link>
            </div>
            <div className="iconItem">
              <Link to={'/cartPage'} style={{ color: 'black' }}>
                <ShoppingCartIcon />
                <span className="topbarIconBadge">{cart.length}</span>
                <span>Cart</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
