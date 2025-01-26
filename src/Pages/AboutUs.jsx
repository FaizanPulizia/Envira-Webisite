import React from 'react'
import Hero from '../components/About Us/Hero'
import MissionSection from '../components/About Us/MissionSection'
import Team from '../components/About Us/Team'
import GrowthPartners from '../components/About Us/GrowthPartners'
import MediaCoverage from '../components/About Us/MediaCoverage'
import Footer from '../Partials/Footer'

const AboutUs = () => {
  return (
    <>
        <Hero/>
        <MissionSection/>
        {/* <Team/> */}
        <GrowthPartners/>
        {/* <MediaCoverage/> */}
        <Footer/>
    </>
  )
}

export default AboutUs