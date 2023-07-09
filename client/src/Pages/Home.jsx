import React from 'react'
import Slider from '../Components/Slider/Slider'
import Category from '../Components/Category/Category'
import Products from '../Components/Products/Products'
import Newsletter from '../Components/News/News'


const Home = () => {
  return (
    <div>
        <Slider/>
        <Category/>
        <Products/>
        <Newsletter/>
    </div>
  )
}

export default Home