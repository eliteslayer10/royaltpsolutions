import React from 'react'
import Navbar from "../../components/navbar/index";
import BgLayout3 from "../../Layouts/BgLayout3/BgLayout3";
import { HomeStyled } from "./style"
import Footer from "../../components/footer/footer"
import CardWithText from '../../components/CardWithText/CardWithText';
import ImageWithText from '../../components/ImageWithText/ImageWithText';

function HowItWork() {
    return (
        <>
            <BgLayout3>
                <Navbar />
                <HomeStyled>
                    <div className="Header-Section">
                        <span className="Header-Title">How it works</span>
                        <span className="Header-Text">No hassles. No obligation. No commitment. Complete Form & A
                            Property Specialist Will Contact You</span>
                    </div>
                    <CardWithText />
                    <div className='Header-Text-Section'>
                        <span className='Header-Text-1'>Ready to get started? Contact us now for more information!</span>
                        <button className='Header-Button'> Call Us</button>
                    </div>
                    <ImageWithText />
                    <Footer />
                </HomeStyled>
            </BgLayout3>
        </>
    )
}

export default HowItWork
