import React from 'react'
import "./TrainingCards.css"
import podd from '../../assets/podd.jpg'
import spaceman from '../../assets/spaceman.webp'
import { Link } from 'react-router-dom'

const TrainingCards = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate quaerat distinctio aspernatur, inventore fugit.</p>
        <Link to="/contact"><button className='btn'>Contact</button></Link>
      </div>
      <div className='right'>
        <div className='imgContainer'>
          <div className='imageStack top'>
            <img src={spaceman} className='img' alt="picture on man in space" />
          </div>
          <div className='imageStack bottom'>
            <img src={spaceman} className='img' alt="picture on man in space" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingCards