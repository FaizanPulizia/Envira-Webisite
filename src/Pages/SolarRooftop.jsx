import React from 'react'
import Hero from '../components/Solar Rooftop.jsx/Hero'
import SectorsSection from '../components/Solar Rooftop.jsx/SectorsSection'
import SkewedCards from '../components/Solar Rooftop.jsx/SkewedCards'
import Scope from '../components/Solar Rooftop.jsx/Scope'
import SolarSolutions from '../components/Solar Rooftop.jsx/SolarSolutins'
import CaseStudies from '../components/Solar Rooftop.jsx/CaseStudy'
import Footer from '../Partials/Footer'

const SolarRooftop = () => {
  return (
    <>
      <Hero/>
      <SectorsSection/>
      {/* <SkewedCards/> */}
      <Scope/>
      <SolarSolutions/>
      {/* <CaseStudies/> */}
      <Footer/>
    </>
  )
}

export default SolarRooftop