 import { Link } from "react-router-dom"
 import { NavLink } from "react-router-dom";
 import './Footer.css';
 export const Footer = () =>{
    return (
        <>
        <div className="footer paddingY">
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8 col-sm-6">
                                <div className="footer-logo">
                                <NavLink to="/"><img src="/images/white-logo.png" className="img-fluid" alt="" /></NavLink>
                                </div>
                                <p>We specialize in crafting data-driven solutions tailored to meet the distinct challenges encountered by organizations across a diverse range of industry verticals.</p>
                                <ul className="social-main">
                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://in.pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                    <h3>Links</h3>
                                    <hr />
                                    <ul className="footer-menu">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About us</NavLink></li>
                                        <li><a href="">Meet our Team</a></li>
                                        <li><a href="">News & Media</a></li>
                                        <li><a href="">Our Projects</a></li>
                                        <li><NavLink to="/contact">Contacts</NavLink></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <h3>Newsletter</h3>
                                <hr />
                                <p>Signup for our latest news & articles. We won’t give you spam mails.</p>
                                <div className="newsletter-form">
                                    <form action="#" method="POST">
                                        <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            aria-label="Email Address"
                                            required
                                        />
                                        <button type="submit" className="btn submit-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                            <path d="M15.364.636a.5.5 0 0 1 .11.548l-6.418 14.792a.5.5 0 0 1-.948-.076L7.313 9.207 1.924 7.893a.5.5 0 0 1-.07-.96l13.5-6a.5.5 0 0 1 .51.085zM6.539 8.868l-.322 3.221 1.604-3.978-1.282.757z" />
                                            </svg>
                                        </button>
                                        </div>
                                    </form>
                                    </div>

                            </div>
                            <div className="col-md-6 col-sm-6">
                                <h3>Contact</h3>
                                <hr />
                                <p><i style={{color: '#7FB5FB', paddingRight: '5px'}} className="fa-solid fa-phone"></i> 020-67250600</p>
                                <p style={{fontSize: '13px',marginBottom: '0'}}><i style={{color: '#7FB5FB', paddingRight: '5px'}} className="fa-solid fa-location-pin"></i> I-Space, 301A, Pranjali Patil Nagar, Bavdhan, Pune, Maharashtra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
