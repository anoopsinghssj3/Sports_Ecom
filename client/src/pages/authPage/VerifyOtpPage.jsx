// src/pages/authPage/VerifyOtpPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VerifyOtpPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { method, value } = location.state || {};

  const onSubmit = (data) => {
    console.log('OTP Verified:', data.otp);
    // In real app: verify OTP from backend here
    navigate('/reset-password');
  };

  if (!method || !value) {
    return (
      <div className="container mt-5">
        <h5 className="text-danger">Missing data. Please go back and submit your email or mobile.</h5>
      </div>
    );
  }

  return (
    <div className="container mt-5 col-md-6 shadow p-4 rounded bg-light">
      <h4 className="mb-3">Verify OTP</h4>
      <p>OTP sent to your <strong>{method}</strong>: <em>{value}</em></p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Enter OTP</label>
          <input
            type="text"
            className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
            {...register("otp", {
              required: "OTP is required",
              pattern: {
                value: /^[0-9]{4,6}$/,
                message: "OTP must be 4-6 digits",
              }
            })}
          />
          <div className="invalid-feedback">{errors.otp?.message}</div>
        </div>

        <button type="submit" className="btn btn-success w-100">Verify OTP</button>
      </form>
    </div>
  );
}
