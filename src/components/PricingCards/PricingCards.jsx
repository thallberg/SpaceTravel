import React from 'react'
import './PricingCards.css'
import { Link } from 'react-router-dom'

const PricingCards = () => {
        return (
                <div className='pricing'>
                        <div className='cardContainer'>
                                <div className='card'>
                                        <h3>-- Basic --</h3>
                                        <span className='bar'></span>
                                        <p className='btc'>1 BTC</p>
                                        <span className='bar'></span>
                                        <p>-- 3 Days --</p>
                                        <p>-- Views --</p>
                                        <p>-- Featured --</p>
                                        <p>-- Private --</p>
                                        <span className='bar'></span>
                                        <Link to="/contact" className=''>Book</Link>
                                        <span className='bar'></span>
                                </div>

                                <div className='card'>
                                        <h3>-- Suite --</h3>
                                        <span className='bar'></span>
                                        <p className='btc'>1 BTC</p>
                                        <span className='bar'></span>
                                        <p>-- 5 Days --</p>
                                        <p>-- Views --</p>
                                        <p>-- Featured --</p>
                                        <p>-- Private --</p>
                                        <span className='bar'></span>
                                        <Link to="/contact" className=''>Book</Link>
                                        <span className='bar'></span>
                                </div>

                                <div className='card'>
                                        <h3>-- Executive --</h3>
                                        <span className='bar'></span>
                                        <p className='btc'>1 BTC</p>
                                        <span className='bar'></span>
                                        <p>-- 7 Days --</p>
                                        <p>-- Views --</p>
                                        <p>-- Featured --</p>
                                        <p>-- Private --</p>
                                        <span className='bar'></span>
                                        <Link to="/contact" className=''>Book</Link>
                                        <span className='bar'></span>
                                </div>

                        </div>

                </div>
        )
}

export default PricingCards