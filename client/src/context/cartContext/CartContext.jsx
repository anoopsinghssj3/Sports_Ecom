import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const clearCart = () => setCartItems([]);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};
