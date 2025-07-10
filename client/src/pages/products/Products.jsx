// src/pages/Products.jsx
import React from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import mrf_bat from "/public/images/circket_bat.jpg";
import cosco_vollyball from "/public/images/cosco_vollyball.webp";
import decathlon_yoga_mat from "/public/images/decathlon_yoga_mat.jpg";
import nike_football from "/public/images/nike_football_shoe.webp";
import puma_gym_gloves from "/public/images/puma_gym_gloves.jpg";
import reebok_sport_shorts from "/public/images/reebok_sports_shorts.avif";
import spalding_basketball from "/public/images/spalding_basketball.webp";
import yonex_badminton_racket from "/public/images/yonex_badminton_racket.jpg"

const products = [
    {
        id: 1,
        title: "Adidas Cricket Bat",
        price: 2499,
        image: mrf_bat
    },
    {
        id: 2,
        title: "Nike Football Shoes",
        price: 3499,
        image: nike_football
    },
    {
        id: 3,
        title: "Cosco Volleyball",
        price: 799,
        image: cosco_vollyball
    },
    {
        id: 4,
        title: "Yonex Badminton Racket",
        price: 1599,
        image: yonex_badminton_racket
    },
    {
        id: 5,
        title: "Spalding Basketball",
        price: 1399,
        image: spalding_basketball
    },
    {
        id: 6,
        title: "Puma Gym Gloves",
        price: 499,
        image: puma_gym_gloves
    },
    {
        id: 7,
        title: "Reebok Sports Shorts",
        price: 799,
        image: reebok_sport_shorts
    },
    {
        id: 8,
        title: "Decathlon Yoga Mat",
        price: 999,
        image: decathlon_yoga_mat
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
