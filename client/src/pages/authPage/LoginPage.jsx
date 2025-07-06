import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    const bodyClass = document.body.className;
    if (bodyClass.includes("theme-dark")) setTheme("dark");
    else if (bodyClass.includes("theme-blue")) setTheme("blue");
    else if (bodyClass.includes("theme-green")) setTheme("green");
    else setTheme("light");
  }, []);

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('✅ Login Successful!');
    navigate('/profile');
  };

  const inputClass = `form-control bg-${theme === 'dark' ? 'dark text-white' : 'white'}`;
  const buttonClass = `btn btn-${theme === 'dark' ? 'light' : 'primary'} w-100 mt-2`;

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className={`card p-4 shadow w-100 bg-${theme === 'dark' ? 'dark text-white' : 'light'}`} style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`${inputClass} ${errors.email ? 'is-invalid' : ''}`}
              placeholder="email@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`${inputClass} ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />
              <button
                type="button"
                className={`btn btn-outline-${theme === 'dark' ? 'light' : 'secondary'}`}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="invalid-feedback d-block">{errors.password?.message}</div>
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-3">
            <button
              type="button"
              className="btn btn-link text-decoration-none p-0"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button type="submit" className={buttonClass}>Login</button>
        </form>

        {/* Google Login */}
        <div className="text-center mt-3">
          <button
            className={`btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2`}
            onClick={() => alert("Google login coming soon...")}
          >
            <FaGoogle /> Login with Google
          </button>
        </div>

        {/* Sign Up Redirect */}
        <hr />
        <button
          type="button"
          className={`btn btn-outline-${theme === 'dark' ? 'light' : 'primary'} w-100`}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
}
