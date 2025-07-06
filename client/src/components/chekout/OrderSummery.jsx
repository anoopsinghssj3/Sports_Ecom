export default function OrderSummary({ cartItems = [] }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h5>Order Summary</h5>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ₹{total}</p>
    </div>
  );
}
