import React, { useState } from 'react'
import "./Slider.scss"
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Slider = () => {
    const [currentslide,setcurrentslide]=useState(0);


    const data=[
        "https://images.herzindagi.info/image/2022/May/clothes-to-repeat-fashion-tips.jpg",
        "https://cdn.shopify.com/s/files/1/1604/2463/t/3/assets/slider-2.jpg?v=41677018537316967111479298745",
        "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo2/slider/slide-1.jpg"
    ];

const prevslide=()=>{
    setcurrentslide(currentslide === 0 ? 2 :currentslide-1);
}
const nextslide=()=>{
    setcurrentslide(currentslide === 2 ? 0 :currentslide+1);
}
  return (
   <div className='slider'>
    <div  className='container' style={{transform:`translateX(-${currentslide * 100}vw)`}}>
        <img src={data[0]} alt=""/>
        <img src={data[1]} alt=""/>
        <img src={data[2]} alt=""/>
    </div>
    <div className='icons'>
        <div className='icon' onClick={nextslide}>
            <EastOutlinedIcon/>
        </div>
        <div className='icon' onClick={prevslide}>
            <WestOutlinedIcon/>
        </div>
    </div>
   </div>
  )
}

export default Slider