import React from 'react'
import Navbar from '../Partials/Navbar'
import HeroSection from '../components/Landing/Hero'
import Description from '../components/Landing/Description'
import Numbers from '../components/Numbers'
import Services from '../components/Landing/Services'
import FlipBoxSection from '../components/Landing/FlipBoxSection'
import Advantage from '../components/Landing/Advantage'
import Clients from '../components/Landing/Clients'
import Footer from '../Partials/Footer.jsx'
const LandingPage = () => {
  return (
    <>
        {/* <Navbar/> */}
        <HeroSection/>
        <Description/>
        {/* <Numbers/> */}
        <Services/>
        <FlipBoxSection/>
        <Advantage/>
        {/* <Clients/> */}
        <Footer/>
    </>
  )
}

export default LandingPage