import React from 'react';
import CheckoutForm from '../../components/chekout/CheckoutForm';
import OrderSummary from '../../components/chekout/OrderSummery';

export default function Checkout({ cartItems, onClearCart }) {
    return (
        <div className="container py-5">
            <h2 className="mb-4">Checkout</h2>
            <div className="row">
                <div className="col-md-7">
                    <CheckoutForm onSubmit={onClearCart} />
                </div>
                <div className="col-md-5">
                    <OrderSummary cartItems={cartItems} />
                </div>
            </div>
        </div>
    );
}
