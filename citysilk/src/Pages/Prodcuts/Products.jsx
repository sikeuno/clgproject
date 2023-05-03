import List from '../../Compents/List/List'
import React, { useState } from 'react'
import './Products.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const catId= parseInt(useParams().id);
  const [maxPrice,setMaxPrice]=useState(10000)
  const [sort,setSort]=useState(null);
  const [selectedSubCats,setSelectedSubCats]=useState([]);

  const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  const handlechange=(e)=>{
    const value= e.target.value;
    const isChecked= e.target.checked;

    setSelectedSubCats( 
      isChecked 
      ? [...selectedSubCats,value]:
      selectedSubCats.filter((item)=> item !== value))
  }
console.log(selectedSubCats)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filteritem'>
<h2>Product categories</h2>
{data?.map((item)=>(
<div className='inputitem' key={item.id}>
  <input type="checkbox" id={item.id} value={item.id} onChange={handlechange} />
  <label htmlFor={item.id}>{item.attributes.title}</label>
</div>
))
}   </div>
        <div className='filteritem'>
        <h2>Filter by price</h2>
        <div className='inputitem'>
          <span>0</span>
          <input type="range" min={0} max={10000} onChange={(e)=>{setMaxPrice(e.target.value)}} />
          <span>{maxPrice}</span>
        </div>
          </div>
          <div className='filteritem'>
          <h2>Sort By</h2>
          <div className='inputitem'>
  <input type="radio" id="asc" value="asc" name='price' onChange={(e)=>setSort("asc".toLowerCase())} />
  <label htmlFor="asc">price by (lowest first)</label>
</div>
<div className='inputitem'>
  <input type="radio" id="desc" value="desc" name='price' onChange={(e)=>setSort("desc".toLowerCase())}/>
  <label htmlFor="desc">price by (Highest first)</label>
</div>
          
          </div>
      </div>
      <div className='right'>
        <img className='catimg' src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fed81142f212_json_image_1609400596.webp" alt=""/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products


