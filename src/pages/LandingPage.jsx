import React, { useEffect } from 'react'
import './landingPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import AboutUs from '../components/aboutUs/AboutUs'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'

const LandingPage = () => {

  useEffect(() => {
    AOS.init({duration: 2500, once: true}) // initialize AOS
  },[])

  return (
    <div>
      <Navbar/>
      <div id='home' data-aos="fade-in">
        <Home/>
      </div>
      <div id='services' data-aos="fade-up">
        <Services/>
      </div>
      <div id='aboutUs' data-aos="fade-right">
        <AboutUs/>
      </div>
      <div id='contact' data-aos="fade-left">
        <Contact/>
      </div>
      
    </div>
  )
}

export default LandingPage
