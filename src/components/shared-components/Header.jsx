// import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import React, { useEffect, useState } from "react";
export const Header = () =>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const closeNavbar = () => {
    //     setTimeout(() => {
    //         const navbar = document.getElementById("navbarSupportedContent");
    //         if (navbar && navbar.classList.contains("show")) {
    //             new bootstrap.Collapse(navbar).hide(); // Properly closes navbar after navigation
    //         }
    //     }, 200); // Small delay ensures React Router updates first
    // };

    const closeNavbar = () => {
        const navbar = document.getElementById("navbarSupportedContent");
        if (navbar && navbar.classList.contains("show")) {
          navbar.classList.remove("show"); // For direct class manipulation
        }
      };
      
    
    return (
        <>
        {/* <div className="header"> */}
        <div className={`header ${isScrolled ? "scrolled" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-white">
                <div className="container-fluid custom-container">
                    <NavLink className="navbar-brand" to="/">Logo</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <span>
                                
                            </span>
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about" onClick={closeNavbar}>About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/products/1" onClick={closeNavbar}>Video Analytics Solutions</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/2" onClick={closeNavbar}>AI-Hub</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/3" onClick={closeNavbar}>Recruitment Management System</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/4" onClick={closeNavbar}>CRM</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/5" onClick={closeNavbar}>Dealer Management System</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/6" onClick={closeNavbar}>Asset Management System</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/7" onClick={closeNavbar}>Integrated Toll Management System</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/8" onClick={closeNavbar}>IoT</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/9" onClick={closeNavbar}>Yard Management System</NavLink></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                            </ul>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/services/1" onClick={closeNavbar}>Mobile Development</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/2" onClick={closeNavbar}>Custom Software Development</NavLink></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                            </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/success-stories" onClick={closeNavbar}>Success Stories</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/career" onClick={closeNavbar}>Career</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}