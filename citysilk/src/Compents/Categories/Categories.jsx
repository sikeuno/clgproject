import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"
const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                    <img src="https://looksgud.com/blog/wp-content/uploads/2016/08/use-thick-wooden-hangers-to-protect-your-shirt-from-deformation.jpg"alt=""/>
                    <button><Link  className="link" to="/products/1">Shirt</Link></button>
            </div>
            <div className='row'>
            <img src="https://t4.ftcdn.net/jpg/03/03/36/97/360_F_303369705_Ap2BaZOlOMHqwtWmtNb1TBlgRmXtgtoh.jpg"alt=""/>
            <button><Link  className="link" to="/products/1">kurtha</Link></button>
            </div>
        </div>
        <div className='col'>
        <div className='row'>
                    <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&w=1000&q=80"alt=""/>
                    <button><Link  className="link" to="/products/1">Tshirt</Link></button>
        </div>
        </div>
        <div className='col col-l'>
        <div className='row'>
        <div className='col'>
        <div className='row'>
                    <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
                    </div>
        </div>
        <div className='col'>
        <div className='row'>
                    <img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
                    </div>
        </div>
        </div>
        <div className='row'>
                    <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"alt=""/>
                    <button><Link  className="link" to="/products/1">ShopNow</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Categories