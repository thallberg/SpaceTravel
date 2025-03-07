import React from 'react'
import "./Video.css"
import { Link } from 'react-router-dom'

import spaceVideo from '../../assets/200421-EarthCloseup.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video' >
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy Travel</h1>
                <p>World's first civilian space travel.</p>

                <div>
                    <Link to="/training" className='btn'>Training</Link>
                    <Link to="/contact" className='btn btn-light'>Launch</Link>
                </div>
            </div>

        </div>
    )
}

export default Video