import React from 'react'
import Carosoul from './Carosoul'
import Footer from './Footer'
import Navbar from './Navbar'
import Card from '../COMPONENTS/Cards'
import '../CSS/Homes.css'


const Home = () => {
  return (
    <div>
         <Navbar/>
         <Carosoul/>
        <Card/> 
        <Footer/> 
       
    </div>
  )
}

export default Home
