import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PricingCards from '../components/PricingCards/PricingCards'
import HeroImage from '../components/heroimage/HeroImage'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="PRICING" text="Choose Your Trip." />
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Pricing