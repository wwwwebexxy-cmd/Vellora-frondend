import "./../Footer.css";

import footerlogo from './../assets/vellora/vellora-logo-transparent-vellora.png'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_NUMBER } from "../config/contact";
function Footer() {
    return (
        <div>

            <footer className="footer">

                <div className="footer-container">

                    <div className="footer-column brand">
                        <img src={footerlogo} alt="Vellora Online Store" className="footer-logo" />
                        <p>Vellora is your one-stop online store for fashion, accessories, home essentials, gifts, electronics and more.<br />Everyday Finds. Exceptional Style.</p>
                    </div>

                    <div className="footer-column social-column">
                        <h3>Follow Us</h3>

                        <div className="social-icons">
                            <a href="https://www.tiktok.com/@vellora707" target="_blank" rel="noreferrer" aria-label="Vellora on TikTok">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/shop">Categories</Link></li>
                            <li><Link to="/shop?offer=true">Offers</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Customer Care</h3>

                        <ul>
                            <li><Link to="/profile">My Account</Link></li>
                            <li><Link to="/myorders">Track Order</Link></li>
                            <li><Link to="/myorders">Shipping &amp; Delivery</Link></li>

                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact Us</h3>

                        <ul className="contact">
                            <li>
                                <FaMapMarkerAlt /> Al Shamshi Building, Zurff Industrial Area, Ajman, United Arab Emirates
                            </li>
                            <li>
                                <FaWhatsapp /> <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>{WHATSAPP_DISPLAY_NUMBER}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column payment">
                        <h3>Order Options</h3>

                        <div className="payment-options">
                            <span>COD</span>
                            <span>WhatsApp</span>
                        </div>
                    </div>

                </div>

            </footer>

            <div className="copyright">
                © 2026 Vellora. Everyday Finds. Exceptional Style.
            </div>

        </div>
    )
}

export default Footer

