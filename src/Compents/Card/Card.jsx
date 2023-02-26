import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"
const Card = ({items}) => {
  return (
    <Link className='link' to={`/product/${items.id}`}>
    <div className='card'>
        <div className='image'>
        <img src={items.img} alt="" className='mainimg'/>
        <img src={items.img1} alt="" className='secondimg'/>
        {items.isNew && <span> New Season </span>}
        </div>
        <h2>{items.title}</h2>
        <div className='price'>
            <h3>₹{items.oldPrice}</h3>
            <h3>₹{items.newPrice}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card