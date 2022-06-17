import React from 'react';
import './Script.js';
import './Style.css';
const Footer = () => {
    return (
        <>

            <div class="section-padding-02">
                <div class="container">
                    <div class="newsletter-section scene" >


                        <div class="newsletter-wrapper d-flex" >

                            <div class="newsletter__content">
                                <h3 class="newsletter__title"> Subscribe <br /> <span>Our Newsletter</span> </h3>
                            </div>
                            <div class="newsletter__form">
                                <form action="#">
                                    <input type="text" placeholder="Your e-mail" />
                                    <button class="btn btn-secondary btn-hover-primary">Subscribe</button>
                                </form>
                            </div>

                        </div>


                        <div class="newsletter-section__shape-01" data-depth="-0.4" ></div>
                        <div class="newsletter-section__shape-02" data-depth="0.4" ></div>
                        <div class="newsletter-section__shape-03" data-depth="-0.5"></div>
                        <div class="newsletter-section__shape-04" data-depth="0.5" ></div>

                    </div>
                </div>
            </div>

            <br />

            <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

            <div style="background-color:black;color:white;padding:30px">Scroll Down</div>
            <div style="background-color:lightgrey;padding:30px 30px 2500px">This example demonstrates how to create a "scroll to top" button that becomes visible
                <strong>when the user starts to scroll the page</strong>.</div>

            <br />
            {/* footer */}
            <div class="footer-section" >

                <div class="footer-widget-area section-padding-01">
                    <div class="container">
                        <div class="row gy-6">

                            <div class="col-lg-4">

                                <div class="footer-widget">
                                    <a href="#" class="footer-widget__logo"><img src="assets/images/dark-logo.png" alt="Logo" width="150" height="32" /></a>

                                    <div class="footer-widget__info">
                                        <span class="title">Call us</span>
                                        <span class="number">800 388 80 90</span>
                                    </div>
                                    <div class="footer-widget__info">
                                        <p>58 Howard Street #2 San Francisco</p>
                                        <p>contact@edumall.com</p>
                                    </div>

                                    <div class="footer-widget__social-02">
                                        <a class="twitter" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                        <a class="facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                        <a class="skype" href="#" target="_blank"><i class="fab fa-skype"></i></a>
                                        <a class="youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                                        <a class="linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-8">
                                <div class="row gy-6">

                                    <div class="col-sm-4">

                                        <div class="footer-widget">
                                            <h4 class="footer-widget__title">About</h4>

                                            <ul class="footer-widget__link">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="course-grid-left-sidebar.html">Courses</a></li>
                                                <li><a href="instructors.html">Instructor</a></li>
                                                <li><a href="event-grid-sidebar.html">Events</a></li>
                                                <li><a href="become-an-instructor.html">Become A Teacher</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div class="col-sm-4">

                                        <div class="footer-widget">
                                            <h4 class="footer-widget__title">Links</h4>

                                            <ul class="footer-widget__link">
                                                <li><a href="blog-grid-left-sidebar.html">News & Blogs</a></li>
                                                <li><a href="#">Library</a></li>
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">Career</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div class="col-sm-4">

                                        <div class="footer-widget">
                                            <h4 class="footer-widget__title">Support</h4>

                                            <ul class="footer-widget__link">
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

            <button id="backBtn" class="back-to-top backBtn">
                <i class="arrow-top fal fa-long-arrow-up"></i>
                <i class="arrow-bottom fal fa-long-arrow-up"></i>
            </button>
        </>

    )
}

export default Footer;