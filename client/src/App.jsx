import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Checkout from './pages/checkout/Checkout';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout
        //  cartItems={cartItems} onClearCart={onClearCart}
          />} />
      </Routes>
    </>
  )
}

export default App
