import React from "react";
import "./home.css";

const Home = (props) => {
  return (
    <section id="home" className="home" data-aos={props['data-aos']} >
      <div className="overlay"></div>
      <div className="home-content">
        {/* Left Side: Travel Details */}
        <div className="travel-details" >
          <h1>Explore the World with Us</h1>
          <p>
            Discover breathtaking destinations, plan unforgettable trips, and make memories that will last a lifetime. Your dream adventure starts here.
          </p>
        </div>

        {/* Right Side: Sign In / Sign Up */}
        <div className="auth-forms" data-aos="fade-left">
          <div className="form-container">
            <h2>Sign In</h2>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
            </form>
            <p>
              Don't have an account? <a href="#signup">Sign Up</a>
            </p>
          </div>

          <div className="form-container">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
