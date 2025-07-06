import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [method, setMethod] = useState('email');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return alert('Please enter your email or mobile number');
    // Simulate sending OTP
    console.log(`Sending OTP to ${value} via ${method}`);
    navigate('/verify-otp', { state: { method, value } });
  };

  return (
    <div className="container mt-5 col-md-6 shadow p-4 rounded bg-light">
      <h4 className="mb-3">Forgot Password</h4>

      <form onSubmit={handleSubmit}>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="emailOption"
            className="form-check-input"
            checked={method === 'email'}
            onChange={() => setMethod('email')}
          />
          <label className="form-check-label" htmlFor="emailOption">Email</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="mobileOption"
            className="form-check-input"
            checked={method === 'mobile'}
            onChange={() => setMethod('mobile')}
          />
          <label className="form-check-label" htmlFor="mobileOption">Mobile</label>
        </div>

        <div className="my-3">
          <label>{method === 'email' ? 'Email' : 'Mobile Number'}</label>
          <input
            type={method === 'email' ? 'email' : 'tel'}
            className="form-control"
            placeholder={method === 'email' ? 'example@gmail.com' : 'Enter 10-digit number'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">Send OTP</button>
      </form>
    </div>
  );
}
