import React from 'react'
import './mainpage.css'
import Navbar from './components/navbar/navbar'
import Landingpage from './components/landing page/landingpage'
import Features from './components/features/features'
import Collab from './components/collab/collab'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'
import Ourcommunity from './components/ourcommunity/ourcommunity'
import How from './components/how/how'
import Contactus from './components/contactus/contactus.jsx'

const Mainpage = () => {


  
  return (
    
    <div className='body'>
        <Navbar></Navbar>
        <Landingpage></Landingpage>
        <Features></Features>
        <Ourcommunity></Ourcommunity>
        <How></How>
        <Collab></Collab>
        <Blog></Blog>
        <Contactus></Contactus>
        <Footer></Footer>
       

    </div>
  )
}

export default Mainpage