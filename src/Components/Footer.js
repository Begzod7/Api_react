import React from 'react';
import './Style.css';
import Back_top from './Back_top';

const Footer = () => {

    return (
        <>

            <div className="section-padding-02">
                <div className="container">
                    <div className="newsletter-section scene" >


                        <div className="newsletter-wrapper d-flex" >

                            <div className="newsletter__content">
                                <h3 className="newsletter__title"> Subscribe <br /> <span>Our Newsletter</span> </h3>
                            </div>
                            <div className="newsletter__form">
                                <form action="#">
                                    <input type="text" placeholder="Your e-mail" />
                                    <button className="btn btn-secondary btn-hover-primary">Subscribe</button>
                                </form>
                            </div>

                        </div>


                        <div className="newsletter-section__shape-01" data-depth="-0.4" ></div>
                        <div className="newsletter-section__shape-02" data-depth="0.4" ></div>
                        <div className="newsletter-section__shape-03" data-depth="-0.5"></div>
                        <div className="newsletter-section__shape-04" data-depth="0.5" ></div>

                    </div>
                </div>
            </div>

            <br />
            <Back_top />
            {/* footer */}
            <div className="footer-section" >
                <div className="footer-widget-area section-padding-01">
                    <div className="container">
                        <div className="row gy-6">

                            <div className="col-lg-4">

                                <div className="footer-widget">
                                    <a href="#" className="footer-widget__logo"><img src="assets/images/dark-logo.png" alt="Logo" width="150" height="32" /></a>

                                    <div className="footer-widget__info">
                                        <span className="title">Call us</span>
                                        <span className="number">800 388 80 90</span>
                                    </div>
                                    <div className="footer-widget__info">
                                        <p>58 Howard Street #2 San Francisco</p>
                                        <p>contact@edumall.com</p>
                                    </div>

                                    <div className="footer-widget__social-02">
                                        <a className="twitter" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a className="skype" href="#" target="_blank"><i className="fab fa-skype"></i></a>
                                        <a className="youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                                        <a className="linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-8">
                                <div className="row gy-6">

                                    <div className="col-sm-4">

                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">About</h4>

                                            <ul className="footer-widget__link">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="course-grid-left-sidebar.html">Courses</a></li>
                                                <li><a href="instructors.html">Instructor</a></li>
                                                <li><a href="event-grid-sidebar.html">Events</a></li>
                                                <li><a href="become-an-instructor.html">Become A Teacher</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-sm-4">

                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">Links</h4>

                                            <ul className="footer-widget__link">
                                                <li><a href="blog-grid-left-sidebar.html">News & Blogs</a></li>
                                                <li><a href="#">Library</a></li>
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">Career</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-sm-4">

                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">Support</h4>

                                            <ul className="footer-widget__link">
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="faqs.html">FAQs</a></li>
                                                <li><a href="#">Forum</a></li>
                                                <li><a href="#">Sitemap</a></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Footer;