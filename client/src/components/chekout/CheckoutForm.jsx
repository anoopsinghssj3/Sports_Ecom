import React, { useState } from 'react';

export default function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    onSubmit(); // Optional: Clear cart
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input type="text" name="phone" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Address</label>
        <textarea name="address" className="form-control" onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="btn btn-success w-100">Place Order</button>
    </form>
  );
}
