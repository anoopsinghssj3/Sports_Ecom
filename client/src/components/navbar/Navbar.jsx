import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaHeart, FaUserCircle, FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import "../../App.css";
import categoriesData from "./navbarData.js";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">MyStore</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu">
                {categoriesData.map((category, index) => (
                  <li key={index} className={category.subcategories ? "dropdown-submenu" : ""}>
                    <Link className={`dropdown-item ${category.subcategories ? "dropdown-toggle" : ""}`} to="#">
                      {category.title}
                    </Link>
                    {category.subcategories && (
                      <ul className="dropdown-menu">
                        {category.subcategories.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link className="dropdown-item" to="#">{item}</Link>
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

          {/* Theme Selector */}
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
                <button className="dropdown-item d-flex align-items-center bg-light text-dark" onClick={() => setTheme("light")}>
                  <FaSun className="me-2" /> Light
                </button>
              </li>
              {/* <li>
                <button className="dropdown-item d-flex align-items-center bg-dark text-light" onClick={() => setTheme("dark")}>
                  <FaMoon className="me-2" /> Dark
                </button>
              </li> */}
              <li>
                <button className="dropdown-item d-flex align-items-center text-primary" onClick={() => setTheme("blue")}>
                  <BsPalette className="me-2" /> Blue
                </button>
              </li>
              {/* <li>
                <button className="dropdown-item d-flex align-items-center text-success" onClick={() => setTheme("green")}>
                  <BsPalette className="me-2" /> Green
                </button>
              </li> */}
            </ul>
          </div>

          {/* Right-side links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/wishlist">
                <FaHeart className="me-1" /> Wishlist
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/cart">
                <FaShoppingCart className="me-1" /> Cart
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle d-flex align-items-center"
                to="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserCircle className="me-1" /> Account
              </Link>

              <ul className="dropdown-menu" aria-labelledby="userDropdown">
                <li>
                  <Link to="/login" className="dropdown-item">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="dropdown-item">Sign Up</Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
