import React from "react";
import "./FeaturedCollection.css";

const featuredData = [
    {
        title: "Top Cricket Gear",
        img: "https://cdn-icons-png.flaticon.com/128/3082/3082032.png",
    },
    {
        title: "Fitness Essentials",
        img: "https://cdn-icons-png.flaticon.com/128/943/943634.png",
    },
    {
        title: "Football Favorites",
        img: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
    },
    {
        title: "Badminton Picks",
        img: "https://cdn-icons-png.flaticon.com/128/2223/2223615.png",
    },
];

const FeaturedCollection = () => {
    return (
        <div className="featured-section container my-5 ">
            <h2 className="text-center fw-bold mb-4">Featured Collections</h2>
            <div className="row justify-content-center">
                {featuredData.map((item, idx) => (
                    <div key={idx} className="col-sm-6 col-md-3 mb-4">
                        <div className="card shadow-sm text-center h-100 featured-card">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="card-img-top mx-auto p-4 featured-img"
                            />
                            <div className="card-body">
                                <h6 className="card-title">{item.title}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCollection;
