import React  from 'react'
import Card from '../Card/Card'
import "./Featuredproduct.scss"
import useFetch from '../../hooks/useFetch'


const Featuredproduct = ({type}) => {

 const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)


  return (
    <div className='featuredproducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>
Tune in to the Make it Big Podcast — our thought leadership audio series for retailers, entrepreneurs and ecommerce professionals. You'll get expert insights, strategies and tactics to help grow your business.</p>
      </div>
      <div className='bottom'>
        { error ? "something went wrong":
        loading ?
        "loading":
         data?.map(item=>(
          <Card item={item} key={item.id}/>
        ))}

      </div>
    </div>
  )
}

export default Featuredproduct;