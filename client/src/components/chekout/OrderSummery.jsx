import React from 'react';

export default function OrderSummary({ cartItems = [] }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-3 border rounded">
      <h5>Order Summary</h5>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ₹{total}</p>
    </div>
  );
}
