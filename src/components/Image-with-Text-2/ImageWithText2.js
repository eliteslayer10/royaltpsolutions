import React from 'react'
import { CardsStyled } from './style'
import Image1 from "../../assets/images/h1.png"
import Image2 from "../../assets/images/h2.png"

function ImageWithText() {
    return (
        <CardsStyled>
            <div className='Image-Section-Header'>
                <div className='Header-Text-Side'>
                    <span className='Header1'>Who We Are</span>
                    <span className='Header2'>Our company</span>
                </div>
                <div className='Image-Text-Section'>
                    <img className="Image-Logo" src={Image1} alt="" />
                    <div className='Text-Section'>
                        <span className='Title'>Our Vision</span>
                        <p className='Text'>Our team is dedicated to helping with your selling needs. We ensure a nimble and stress-free experience. Financial troubles will no longer hinder you from selling your house. Finding yourself facing foreclosure? You have options!
                        </p>
                        <p className='Text'>Our network stretches from the Pacific Region to the South Eastern Region and beyond. Creating opportunities for homeowners in Florida, Texas, Virginia, and North Carolina, to name a few. Find out how we at Royal Tier Property Solutions LLC can help you sell without a Realtor. Selling nimble to a funds home buyer is beneficial and easy. Learn more about the many extended services we provide Nationwide.
                        </p>

                    </div>
                </div>
                <div className='Image-Text-Section'>
                    <div className='Text-Section'>
                        <span className='Title'>CONCIERGE SERVICE</span>
                        <p className='Text'>Royal Tier Property Solutions LLC has partnered with the companies and organizations that have been carefully vetted to ensure that customers are receiving high-quality people who share our values and commitment to customer service. Our team of professionals brings more than four decades of real estate experience. We currently service many areas throughout the South-Central and Southeastern United States. Our mission is to help you skip the stress, delays, and uncertainty that can come when selling your property the traditional way.
                        </p>
                        <p className='Text'>As part of our pursuit to help homeowners with common problems they might be facing related to the sale of their property. When you sell “as is” for funds to us, you won’t need to bother with repairs, cleaning, or even showings. There are no commissions, we pay typical closing costs and can close briskly. We believe in financial freedom and our goal is to help our neighbors achieve that goal without the added hassle. </p>



                    </div>
                    <img className="Image-Logo-1" src={Image2} alt="" />
                </div>
            </div>
        </CardsStyled>
    )
}

export default ImageWithText