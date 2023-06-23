import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';



import Home from './components/Homepage';
import AboutUs from './components/AboutUs.JS';
import Cart from './components/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(currentCart => [...currentCart, item]);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
