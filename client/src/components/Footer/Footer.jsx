import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import placeholder from '../../img/placeholder.png';
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                {/* <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Our Office</h4>
                                    <span>C-24 Raju Park</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Helpline</h4>
                                    <span>988</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Email Us</h4>
                                    <span>support@Serenityconnect.org</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={placeholder} className="img-fluid" alt="Pet-Connect_logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Dedicated to providing support, resources, and hope for pets. Pets well-being is our priority.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Connect with us</span>
                                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i className="fab fa-instagram instagram-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Resources</a></li>
                                    <li><a href="#">Support Groups</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Subscribe to our newsletter for pets health tips, resources, and updates.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="email" placeholder="Your Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2024, All Rights Reserved <a href="#">Serenity-Connect</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <Link to="/home">
                                            Home
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;