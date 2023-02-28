import React, { useState } from 'react'
import './Product.scss'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = () => {
  const [selectedimage,setSelectedimage]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const images=[
    "https://imagescdn.planetfashion.in/img/app/product/4/460025-3175210.jpg?auto=format",
    "https://static-01.daraz.com.bd/p/bbf53920a03039e3eea7e351cbe77f52.jpg"
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt="" onClick={e=>setSelectedimage(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedimage(1)}/>
        </div>
        <div className='mainimage'>
          <img src={images[selectedimage]} alt=''/>
        </div>
      </div>
      <div className='right'>
        <h2>Title</h2>
        <span className='price'>₹1200</span>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>
        <div className='quantity'>
          <button onClick={e=>setQuantity(prev=>prev===1?1:prev-1)}>-</button>
          {quantity}
          <button onClick={e=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
        <ShoppingCartOutlined/>ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderOutlinedIcon/> ADD TO WISHLIST
          </div>
          <div className='item'>
            <FavoriteBorderOutlinedIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Louis vuttion</span>
          <span>USA</span>
          <span>Louis vuttion</span>
        </div>
        <hr/>
        <div className='info'>
          <span>Description</span>
          <hr/>
          <span>Description</span>
          <hr/>
          <span>FAQ</span>
          
        </div>
      </div>
    </div>
  )
}

export default Product