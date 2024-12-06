import React from 'react'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import MyCarousel  from '../components/MyCarousel'
import CustomeGallery from '../components/CustomeGallery'
import Performance from '../components/Performance'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import TeamGallary from '../components/TeamGallary'


const Home = () => {
  return (
    <>
        <Info />
        <Navbar />
        <MyCarousel  />
        <CustomeGallery />
        <Performance />
        <TeamGallary/>
        <Testimonial />
        <Footer />
    
    </>
  )
}

export default Home