import React from 'react'

import Navbar from '../../components/navbar/index'
import Footer from "../../components/footer/footer";
import BgLayout8 from "../../Layouts/BgLayout8/BgLayout8";
import { HomeStyled } from "./style"
import Textprivacy from '../../components/Text-for-Privacy-Policy/Textprivacy';

function index() {
  return (
    <>
      <BgLayout8>
        <Navbar />
        <HomeStyled>
          <div className="Header-Section">
            <span className="Header-Title">Privacy Policy</span>
            <span className="Header-Text">Understand how we handle your personal information with transparency and care. Our Privacy Policy outlines our commitment to protecting your data, explaining how we collect, use, and safeguard your information. Learn about your rights regarding privacy and how we ensure compliance with relevant regulations to maintain your trust and confidentiality.</span>
          </div>

          <Textprivacy />

          <Footer />
        </HomeStyled>
      </BgLayout8>
    </>
  )
}

export default index