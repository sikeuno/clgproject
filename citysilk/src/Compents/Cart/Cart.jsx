import React from 'react'
import "./Cart.scss"
import { DeleteOutlined } from '@mui/icons-material'
import { useSelector} from "react-redux"
import { removeItem } from '../../Redux/Cartreducer'
import { resetCart } from '../../Redux/Cartreducer'
import { useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest'

const Cart = () => {
  const products= useSelector(state=>state.cart.products)
  const dispatch = useDispatch()

  const totalprice=()=>{
    let total=0;
    products.forEach((item)=> (
      total +=item.quantity*item.price ));
      return total.toFixed(2);
  };
  const stripePromise = loadStripe('pk_test_51Mrg2tSA5xmEEIYXZln5KmBAGHyHcqq4pSy7IXPWx8hKfJybwzfSd9NQ3iHiTAWDSgMx5D3Uienne7QJ9IW4j8QJ00vJXtFEZi');
  const handlePayment=async()=>{
    try{

      const stripe= await stripePromise;
      const res= await makeRequest.post("/orders",{
        products,
      })
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    }catch(err){
      console.log(err)
    }

  }
 
  return (
    <div className='cart'>
        <h1>Products in cart</h1>
        {products?.map((item)=>(

            <div className='item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt=""/>
                <div className='details'>
                    <h1 >{item.title}</h1>
                    <p>{item.descr?.substring(0,10)}</p>
                    <div className='price'>{item.quantity}*{item.price}</div>
                </div>
                <DeleteOutlined className='delete' onClick={()=>{ dispatch(removeItem(item.id))  }}/>
            </div>
        )
        )}
        <div className='total'>
            <span>SUBTOTOAL</span>
            <span>₹{totalprice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=>{ dispatch(resetCart())  }}>Reset Cart</span>
     </div>
  )
}

export default Cart