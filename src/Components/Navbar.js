import React from "react";
import { Link } from "react-router-dom";
import './Style.css';
import { FcCallback } from 'react-icons/fc';
import { FaRegEnvelope } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';

// import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

const Header = () => {
    return (

        <div classNameName="main-wrapper">
            <div className="header-section header-sticky">


                <div className="header-top-03 d-none d-sm-block">
                    <div className="container">


                        <div className="header-top-bar-wrap d-sm-flex justify-content-between">

                            <div className="header-top-bar-wrap__info">
                                <ul className="header-top-bar-wrap__info-list header-top-bar-wrap__info-list-02">
                                    <li><a href="tel:+8819906886"><i className="fas fa-phone"></i> <span className="info-text">(+88) 1990 6886</span></a></li>
                                    <li><a href="mailto:agency@example.com"><i className="far fa-envelope"></i> <span className="info-text">agency@example.com</span></a></li>
                                </ul>
                            </div>

                            <div className="header-top-bar-wrap__info d-sm-flex">

                                <div className="header-top-bar-wrap__language">
                                    <a className="language-toggle" href="#"><span>English</span></a>

                                    <ul className="language-dropdown">
                                        <li><a href="#">Français</a></li>
                                        <li><a href="#">Deutsch</a></li>
                                    </ul>
                                </div>

                                <ul className="header-top-bar-wrap__info-list header-top-bar-wrap__info-list-03 d-none d-lg-flex">
                                    <li><button data-bs-toggle="modal" data-bs-target="#loginModal">Log in</button></li>
                                    <li><button data-bs-toggle="modal" data-bs-target="#registerModal">Register</button></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>



                <div className="header-main-02">
                    <div className="container">

                        <div className="header-main-wrapper">


                            <div className="header-logo">
                                <a className="header-logo__logo" href="index-main.html"><img src="https://madingloker.com/wp-content/uploads/2022/01/BAKTI.jpg" width="296" height="64" alt="Logo" /></a>
                            </div>



                            <div className="header-inner justify-content-between">


                                <div className="header-navigation d-none d-xl-block">
                                    <nav className="menu-primary">
                                        <ul className="menu-primary__container">
                                            <li><a className="active" href="#"><span>Home</span></a>

                                                {/* <ul className="mega-menu">
                                                    <li>

                                                        <div className="mega-menu-content">
                                                            <div className="row">
                                                                <div className="col-xl-3">
                                                                    <div className="menu-content-list">
                                                                        <a href="index-main.html" className="menu-content-list__link">Main Demo <span className="badge hot">Hot</span></a>
                                                                        <a href="index-course-hub.html" className="menu-content-list__link">Course Hub</a>
                                                                        <a href="index-online-academy.html" className="menu-content-list__link">Online Academy <span className="badge hot">Hot</span></a>
                                                                        <a href="index-university.html" className="menu-content-list__link">University</a>
                                                                        <a href="index-education-center.html" className="menu-content-list__link">Education Center <span className="badge hot">Hot</span></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="menu-content-list">
                                                                        <a href="index-language-academic.html" className="menu-content-list__link">Language Academic</a>
                                                                        <a href="index-single-instructor.html" className="menu-content-list__link">Single Instructor</a>
                                                                        <a href="index-dev.html" className="menu-content-list__link">Dev <span className="badge new">New</span></a>
                                                                        <a href="index-online-art.html" className="menu-content-list__link">Online Art <span className="badge new">New</span></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6">
                                                                    <div className="menu-content-banner">
                                                                        <h4 className="menu-content-banner__title">Achieve Your Goals With EduMall</h4>
                                                                        <a href="#" className="menu-content-banner__btn btn btn-primary btn-hover-secondary">Purchase now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </li>
                                                </ul>


 */}

                                            </li>
                                            <li>
                                                <a href="#"><span>Courses</span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="course-grid-01.html"><span>Grid Basic Layout</span></a></li>
                                                    <li><a href="course-grid-02.html"><span>Grid Modern Layout</span></a></li>
                                                    <li><a href="course-grid-left-sidebar.html"><span>Grid Left Sidebar</span></a></li>
                                                    <li><a href="course-grid-right-sidebar.html"><span>Grid Right Sidebar</span></a></li>
                                                    <li><a href="course-list.html"><span>List Basic Layout</span></a></li>
                                                    <li><a href="course-list-left-sidebar.html"><span>List Left Sidebar</span></a></li>
                                                    <li><a href="course-list-right-sidebar.html"><span>List Right Sidebar</span></a></li>
                                                    <li><a href="course-category.html"><span>Category Page</span></a></li>
                                                    <li>
                                                        <a href="#"><span>Single Layout</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="course-single-layout-01.html"><span>Layout 01</span></a></li>
                                                            <li><a href="course-single-layout-02.html"><span>Layout 02</span></a></li>
                                                            <li><a href="course-single-layout-03.html"><span>Layout 03</span></a></li>
                                                            <li><a href="course-single-layout-04.html"><span>Layout 04</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><span>Blog</span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-grid-01.html"><span>Grid Basic Layout</span></a></li>
                                                    <li><a href="blog-grid-02.html"><span>Grid Wide</span></a></li>
                                                    <li><a href="blog-grid-left-sidebar.html"><span>Grid Left Sidebar</span></a></li>
                                                    <li><a href="blog-grid-right-sidebar.html"><span>Grid Right Sidebar</span></a></li>
                                                    <li><a href="blog-list-style-01.html"><span>List Layout 01</span></a></li>
                                                    <li><a href="blog-list-style-02.html"><span>List Layout 02</span></a></li>
                                                    <li>
                                                        <a href="#"><span>Single Layouts</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-details-left-sidebar.html"><span>Left Sidebar</span></a></li>
                                                            <li><a href="blog-details-right-sidebar.html"><span>Right Sidebar</span></a></li>
                                                            <li><a href="blog-details.html"><span>No Sidebar</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><span>Pages</span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="become-an-instructor.html"><span>Become an Instructor</span></a></li>
                                                    <li>
                                                        <a href="instructors.html"><span>Instructor</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="dashboard-my-courses.html"><span>My Courses</span></a></li>
                                                            <li><a href="dashboard-announcement.html"><span>Announcements</span></a></li>
                                                            <li><a href="dashboard-withdraw.html"><span>Withdrawals</span></a></li>
                                                            <li><a href="dashboard-quiz-attempts.html"><span>Quiz Attempts</span></a></li>
                                                            <li><a href="dashboard-question-answer.html"><span>Question & Answer</span></a></li>
                                                            <li><a href="dashboard-assignments.html"><span>Assignments</span></a></li>
                                                            <li><a href="dashboard-students.html"><span>My Students</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="about.html"><span>About us</span></a></li>
                                                    <li><a href="about-02.html"><span>About us 02</span></a></li>
                                                    <li><a href="contact-us.html"><span>Contact us</span></a></li>
                                                    <li><a href="contact-us-02.html"><span>Contact us 02</span></a></li>
                                                    <li><a href="membership-plans.html"><span>Membership plans</span></a></li>
                                                    <li><a href="faqs.html"><span>FAQs</span></a></li>
                                                    <li><a href="404-page.html"><span>404 Page</span></a></li>
                                                    <li>
                                                        <a href="#"><span>Dashboard</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="dashboard-index.html"><span>Dashboard</span></a></li>
                                                            <li><a href="dashboard-student-index.html"><span>Dashboard Student</span></a></li>
                                                            <li><a href="dashboard-profile.html"><span>My Profile</span></a></li>
                                                            <li><a href="dashboard-all-course.html"><span>Enrolled Courses</span></a></li>
                                                            <li><a href="dashboard-wishlist.html"><span>Wishlist</span></a></li>
                                                            <li><a href="dashboard-reviews.html"><span>Reviews</span></a></li>
                                                            <li><a href="dashboard-my-quiz-attempts.html"><span>My Quiz Attempts</span></a></li>
                                                            <li><a href="dashboard-purchase-history.html"><span>Purchase History</span></a></li>
                                                            <li><a href="dashboard-settings.html"><span>Settings</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><span>Features</span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="#"><span>Events</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="event-grid-sidebar.html"><span>Event Listing 01</span></a></li>
                                                            <li><a href="event-grid.html"><span>Event Listing 02</span></a></li>
                                                            <li><a href="event-list.html"><span>Event Listing 03</span></a></li>
                                                            <li><a href="event-list-sidebar.html"><span>Event Listing 04</span></a></li>
                                                            <li>
                                                                <a href="#"><span>Single Layouts</span></a>
                                                                <ul className="sub-menu">
                                                                    <li><a href="event-details-layout-01.html"><span>Layout 01</span></a></li>
                                                                    <li><a href="event-details-layout-02.html"><span>Layout 02</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#"><span>Shop</span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="shop-default.html"><span>Shop – Default</span></a></li>
                                                            <li><a href="shop-left-sidebar.html"><span>Shop – Left Sidebar</span></a></li>
                                                            <li><a href="shop-right-sidebar.html"><span>Shop – Right Sidebar</span></a></li>
                                                            <li><a href="my-account.html"><span>My account</span></a></li>
                                                            <li><a href="wishlist.html"><span>Wishlist</span></a></li>
                                                            <li><a href="cart.html"><span>Cart</span></a></li>
                                                            <li><a href="cart-empty.html"><span>Cart Empty</span></a></li>
                                                            <li><a href="checkout.html"><span>Checkout</span></a></li>
                                                            <li>
                                                                <a href="#"><span>Single Layouts</span></a>
                                                                <ul className="sub-menu">
                                                                    <li><a href="shop-single-list-left-sidebar.html"><span>List – Left Sidebar</span></a></li>
                                                                    <li><a href="shop-single-list-right-sidebar.html"><span>List – Right Sidebar</span></a></li>
                                                                    <li><a href="shop-single-list-no-sidebar.html"><span>List – No Sidebar</span></a></li>
                                                                    <li><a href="shop-single-tab-left-sidebar.html"><span>Tabs – Left Sidebar</span></a></li>
                                                                    <li><a href="shop-single-tab-right-sidebar.html"><span>Tabs – Right Sidebar</span></a></li>
                                                                    <li><a href="shop-single-tab-no-sidebar.html"><span>Tabs – No Sidebar</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="zoom-meetings.html"><span>Zoom Meetings</span></a></li>
                                                    <li><a href="zoom-meetings-single.html"><span>Zoom Meeting Single</span></a></li>
                                                </ul>
                                            </li>



                                        </ul>
                                    </nav>
                                </div>



                                <div className="header-serach header-serach-02 order-md-3">
                                    <form action="#">
                                        <input type="text" className="header-serach__input header-serach-02__input" placeholder="Search..." />
                                        <button className="header-serach__btn header-serach-02__btn"><i className="far fa-search"></i></button>
                                    </form>
                                </div>

                                <div className="header-action header-action-02 order-md-2">
                                    <a href="#" className="header-action__btn">
                                        <i className="far fa-shopping-cart"></i>
                                        <span className="header-action__number">3</span>
                                    </a>


                                    <div className="header-mini-cart">


                                        <ul className="header-mini-cart__product-list ">
                                            <li className="header-mini-cart__item">
                                                <a href="#" className="header-mini-cart__close"></a>
                                                <div className="header-mini-cart__thumbnail">
                                                    <a href="shop-single-list-left-sidebar.html"><img src="assets/images/product/product-1.png" alt="Product" width="80" height="93" /></a>
                                                </div>
                                                <div className="header-mini-cart__caption">
                                                    <h3 className="header-mini-cart__name"><a href="shop-single-list-left-sidebar.html">Awesome for Websites</a></h3>
                                                    <span className="header-mini-cart__quantity">1 × <strong className="amount">$49</strong><span className="separator">.00</span></span>
                                                </div>
                                            </li>
                                            <li className="header-mini-cart__item">
                                                <a href="#" className="header-mini-cart__close"></a>
                                                <div className="header-mini-cart__thumbnail">
                                                    <a href="shop-single-list-left-sidebar.html"><img src="assets/images/product/product-2.png" alt="Product" width="80" height="93" /></a>
                                                </div>
                                                <div className="header-mini-cart__caption">
                                                    <h3 className="header-mini-cart__name"> <a href="shop-single-list-left-sidebar.html">Awesome for Websites</a></h3>
                                                    <span className="header-mini-cart__quantity">1 × <strong className="amount">$49</strong><span className="separator">.00</span></span>
                                                </div>
                                            </li>
                                            <li className="header-mini-cart__item">
                                                <a href="#" className="header-mini-cart__close"></a>
                                                <div className="header-mini-cart__thumbnail">
                                                    <a href="shop-single-list-left-sidebar.html"><img src="assets/images/product/product-3.png" alt="Product" width="80" height="93" /></a>
                                                </div>
                                                <div className="header-mini-cart__caption">
                                                    <h3 className="header-mini-cart__name"> <a href="shop-single-list-left-sidebar.html">Awesome for Websites</a></h3>
                                                    <span className="header-mini-cart__quantity">1 × <strong className="amount">$49</strong><span className="separator">.00</span></span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="header-mini-cart__footer">
                                            <div className="header-mini-cart__total">
                                                <p className="header-mini-cart__label">Total:</p>
                                                <p className="header-mini-cart__value">$445<span className="separator">.99</span></p>
                                            </div>
                                            <div className="header-mini-cart__btn">
                                                <a href="cart.html" className="btn btn-primary btn-hover-secondary">View cart</a>
                                                <a href="checkout.html" className="btn btn-primary btn-hover-secondary">Checkout</a>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                                <div className="header-toggle header-toggle-02 order-md-4">
                                    <button className="header-toggle__btn d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileMenu">
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </button>
                                    <button className="header-toggle__btn search-open d-flex d-md-none">
                                        <span className="dots"></span>
                                        <span className="dots"></span>
                                        <span className="dots"></span>
                                    </button>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>


            </div>
        </div>

    );
};

export default Header;