import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
    return (
        <div className="container text-center py-5">
            <h2 className="text-success">🎉 Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You'll receive a confirmation shortly.</p>
            <Link to="/" className="btn btn-primary mt-3">Go to Home</Link>
        </div>
    );
}
