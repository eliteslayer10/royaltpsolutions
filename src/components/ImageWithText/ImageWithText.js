import React from 'react'
import { CardsStyled } from './style'
import Image1 from "../../assets/images/h1.png"
import Image2 from "../../assets/images/h2.png"

function ImageWithText() {
    return (
        <CardsStyled>
            <div className='Image-Section-Header'>

                <div className='Image-Text-Section'>
                    <img className="Image-Logo" src={Image1} alt="" />
                    <div className='Text-Section'>
                        <span className='Title'>SELLING FOR FUNDS</span>
                        <p className='Text'>We understand that selling your home can be a stressful process. Whether an investment property or your primary residence, our goal is to make that process as stress-free as possible. We will do all of the “heavy lifting” to make the process as seamless as we can make it. Over the years, we have developed systems and operations that allow us to operate at an impressive level of efficiency and our customer satisfaction level has been consistent HIGH as a result.
                        </p>
                        <p className='Text'>Using the Fannie Mae Appraisal guidelines, we are able to assess your property fairly and calculate your funds offer using recent market data. We do not “lowball” or make promises that we cannot keep. We strive to be as transparent as possible.
                        </p>
                        <p className='Text'>Unlike traditional on-market sales, the number that you agree to sell for is the number that you NET. Meaning, if we agree to sell for $190,000.. you will walk away with $190,000 at closing. This is VERY beneficial to Seller’s who are trying to avoid their profits being split amongst realtors/agents.</p>
                        <p className='Text'>Our paperwork drafted by our competent Real Estate attorneys is straightforward and easy to interpret. Our property specialists are available to walk Seller’s through the paperwork step by step to ensure a full understanding</p>
                    </div>
                </div>
                <div className='Image-Text-Section'>
                    <div className='Text-Section'>
                        <span className='Title'>CONCIERGE SERVICE</span>
                        <p className='Text'>Have you thought about selling your house…. but the offers that you receive by pesky investors are just WAY too low? Well look no further! Our Concierge Service may be just what you’ve been looking for. With our Concierge Service, we are able to create yet another WIN-WIN scenario for select properties in North Carolina, and Virginia.
                        </p>
                        <p className='Text'>Over the years, Royal Tier Property Solutions LLCs has done LOTS of transactions in our local markets and have built an extensive network as a result. From realtors & agents, to other investment companies, our network often depends on us to send them awesome properties like yours that may not fit our buying criteria. These buyers are willing to pay top dollar for your property!
                        </p>
                        <p className='Text'>With the Concierge Service, you receive all of the benefits of a funds offer, without the low price of a typical funds offer. That means NO closing fees, NO commissions, brisk close, and NO REPAIRS.</p>
                        <p className='Text'>Usually, for a Seller to receive the price that we offer via the Concierge Service, a Seller would have to hire a realtor or agent to list the property. With the Concierge Service, we are able to do this for the Seller, without the steep commission cost or hassle of a traditional realtor. We are VERY selective with approval for this service, but if your house qualifies you won’t be disappointed. Ask your property specialist for details!</p>
                        <div className='Text-Section' >
                            <span className='Title'>Why choose the Concierge Service ?</span>
                            <li className='Text'>
                                Higher price vs the typical “funds offer”
                            </li>
                            <li className='Text'>
                                As-is, no repairs
                            </li >
                            <li className='Text'>
                                No commission costs AT ALL
                            </li >
                            <li className='Text'>
                                No closing costs
                            </li >
                            <li className='Text'>
                                Complete hands-off experience
                            </li>
                        </div>


                    </div>
                    <img className="Image-Logo-1" src={Image2} alt="" />
                </div>
            </div>
        </CardsStyled>
    )
}

export default ImageWithText