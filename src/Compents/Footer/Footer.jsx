import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='item'>
                <h1>Category</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Children</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>"Welcome to our clothing site! We are a team of fashion enthusiasts who believe that everyone deserves to look and feel their best. Our mission is to offer high-quality, stylish clothing at an affordable price, without compromising on ethics or sustainability.</span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>
                    127/230 sethurathinapurm,
                    manapparai
                </span>
            </div>
        </div>
        <div className='bottom'>
            <div className='left'>
            <div className='logo'>
                CiTYSILK
            </div>
            <div className='copyright'>
                @copyright
            </div>
            </div>
            <div className='right'>
                <img src='/images/stripe.png' alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Footer