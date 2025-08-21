import React from 'react'
import Info from '../components/Home/Info'
import Navbar from '../components/Home/Navbar'
import MyCarousel  from '../components/Home/MyCarousel'
import CustomeGallery from '../components/Home/CustomeGallery'
import Performance from '../components/Performance'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import TeamGallary from '../components/TeamGallary'
import PriceList from '../components/PriceList'
import FaqList from '../components/FaqList'


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