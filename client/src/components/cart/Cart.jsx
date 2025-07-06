import React, { useState } from 'react';
import CartItem from './CartItem';
import OrderSummary from '../../components/chekout/OrderSummery';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Football",
      image: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
      price: 700,
      quantity: 1,
    },
    {
      id: 2,
      name: "Tennis Racket",
      image: "https://cdn-icons-png.flaticon.com/512/2806/2806351.png",
      price: 1500,
      quantity: 2,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: qty } : item)
    );
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4">Your Cart</h3>
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
          <OrderSummary items={cartItems} />
        </>
      )}
    </div>
  );
}
