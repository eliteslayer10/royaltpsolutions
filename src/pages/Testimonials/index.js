import React from 'react'
import TestiMonials from "../../components/Testimonals/testi"
import Navbar from '../../components/navbar/index'
import Footer from "../../components/footer/footer";
import BgLayout4 from "../../Layouts/BgLayout4/BgLayout4";
import { HomeStyled } from "./style"
function index() {
  return (
    <>
      <BgLayout4>
        <Navbar />
        <HomeStyled>
          <div className="Header-Section">
            <span className="Header-Title">Testimonials</span>
            <span className="Header-Text">Discover what our satisfied clients have to say about their experiences with our products and services. Dive into a collection of authentic testimonials showcasing the value and quality we deliver, straight from the voices of our customers.</span>
          </div>


          <TestiMonials />
          <Footer />
        </HomeStyled>
      </BgLayout4>
    </>
  )
}

export default index