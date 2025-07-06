import React, { useState } from 'react';
import CartItem from './CartItem'; // Adjust the path if needed
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([

    {
      id: 1,
      name: 'Football Jersey',
      image: 'https://via.placeholder.com/60',
      price: 1200,
      quantity: 2
    },
    {
      id: 2,
      name: 'Running Shoes',
      image: 'https://via.placeholder.com/60',
      price: 2500,
      quantity: 1
    },
    {
      id: 3,
      name: 'Cricket Bat',
      image: 'https://via.placeholder.com/60',
      price: 1800,
      quantity: 1
    }
  ]);

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty < 1) return; // Prevent zero or negative quantity
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4">🛒 Your Shopping Cart</h4>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQty={handleUpdateQty}
            />
          ))}

          <hr />
          <div className="text-end">
            <h5>Total: ₹{getTotal()}</h5>
            <button className="btn btn-warning" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>

          </div>
        </>
      )}
    </div>
  );
}
