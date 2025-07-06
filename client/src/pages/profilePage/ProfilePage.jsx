import React from 'react';
import OrderHistory from '../../components/profile/OrderHistory';

export default function ProfilePage() {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">👤 My Profile</h2>

            {/* User Info */}
            <div className="mb-4 p-3 bg-light rounded shadow-sm">
                <h5>User Info</h5>
                <p>Name: John Doe</p>
                <p>Email: john@example.com</p>
            </div>

            {/* Order History */}
            <OrderHistory />
        </div>
    );
}
