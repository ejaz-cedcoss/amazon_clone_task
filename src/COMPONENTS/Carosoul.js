import { Carousel } from 'react-bootstrap'
import React from 'react'

import '../CSS/Carosoul.css'

const Carosoul = () => {
  return (
    <>

  
    <Carousel className='carousel-main' >

        <Carousel.Item >
            <img src={require('../CSS/pic01.jpg')} alt='' className='carouselImg'/>
        </Carousel.Item>

        <Carousel.Item>
            <img src={require('../CSS/pic02.jpg')} alt='' className='carouselImg'/>
        </Carousel.Item>

        <Carousel.Item>
            <img src={require('../CSS/pic03.jpg')} alt='' className='carouselImg'/>
        </Carousel.Item>


    </Carousel>   
  
    </>
  )
}

export default Carosoul
