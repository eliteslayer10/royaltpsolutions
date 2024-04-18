import React from 'react'
import { HomeStyled } from "./Style"
import { RiHandbagFill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function ContactForm() {
    return (
        <HomeStyled>

            <div className='Contact-Form-Container'>
                <div className='Review-Side'>
                    <div className='Review-Title-Section'>
                        <span className='Review-Title'>Want to review us?</span>
                        <span className='Review-Text'>How was your experience with the Royal Tier Property Solutions LLC?</span>
                    </div>
                    <div className='Contact-Side'>
                        <div className='Address-Side'>
                            <span className='Adress-Icon' > <FaHouse className='Icons' /></span>
                            <span className='Review-Text'>8421 Broad St <br /> Mclean, Va 22102</span>
                        </div>
                        <div className='Address-Side'>
                            <span className='Adress-Icon' ><FaPhoneAlt className='Icons' /></span>
                            <span className='Review-Text' >royaltierpropertysolutions@gmail.com</span>
                        </div>
                        <div className='Address-Side'>
                            <span className='Adress-Icon'><RiHandbagFill className='Icons' /></span>
                            <span className='Review-Text'>540-455-8879</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Main-Detail-Box">
                        <div className="Names-Form">
                            <div className="Form-Box-Text-Bottom">

                                <div className="FormBox">
                                    <input
                                        className="NameBox"
                                        type="Name"
                                        placeholder="Your name"
                                    // value={title}
                                    // onChange={handleTitleChange}
                                    />
                                </div>
                            </div>
                            <div className="Form-Box-Text-Bottom">

                                <div className="FormBox">
                                    <input
                                        className="NameBox"
                                        type="email"
                                        placeholder="Phone number"
                                    // value={title}
                                    // onChange={handleTitleChange}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="Names-Form">
                            <div className="Form-Box-Text-Bottom">

                                <div className="FormBox">
                                    <input
                                        className="NameBox"
                                        type="Name"
                                        placeholder="Your email"
                                    // value={title}
                                    // onChange={handleTitleChange}
                                    />
                                </div>
                            </div>
                            <div className="Form-Box-Text-Bottom">

                                <div className="FormBox">
                                    <input
                                        className="NameBox"
                                        type="email"
                                        placeholder="Property address"
                                    // value={title}
                                    // onChange={handleTitleChange}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="Names-Form">
                            <div className="Form-Box-Text-Bottom">

                                <div className="FormBox-Comment">

                                    <textarea
                                        className="NameBox-Comment"
                                        placeholder="Your message"
                                        // value={description}
                                        // onChange={handleDescriptionChange}
                                        rows={5}
                                    ></textarea>

                                </div>
                            </div>

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
                        <div className='Button-Div'> <button className="Submit-Button">
                            Contact
                        </button></div>

                    </div>


                </div>
            </div> </HomeStyled>
    )
}

export default ContactForm