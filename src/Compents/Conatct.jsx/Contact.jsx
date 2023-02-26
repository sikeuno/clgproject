import React from 'react'
import "./Contact.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
            <input type="text" placeholder='Enter your your mail... '/>
            <button>JOIN Us</button>
        </div>
        <div className='icons'>
            <FacebookOutlinedIcon/>
            <InstagramIcon/>
        </div>
        </div>
    </div>
  )
}

export default Contact