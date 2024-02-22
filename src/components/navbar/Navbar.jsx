import React, { useContext, useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Search } from "@mui/icons-material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import cartContext from '../../context/cartContext';
import { allProductList } from '../../sampledata';

const Navbar = () => {
  const [search, setSearch] = useState(null);
  const { cart } = useContext(cartContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  })
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    if (!e.target.value === '') {
      setResults([]);
    }
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === '') {
      setResults([]);
    } else {
      const searchResults = allProductList.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      console.log(searchResults);
      setResults(searchResults);
    }
  };
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
            <input id="searchFriends" onChange={handleSearch} placeholder="Search for product" className="searchInput" />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarRightIcons">
            <div className="iconItem">
              <Link to={'/'} style={{ color: 'black' }}>
                <HomeIcon />
                <span className='navbarItemText'>Home</span>
              </Link>
            </div>
            <div className="iconItem">
              <Link to={'/cartPage'} style={{ color: 'black' }}>
                <ShoppingCartIcon />
                <span className="topbarIconBadge">{cart.length}</span>
                <span className='navbarItemText'>Cart</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
      {results.length !== 0 && <div className="searchContainer">
        {results.map((item) => (
          <Link to={`productDetail/${item.title}`} style={{ color: 'black' }}>
            <div className='searchItems'>
              <img className='searchImage' src={item.images[0]} />
              <div className='searchItemText'>
                <span className='searchItemTitle'>{item.title}</span>
                <span>{item.price}</span>
              </div>
            </div>
          </Link>
        ))}

      </div>}
    </>
  )
}

export default Navbar
