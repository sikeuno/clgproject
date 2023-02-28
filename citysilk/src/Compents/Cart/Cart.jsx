import React from 'react'
import "./Cart.scss"
import { DeleteOutlined } from '@mui/icons-material'
const Cart = () => {
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
    ]
  return (
    <div className='cart'>
        <h1>Products in cart</h1>
        {data?.map((items)=>(

            <div className='item' key={items.id}>
                <img src={items.img} alt=""/>
                <div className='details'>
                    <h1 >{items.title}</h1>
                    <p>{items.desc?.substring(0,100)}</p>
                    <div className='price'>1*{items.newPrice}</div>
                </div>
                <DeleteOutlined className='delete'/>
            </div>
        )
        )}
        <div className='total'>
            <span>SUBTOTOAL</span>
            <span>1200</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
     </div>
  )
}

export default Cart