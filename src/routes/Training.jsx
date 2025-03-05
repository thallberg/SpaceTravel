import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroimage/HeroImage'
import TrainingCards from '../components/trainingcard/TrainingCards'


const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="TRAINING" text="Pre-Flight & In-Flight Training"/>
        <TrainingCards/>
        <Footer/>
    </div>
  )
}

export default Training