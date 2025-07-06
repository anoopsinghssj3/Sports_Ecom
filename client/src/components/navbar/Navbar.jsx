import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaHeart, FaUserCircle, FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import "./Navbar.css";
import "../../App.css";
import categoriesData from "./navbarData.js"; 


function Navbar() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.className = ''; // clear old theme
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">MyStore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                {categoriesData.map((category, index) => (
                                    <li key={index} className={category.subcategories ? "dropdown-submenu" : ""}>
                                        <a
                                            className={`dropdown-item ${category.subcategories ? "dropdown-toggle" : ""}`}
                                            href="#"
                                        >
                                            {category.title}
                                        </a>
                                        {category.subcategories && (
                                            <ul className="dropdown-menu">
                                                {category.subcategories.map((item, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a className="dropdown-item" href="#">{item}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item d-flex align-items-center">
                            <form className="d-flex" role="search">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search" />
                                    <button className="btn btn-outline-light btn_search" type="submit">
                                        <IoIosSearch fontSize="1.3rem" />
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>

                    {/* Theme Dropdown */}
                    <div className="nav-item dropdown me-3">
                        <button
                            className="nav-link dropdown-toggle"
                            id="themeDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Theme
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="themeDropdown">
                            <li>
                                <button className="dropdown-item d-flex align-items-center bg-light text-dark"
                                    onClick={() => setTheme("light")}>
                                    <FaSun className="me-2" /> Light
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex align-items-center bg-dark text-light"
                                    onClick={() => setTheme("dark")}>
                                    <FaMoon className="me-2" /> Dark
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex align-items-center text-primary"
                                    onClick={() => setTheme("blue")}>
                                    <BsPalette className="me-2" /> Blue
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex align-items-center text-success"
                                    onClick={() => setTheme("green")}>
                                    <BsPalette className="me-2" /> Green
                                </button>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                <FaHeart className="me-1" /> Wishlist
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                <FaUserCircle className="me-1" /> Account
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                <FaShoppingCart className="me-1" /> Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
