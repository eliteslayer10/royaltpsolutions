import React, { useState } from 'react';
import { CardStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { IoMailUnreadSharp } from "react-icons/io5";
import { BsPhoneFill } from "react-icons/bs";
import { IoMdCube } from "react-icons/io";
import { BsFillBuildingsFill } from "react-icons/bs";
function Cards() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [dateAndTime, setDateAndTime] = useState("");
    const [repeating, setRepeating] = useState("");
    const [description, setDescription] = useState("");
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDateAndTimeChange = (event) => {
        setDateAndTime(event.target.value);
    };
    const handleRepeatingChange = (event) => {
        setRepeating(event.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };


    return (
        <CardStyled>
            <div className='Card-Main-Section'>
                <div className="Main-Detail-Box">
                    <div className="Names-Form">
                        <div className="Form-Box-Text-Bottom">
                            <span className="Form-Box-Title">
                                Full Name *</span>
                            <div className="FormBox">
                                <input
                                    className="NameBox"
                                    type="Name"
                                    placeholder="What is your full name ?"
                                // value={title}
                                // onChange={handleTitleChange}
                                /><BsPersonFill className='Form-Icon' />
                            </div>
                        </div>
                        <div className="Form-Box-Text-Bottom">
                            <span className="Form-Box-Title">
                                Email address *</span>
                            <div className="FormBox">
                                <input
                                    className="NameBox"
                                    type="email"
                                    placeholder="What is your email address ?"
                                // value={title}
                                // onChange={handleTitleChange}
                                /><IoMailUnreadSharp className='Form-Icon' />
                            </div>
                        </div>
                        <div className="Form-Box-Text-Bottom">
                            <span className="Form-Box-Title">

                                Phone number *</span>
                            <div className="FormBox">
                                <input
                                    className="NameBox"
                                    type="Name"
                                    placeholder="What is your phone number ?"
                                // value={repeating}
                                // onChange={handleRepeatingChange}
                                /><BsPhoneFill className='Form-Icon' />

                            </div>
                        </div>
                    </div>
                    <div className="Names-Form">
                        <div className="Form-Box-Text-Bottom">
                            <span className="Form-Box-Title">
                                Property address *</span>
                            <div className="FormBox">
                                <input
                                    className="NameBox"
                                    type="Name"
                                    placeholder="What is your property address ?"
                                // value={title}
                                // onChange={handleTitleChange}
                                /><BsFillBuildingsFill className='Form-Icon' />
                            </div>
                        </div>
                        <div className="Form-Box-Text-Bottom">
                            <span className="Form-Box-Title">
                                Own anything on your house *</span>
                            <div className="FormBox">
                                <input
                                    className="NameBox"
                                    type="email"
                                    placeholder="Do you own anything on your house ?"
                                // value={title}
                                // onChange={handleTitleChange}
                                /><IoMdCube className='Form-Icon' />
                            </div>
                        </div>
                        <button className="Submit-Button">

                            Request a quote
                        </button>
                    </div>
                    <div className='Text-Section'>
                        <input className='Check-Box'
                            // id="disclaimerCheckbox"
                            type="checkbox"
                        // checked={isAgreed}
                        // onChange={handleCheckboxChange}
                        />
                        <p className="disclaimer-text">
                            By submitting this form and signing up for texts, you consent to receive up to two marketing text messages per month from Royal Tier Property Solutions LLC at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. You can unsubscribe at any time by replying STOP. For more information on how we use your data, please review our <a href="/privacy-policy">Privacy Policy</a>.
                        </p>
                    </div>



                </div></div>
        </CardStyled>
    )
}

export default Cards