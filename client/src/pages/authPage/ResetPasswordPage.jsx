import React, { useState } from 'react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (password.length < 6) return alert("Password must be at least 6 characters");
    alert("✅ Password Reset Successful!");
  };

  return (
    <div className="container mt-5 col-md-6 shadow p-4 rounded bg-light">
      <h4 className="mb-3">Reset Your Password</h4>
      <form onSubmit={handleReset}>
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-dark w-100">Reset Password</button>
      </form>
    </div>
  );
}
