import React, { useState } from 'react'
import './Product.scss'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Cartreducer';

const Product = () => {
  const id=useParams().id;
  const [selectedimage,setSelectedimage]=useState("img")
  const [quantity,setQuantity]=useState(1)
  const dispatch = useDispatch()
  const {data,loading,error} = useFetch(`/products/${id}?populate=*`)

  return (
    <div className='product'>
      {loading? ("loading")
      :(<><div className='left'>
        <div className='images'>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedimage("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>setSelectedimage("img2")}/>
        </div>
        <div className='mainimage'>
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[selectedimage]?.data?.attributes?.url} alt=''/>
        </div>
      </div>
      <div className='right'>
        <h2>{data?.attributes?.title}</h2>
        <span className='price'>₹{data?.attributes?.price}</span>
        <ul>
  {data?.attributes?.descr.split('\n').map((point, index) => (
    <li key={index}>{point.trim()}</li>
  ))}
</ul>

        <div className='quantity'>
          <button onClick={e=>setQuantity(prev=>prev===1?1:prev-1)}>-</button>
          {quantity}
          <button onClick={e=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add' onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          descr:data.attributes.descr,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}>
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
      </div></>)}
    </div>
  )
}

export default Product