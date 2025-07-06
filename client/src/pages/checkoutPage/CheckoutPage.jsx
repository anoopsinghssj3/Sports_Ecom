import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import CheckoutForm from '../../components/chekout/CheckoutForm';
import OrderSummary from '../../components/chekout/OrderSummery';

export default function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const cartItems = location.state?.cartItems || [];

    const handleSubmit = () => {
        // Clear or save order logic here if needed
        navigate("/success");
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Checkout</h2>
            <div className="row">
                <div className="col-md-7">
                    <CheckoutForm onSubmit={handleSubmit} />
                </div>
                <div className="col-md-5">
                    <OrderSummary cartItems={cartItems} />
                </div>
            </div>
        </div>
    );
}
