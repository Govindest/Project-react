import React, { useState } from 'react';

const HomePage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(currentCart => [...currentCart, product]);
    // Store the updated cart items in local storage
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  }

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cart) {
      total += item.price;
    }
    return total;
  }

  return (
    <div className="homepage">
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus libero non felis tincidunt, at interdum felis accumsan. Mauris ac faucibus tellus, vitae rhoncus sem. Vestibulum interdum nibh ac libero accumsan venenatis. Ut finibus, ipsum vel feugiat fermentum, neque risus hendrerit purus, et tincidunt turpis tellus nec nisl.</p>
      </div>
      <div className="product-list">
        <div className="product-card">
          <h2>Product 1</h2>
          <p>Price: $10</p>
          <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>
            Add to Cart
          </button>
        </div>
        <div className="product-card">
          <h2>Product 2</h2>
          <p>Price: $15</p>
          <button onClick={() => addToCart({ id: 2, name: 'Product 2', price: 15 })}>
            Add to Cart
          </button>
        </div>
        <div className="product-card">
          <h2>Product 3</h2>
          <p>Price: $20</p>
          <button onClick={() => addToCart({ id: 3, name: 'Product 3', price: 20 })}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="logo-container">
        <img src="https://picsum.photos/300" alt="Random Logo" />
      </div>
      <div className="total-price">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
    </div>
  );
}

export default HomePage;
