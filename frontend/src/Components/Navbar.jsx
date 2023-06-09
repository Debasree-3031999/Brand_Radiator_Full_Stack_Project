import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <Link style={{textDecoration:"none"}} to="/">Logo</Link>
            </div>
            <div className="hamburger-menu">
                <button className="hamburger-menu__button" onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {isOpen && (
                    <div className="hamburger-menu__list">
                        <Link to="/" className="hamburger-menu__item" onClick={handleMenuToggle}>
                            Home
                        </Link>
                        <Link to="/about" className="hamburger-menu__item" onClick={handleMenuToggle}>
                            About
                        </Link>
                        <Link to="/contactus" className="hamburger-menu__item" onClick={handleMenuToggle}>
                            Contact Us
                        </Link>
                        <Link to="/admin" className="hamburger-menu__item" onClick={handleMenuToggle}>
                            Admin
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}