// components/orders/OrderCard.jsx
import React from 'react';

export default function OrderCard({ order }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Order #{order.id}</h5>
        <p className="card-text">Date: {order.date}</p>
        <p className="card-text">Total: ₹{order.total}</p>
        <ul className="list-group list-group-flush">
          {order.items.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between" key={index}>
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
