import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type="text" />

                <label>Your Email</label>
                <input type="email" />

                <label>Subject</label>
                <input type="text" />

                <label>Details</label>
                <textarea rows="6" placeholder='type a short message' />
                <button className='btn'>Submit</button>


            </form>

        </div>
    )
}

export default Form