import React from 'react'

import Navbar from '../../components/navbar/index'
import Footer from "../../components/footer/footer";
import BgLayout4 from "../../Layouts/BgLayout4/BgLayout4";
import { HomeStyled } from "./style"
import ImageWithText2 from '../../components/Image-with-Text-2/ImageWithText2';
import ContactForm from '../../components/Contact-Form/ContactForm';
function index() {
    return (
        <>
            <BgLayout4>
                <Navbar />
                <HomeStyled>
                    <div className="Header-Section">
                        <span className="Header-Title">Contact Us</span>
                        <span className="Header-Text">Get in touch with us easily and conveniently. Find our contact information, including phone numbers, email addresses, and office locations. Whether you have questions, feedback, or are ready to start a conversation about your property, reaching out to us is just a click or call away.</span>
                    </div>

                    <ContactForm />

                    <Footer />
                </HomeStyled>
            </BgLayout4>
        </>
    )
}

export default index