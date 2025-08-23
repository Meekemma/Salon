import React from 'react'
import Info from '../components/Home/Info'
import Navbar from '../components/Home/Navbar'
import MyCarousel  from '../components/Home/MyCarousel'
import CustomeGallery from '../components/Home/CustomeGallery'
import Performance from '../components/Home/Performance'
import Testimonial from '../components/Home/Testimonial'
import Footer from '../components/Footer'
import TeamGallary from '../components/Home/TeamGallary'
import PriceList from '../components/Home/PriceList'
import FaqList from '../components/Home/FaqList'


const Home = () => {
  return (
    <>
        <Info />
        <Navbar />
        <MyCarousel  />
        <CustomeGallery />
        <PriceList  />
        <Performance />
        <TeamGallary/>
        <FaqList />
        <Testimonial />
        <Footer />
    
    </>
  )
}

export default Home