// src/pages/Products.jsx
import React from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';

const products = [
    {
        id: 1,
        title: "Adidas Cricket Bat",
        price: 2499,
        image: "https://images.unsplash.com/photo-1618354691264-4ffbba1c56d1?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Nike Football Shoes",
        price: 3499,
        image: "https://images.unsplash.com/photo-1616401781228-03a3752098c2?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Cosco Volleyball",
        price: 799,
        image: "https://images.unsplash.com/photo-1609646738226-bc81d4ec12c6?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "Yonex Badminton Racket",
        price: 1599,
        image: "https://images.unsplash.com/photo-1622620692076-b3aa6820ef3c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        title: "Spalding Basketball",
        price: 1399,
        image: "https://images.unsplash.com/photo-1585776245991-4e52fdd20c7a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        title: "Puma Gym Gloves",
        price: 499,
        image: "https://images.unsplash.com/photo-1633448052023-958f3fa3a0ae?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        title: "Reebok Sports Shorts",
        price: 799,
        image: "https://images.unsplash.com/photo-1600185365927-3c4b626d18fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        title: "Decathlon Yoga Mat",
        price: 999,
        image: "https://images.unsplash.com/photo-1618082845227-208e734f49cf?auto=format&fit=crop&w=400&q=80"
    }
];

function Products() {
    return (
        <div className="products-page py-4">
            <div className="container">
                <h2 className="mb-4 text-center">All Products</h2>
                <ProductGrid title="" products={products} />
            </div>
        </div>
    );
}

export default Products;
