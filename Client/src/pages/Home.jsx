import React from 'react'
import Allcategories from '../Components/Allcategories'
import Announcements from '../Components/Announcements'
import Categories from '../Components/Categories'
import Flyer from '../Components/Flyer'
import Footer from '../Components/Footer'
import HomePin from '../Components/HomePin'
import Navbar from '../Components/Navbar'
import NewRealese from '../Components/NewRealese'
import Newsletter from '../Components/Newsletter'
import Products1 from '../Components/Products1'
import Slider from '../Components/Slider'



const home = () => {
  return (
    <div>
      <Navbar/> 
      <Announcements/>
      <HomePin/>
      <Slider/>
      <Categories/>
      <Allcategories/>
      <NewRealese/>
      <Products1/>
      <Flyer/>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default home