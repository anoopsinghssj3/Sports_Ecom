import React from 'react';

export default function CheckoutForm({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Name</label>
                <input className="form-control" required />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input className="form-control" type="email" required />
            </div>
            <div className="mb-3">
                <label>Address</label>
                <textarea className="form-control" rows={3} required />
            </div>
            <button type="submit" className="btn btn-success">Place Order</button>
        </form>
    );
}
