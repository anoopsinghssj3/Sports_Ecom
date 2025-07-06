import React from "react";
import categoriesSliderData from "./categoriesSliderData";
import "./CategorySlider.css";

function CategorySlider() {
    return (
        <div className="category-slider">
            {categoriesSliderData.map((cat, index) => (
                <div
                    key={index}
                    className="category-card"
                    style={{ backgroundColor: cat.bgColor }}
                >
                    <img src={cat.icon} alt={cat.title} className="category-icon" />
                    <p className="category-title">{cat.title}</p>
                </div>
            ))}
        </div>
    );
}

export default CategorySlider;
