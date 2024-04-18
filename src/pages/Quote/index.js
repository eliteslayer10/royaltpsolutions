import React from 'react'
import Navbar from "../../components/navbar/index";
import BgLayout2 from "../../Layouts/BgLayout2/BgLayout2";
import { HomeStyled } from "./style"
import { AboutFooter } from "./style";
import { FaHouse } from "react-icons/fa6";
import { FooterArray } from "../../Array";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import Form from "../../components/LoginForm/index";
function Quote() {
    return (
        <>
            <BgLayout2>
                <Navbar />
                <HomeStyled>
                    <div className="Header-Section">
                        <span className="Header-Title">Request A Quote</span>
                        <span className="Header-Text">Just Complete This Brisk Form!</span>
                    </div>
                    <Form />
                    <AboutFooter>
                        <div className="Footer-Main-Section">
                            <div className="Footer-Container">
                                <div className="ContactLinks">
                                    <span className="Public-Title1">About us</span>
                                    <p className="Contact-Link-Text">
                                        Royal Tier Property Solutions LLC is a creative real estate investment company that specializes in speed and convenience. We pride ourselves in creating WIN-WIN situations for all parties involved. The quality of service that we provide to our Seller’s is the most important thing to us. Integrity and transparency are our aims.
                                    </p>

                                </div>
                                {FooterArray.map((item, index) => (
                                    <div className="ProductSection" key={index}>
                                        <div className="PublicMainSection">
                                            <span className="Public-Title">{item.name}</span>
                                            <span className="Public-Text">{item.desc}</span>
                                            <span className="Public-Text">{item.title}</span>
                                            <span className="Public-Text">{item.text}</span>
                                            <span className="Public-Text">{item.sale}</span>
                                            <span className="Public-Text">{item.res}</span>
                                            <span className="Public-Text">{item.priv}</span>
                                        </div>
                                    </div>
                                ))}

                                <div className="Contact-Side">
                                    {" "}
                                    <span className="Contact-Title">Contact</span>
                                    <div className="Contact-Text-Section">
                                        <div className="Number-Section">
                                            <span className="Number">

                                                <FaHouse className="Number-logo" />
                                                8421 Broad St Mclean, Va 22102

                                            </span>
                                        </div>
                                    </div>
                                    <div className="Number-Section">
                                        <span className="Number">
                                            {" "}
                                            <FiPhone className="Number-logo" />
                                            540-455-8879

                                        </span>
                                        <span className="Email">
                                            <MdOutlineEmail className="Email-logo" />
                                            royaltierpropertysolutions@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="Copy-Right-Section">
                                <span className="Copy-Right-Text">
                                    @ 2024 Royal Tier Property Solutions LLCs | All Rights Reserved
                                </span>

                            </div>
                        </div>
                    </AboutFooter>
                </HomeStyled>
            </BgLayout2>
        </>
    )
}

export default Quote