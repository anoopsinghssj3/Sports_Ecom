import React from "react";
import categoriesSliderDataPage from "./categoriesSliderDataPage";
import "./CategorySliderPage.css";

function CategorySliderPage() {
    return (
        <div className="category-slider">
            {categoriesSliderDataPage.map((cat, index) => (
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

export default CategorySliderPage;
