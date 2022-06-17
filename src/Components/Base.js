import React from "react";
import Header from "./Navbar";
import Api from "./Api";
import BaseTop from "./Top";
import Footer from "./Footer";
import './Style.css';

// import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

const Base = () => {
    return (
        <>
            <Header />
            <BaseTop />
            <Api />
            <Footer />
        </>
    );
};

export default Base;