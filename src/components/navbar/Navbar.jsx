import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    // State to manage the open/close status of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Toggles the menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scrolls smoothly to the contact section
    const handleScroll = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollServices = () => {
        const servicesSection = document.getElementById('services');
        if(servicesSection){
            servicesSection.scrollIntoView({behavior: 'smooth'});
        }

    }

    const handleScrollAboutUs = () => {
        const aboutUsSection = document.getElementById('aboutUs');
        if(aboutUsSection){
            aboutUsSection.scrollIntoView({behavior: 'smooth'});
        }
    }

    const handleScrollHome = () => {
        const homeSection = document.getElementById('home');
        if(homeSection){
            homeSection.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2 className='ritz'>Jaya Tour & Travel</h2>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={handleScrollHome}>Home</Link></li>
                    <li><Link to="" onClick={handleScrollServices}>Services</Link></li>
                    <li><Link to="" onClick={handleScrollAboutUs}>About Us</Link></li>
                    <li><Link to="" onClick={handleScroll}>Contact Us</Link></li>
                </ul>
            </div>
            {/* Menu toggle button for mobile view */}
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
