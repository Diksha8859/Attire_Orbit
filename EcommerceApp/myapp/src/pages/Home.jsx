import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import CategoryItem from '../components/CategoryItem'
import Product from '../components/Product'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <div className='container'>
      <Announcement />
        <Navbar />
        <Slider/>
        <Categories/>
        <CategoryItem/>
        <Products/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
