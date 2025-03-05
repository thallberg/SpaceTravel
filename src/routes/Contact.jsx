import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroimage/HeroImage'
import Form from '../components/form/Form'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="CONTACT" text="Contact GLX Travel" />
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact