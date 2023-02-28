import List from '../../Compents/List/List'
import React, { useState } from 'react'
import './Products.scss'
import { useParams } from 'react-router-dom'

const Products = () => {

  const catid= parseInt(useParams().id);
  const [maxprice,setMaxprice]=useState(1000)
  const [sort,setSort]=useState(null)
  return (
    <div className='products'>
      <div className='left'>
        <div className='filteritem'>
<h2>Product categories</h2>
<div className='inputitem'>
  <input type="checkbox" id='1' value={1}/>
  <label htmlFor='1'>Shoes</label>
</div>
<div className='inputitem'>
  <input type="checkbox" id='2' value={2}/>
  <label htmlFor='2'>Saree</label>
</div>
<div className='inputitem'>
  <input type="checkbox" id='3' value={3}/>
  <label htmlFor='3'>Shirt</label>
</div>
        </div>
        <div className='filteritem'>
        <h2>Filter by price</h2>
        <div className='inputitem'>
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={(e)=>{setMaxprice(e.target.value)}} />
          <span>{maxprice}</span>
        </div>
          </div>
          <div className='filteritem'>
          <h2>Sort By</h2>
          <div className='inputitem'>
  <input type="radio" id="asc" value="asc" name='price' onChange={e=>setSort("asc")}/>
  <label htmlFor='asc'>price by (lowest first)</label>
</div>
<div className='inputitem'>
  <input type="radio" id="desc" value="desc" name='price' onChange={e=>setSort("desc")}/>
  <label htmlFor='desc'>price by (Highest first)</label>
</div>
          
          </div>
      </div>
      <div className='right'>
        <img className='catimg' src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fed81142f212_json_image_1609400596.webp" alt=""/>
        <List catid={catid} maxprice={maxprice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products