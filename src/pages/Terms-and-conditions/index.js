import React from 'react'

import Navbar from '../../components/navbar/index'
import Footer from "../../components/footer/footer";
import BgLayout9 from "../../Layouts/BgLayout9/BgLayout9";
import { HomeStyled } from "./style"
import Texttermsandconditions from "../../components/Text-for-terms-and-conditions/Termsandconditions"

function index() {
  return (
    <>
      <BgLayout9>
        <Navbar />
        <HomeStyled>
          <div className="Header-Section">
            <span className="Header-Title">Terms and Conditions</span>
            <span className="Header-Text">Welcome to Royal Tier Property Solutions LLC! These Terms and Conditions govern your use of our website and services. By accessing or using our website and services, you agree to comply with these Terms and Conditions. Please read them carefully before proceeding.</span>
          </div>

          <Texttermsandconditions />

          <Footer />
        </HomeStyled>
      </BgLayout9>
    </>
  )
}

export default index