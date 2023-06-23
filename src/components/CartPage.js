import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-content">
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <button className="checkout-button">Check Out</button>
      <button className="paypal-button">Pay with PayPal</button>
    </div>
  );
}

export default CartPage;
