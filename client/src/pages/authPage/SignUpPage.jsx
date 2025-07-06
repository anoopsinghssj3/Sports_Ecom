import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    alert("✅ Signup Successful!");
    reset();
  };

  useEffect(() => {
    const bodyClass = document.body.className;
    if (bodyClass.includes("theme-dark")) setTheme("dark");
    else if (bodyClass.includes("theme-blue")) setTheme("blue");
    else if (bodyClass.includes("theme-green")) setTheme("green");
    else setTheme("light");
  }, []);

  const inputClass = `form-control bg-${theme === 'dark' ? 'dark text-white' : 'white'}`;
  const buttonClass = `btn btn-${theme === 'dark' ? 'light' : 'primary'} w-100 mt-2`;

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className={`card p-4 shadow w-100 bg-${theme === 'dark' ? 'dark text-white' : 'light'}`} style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className={`${inputClass} ${errors.name ? 'is-invalid' : ''}`}
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className={`${inputClass} ${errors.username ? 'is-invalid' : ''}`}
              placeholder="john_doe"
              {...register("username", { required: "Username is required" })}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>

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

          {/* Mobile */}
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className={`${inputClass} ${errors.mobile ? 'is-invalid' : ''}`}
              placeholder="9876543210"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10-digit number"
                }
              })}
            />
            <div className="invalid-feedback">{errors.mobile?.message}</div>
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

          {/* Sign Up */}
          <button type="submit" className={buttonClass}>
            Sign Up
          </button>
        </form>

        {/* Google Signup Button */}
        <div className="text-center mt-3">
          <button
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={() => alert("Google sign up coming soon...")}
          >
            <FaGoogle /> Sign Up with Google
          </button>
        </div>

        {/* Login Redirect */}
        <hr />
        <button
          type="button"
          className={`btn btn-outline-${theme === 'dark' ? 'light' : 'primary'} w-100`}
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
