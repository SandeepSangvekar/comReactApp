import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
export const Header = () =>{
    return (
        <>
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="container-fluid custom-container">
                    <a className="navbar-brand" to="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <span>
                                
                            </span>
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/products/1">Product 1</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/products/2">Product 2</NavLink></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                            </ul>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/services/1">Service 1</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/2">Service 2</NavLink></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                            </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/success-stories">Success Stories</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/career">Career</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}