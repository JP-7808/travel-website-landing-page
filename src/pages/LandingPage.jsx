import React from 'react'
import './landingPage.css';
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import AboutUs from '../components/aboutUs/AboutUs'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div id='home'>
        <Home/>
      </div>
      <div id='services'>
        <Services/>
      </div>
      
      <div id='aboutUs' >
        <AboutUs/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
      
    </div>
  )
}

export default LandingPage
