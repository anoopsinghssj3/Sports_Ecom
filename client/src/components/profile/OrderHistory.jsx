// components/orders/OrderHistory.jsx
import React from 'react';
import OrderCard from './OrderCard';

export default function OrderHistory() {
  const dummyOrders = [
    {
      id: '1011',
      date: '2024-06-10',
      total: 4500,
      items: [
        { name: 'Football Jersey', price: 1200, quantity: 2 },
        { name: 'Cricket Bat', price: 1800, quantity: 1 }
      ]
    },
    {
      id: '1010',
      date: '2024-05-22',
      total: 2500,
      items: [
        { name: 'Running Shoes', price: 2500, quantity: 1 }
      ]
    }
  ];

  return (
    <div className="container mt-4">
      <h3 className="mb-4">🧾 Your Order History</h3>
      {dummyOrders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        dummyOrders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))
      )}
    </div>
  );
}
