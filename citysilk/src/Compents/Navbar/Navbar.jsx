import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import {Link} from "react-router-dom"
const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
<div className='navbar'>
    <div className='wrapper'>
        <div className='left'>
        <div className='item'>
               <Link className='link' to="/products/1">Women</Link>
            </div>
            <div className='item'>
               <Link className='link' to="/products/2">Men</Link>
            </div>
            <div className='item'>
               <Link className='link' to="/products/3">Kids</Link>
            </div>
        </div>
        <div className='center'>
                <Link className='link' to="/">CITYSILK</Link>
        </div>
        <div className='right'>
        <div className='item'>
               <Link className='link' to="/">About</Link>
            </div>
            <div className='item'>
               <Link className='link' to="/">Conatct</Link>
            </div>
            <div className='icons'>
                <SearchIcon/>
                <PermIdentityOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className='carticon' onClick={()=>setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
                </div>
            </div>
        </div>
    </div>
    {open && <Cart/>}
</div>
  )
}

export default Navbar