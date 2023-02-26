import React from 'react'
import './Home.scss'
import Slider from '../../Compents/Slider/Slider'
import Featuredproduct from '../../Compents/Featuredproduct/Featuredproduct'
import Categories from '../../Compents/Categories/Categories'
import Contact from '../../Compents/Conatct.jsx/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featuredproduct type="Featured" />
      <Categories/>
      <Featuredproduct type="Trending" />
      <Contact/>
    </div>
  )
}

export default Home