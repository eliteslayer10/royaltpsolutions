import React from 'react'

import Navbar from '../../components/navbar/index'
import Footer from "../../components/footer/footer";
import BgLayout6 from "../../Layouts/BgLayout6/BgLayout6";
import { HomeStyled } from "./style"
import ImageWithText2 from '../../components/Image-with-Text-2/ImageWithText2';
function index() {
    return (
        <>
            <BgLayout6>
                <Navbar />
                <HomeStyled>
                    <div className="Header-Section">
                        <span className="Header-Title">About Us</span>
                        <span className="Header-Text">Learn about our story, values, and mission as a company. Discover the team behind our success, our dedication to excellence, and how we strive to make a positive impact in the communities we serve. Dive into our history, ethos, and commitment to providing exceptional service in every aspect of our business.</span>
                    </div>

                    <ImageWithText2 />

                    <Footer />
                </HomeStyled>
            </BgLayout6>
        </>
    )
}

export default index