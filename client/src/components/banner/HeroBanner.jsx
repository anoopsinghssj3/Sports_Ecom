// HeroBanner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroBanner.css';
import cricket from "/public/images/cricket_banner.jpg";
import football from "/public/images/football_bannner.webp"
const slides = [
    {
        image: cricket,
        title: "Cricket Gear Sale",
        subtitle: "Up to 50% off on top brands",
        link: "/cricket"
    },
    {
        image: football,
        title: "Football Fever",
        subtitle: "Best Prices on Kits & Balls",
        link: "/football"
    },
    // {
    //     image: "https://example.com/gym-fitness.jpg",
    //     title: "Fitness Essentials",
    //     subtitle: "From Dumbbells to Yoga Mats",
    //     link: "/fitness"
    // }
];

function HeroBanner() {
    return (
        <div className="hero-banner">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="hero-slide position-relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="hero-img w-100 vh-100 object-cover"
                            />
                            <div className="hero-content position-absolute top-50 start-50 translate-middle text-white text-center">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn btn-light">Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroBanner;
