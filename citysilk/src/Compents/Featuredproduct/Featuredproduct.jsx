import React from 'react'
import Card from '../Card/Card'
import "./Featuredproduct.scss"

const Featuredproduct = ({type}) => {
  const data=[
    {
      id:1,
      img:"https://assets.ajio.com/medias/sys_master/root/20230202/qw0F/63db8b98aeb269c6510bd35d/-473Wx593H-465700813-pink-MODEL4.jpg",
      img1:"https://assets.ajio.com/medias/sys_master/root/20230202/2lfO/63db8b98aeb269c6510bd348/-1117Wx1400H-465700813-pink-MODEL.jpg",
      title:"Saree",
      isNew:true,
      oldPrice:500,
      newPrice:400,
    },
    {
      id:2,
      img:"https://assets.ajio.com/medias/sys_master/root/20221220/f6xp/63a0db4df997ddfdbde15712/-473Wx593H-465463355-peach-MODEL4.jpg",
      img1:"https://assets.ajio.com/medias/sys_master/root/20221220/IllW/63a0db54f997ddfdbde157b4/-473Wx593H-465463355-peach-MODEL7.jpg",
      title:"Saree",
      isNew:true,
      oldPrice:500,
      newPrice:400,
    },
    {
      id:3,
      img:"https://assets.ajio.com/medias/sys_master/root/20230116/x4ti/63c566c3f997dd708e0987a0/-473Wx593H-465607741-brown-MODEL3.jpg",
      title:"Kurtha",
      oldPrice:500,
      newPrice:400,
    },
    {
      id:4,
      img:"https://assets.ajio.com/medias/sys_master/root/20220117/ig1s/61e55e95f997dd662324fde6/-473Wx593H-463669997-navy-MODEL.jpg",
      title:"Kurtha",
      oldPrice:500,
      newPrice:400,
    },
    

  ]
  return (
    <div className='featuredproducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>
Tune in to the Make it Big Podcast — our thought leadership audio series for retailers, entrepreneurs and ecommerce professionals. You'll get expert insights, strategies and tactics to help grow your business.</p>
      </div>
      <div className='bottom'>
        {data.map(items=>(
          <Card items={items} key={items.id}/>
        ))}

      </div>
    </div>
  )
}

export default Featuredproduct