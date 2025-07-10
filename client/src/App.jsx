import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import SuccessPage from './pages/successPage/SuccessPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import OrderCard from './components/profile/OrderCard';
import SignUpFormPage from './pages/authPage/SignUpPage';
import LoginFormPage from './pages/authPage/LoginPage';
import ForgotPasswordPage from './pages/authPage/ForgotPasswordPage';
import VerifyOTPPage from './pages/authPage/VerifyOtpPage';
import ResetPasswordPage from './pages/authPage/ResetPasswordPage';
import Products from './pages/products/Products';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage
        //  cartItems={cartItems} onClearCart={onClearCart}
        />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ordercard" element={<OrderCard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
