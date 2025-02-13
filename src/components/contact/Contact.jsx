import React, { useState } from 'react';
import './contact.css'
// import digitalBoost from '../../photos/digitalBoost.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import contactTravel from '../../photos/contactTravel.jpg'

const Contact = (props) => {
    // State to manage form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); 

    // Handles input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="contact-section" data-aos={props['data-aos']}>
            <div className="contact-container">
                {/* Image section */}
                <div className="contact-image">
                    <LazyLoadImage src={contactTravel} alt="img" />
                </div>

                {/* Contact form section */}
                <div className="contact-form-container">
                    <h1 className="contact-form-title">Contact Us</h1>
                    <p>We’d love to hear from you! Please fill out the form below.</p>

                    <div className="form-container">
                        <h2>Get in Touch</h2>

                        <form className="contactForm" >
                            {/* Input fields for user data */}
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {status && <p className="status-message">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
