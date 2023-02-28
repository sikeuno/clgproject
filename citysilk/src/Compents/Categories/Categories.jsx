import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"
const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                    <img src="https://lh3.googleusercontent.com/Z3xn71oFh5OJ0BsYvTrN5pywsi6iDZDYj24ZihU8DHgD5vQHAbG2ZLwkl9yGpbphGqWUiKIEgqNjNiev3KKTRheEhammpPEUV80qevNHrSvKaBlE0SqCSYvWLq4P9AC_zpsWBq6I"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
            </div>
            <div className='row'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmNLFoE24_Esi0F0XCu1MOQGg82J62ChyAw&usqp=CAU"alt=""/>
            <button><Link  className="link" to="/products/1">ShopNow</Link></button>
            </div>
        </div>
        <div className='col'>
        <div className='row'>
                    <img src="https://naruto-official.com/common/ogp/NTOS_OG-main.png"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
        </div>
        </div>
        <div className='col col-l'>
        <div className='row'>
        <div className='col'>
        <div className='row'>
                    <img src="https://lh3.googleusercontent.com/Z3xn71oFh5OJ0BsYvTrN5pywsi6iDZDYj24ZihU8DHgD5vQHAbG2ZLwkl9yGpbphGqWUiKIEgqNjNiev3KKTRheEhammpPEUV80qevNHrSvKaBlE0SqCSYvWLq4P9AC_zpsWBq6I"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
                    </div>
        </div>
        <div className='col'>
        <div className='row'>
                    <img src="https://static.vecteezy.com/packs/media/vector/hero-800px-cc1b446b.jpg"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
                    </div>
        </div>
        </div>
        <div className='row'>
                    <img src="https://lh3.googleusercontent.com/Z3xn71oFh5OJ0BsYvTrN5pywsi6iDZDYj24ZihU8DHgD5vQHAbG2ZLwkl9yGpbphGqWUiKIEgqNjNiev3KKTRheEhammpPEUV80qevNHrSvKaBlE0SqCSYvWLq4P9AC_zpsWBq6I"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Categories