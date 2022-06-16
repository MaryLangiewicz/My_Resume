import React from "react";
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import AboutMe from './components/AboutMe.js';
import MyServices from './components/MyServices.js';
import MyProjects from './components/MyProjects.js';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer.js';

function Main() {
    return (
        <>
            <Header/>
            <Banner/>
            <AboutMe/>
            <MyServices/>
            <MyProjects/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default Main;