import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Category from './pages/category/Category';
import Navbar from './components/navbar/Navbar';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CartState from './context/CartState';
import CartPage from './pages/cart page/CartPage';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
    
      <CartState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/category/:product" element={<Category />} ></Route>
          <Route exact path="/productDetail/:productName" element={<ProductDetail />} ></Route>
          <Route exact path="/cartPage" element={<CartPage />} ></Route>
        </Routes>
        <Footer/>
      </CartState>
    </>
  );
}

export default App;
