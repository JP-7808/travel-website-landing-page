import React from "react";
import "./aboutUs.css";

const AboutUs = (props) => {
  return (
    <section className="about-us" data-aos={props["data-aos"]}>
      <div className="container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to Wanderlust Adventures, your ultimate travel companion. We
          specialize in crafting personalized travel experiences that inspire
          exploration and create unforgettable memories.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To connect people with the world’s most breathtaking destinations
              and provide exceptional travel services that turn dreams into
              reality.
            </p>
          </div>

          <div className="about-card">
            <h3>Why Choose Us?</h3>
            <p>
              We combine expertise, personalized planning, and a passion for
              travel to ensure every journey is seamless, memorable, and
              extraordinary.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To be the go-to travel partner for wanderers around the world,
              inspiring a sense of adventure and discovery in every traveler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
