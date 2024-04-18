import React from 'react'
import { RoyalCardsArray } from '../../Array'
import { CardsStyled } from "./style"
import Ex1 from "../../assets/images/ex1.png"

function RoyalCards() {
    return (
        <CardsStyled>
            {RoyalCardsArray.map((item, index) => (
                <div className='Royal-Cards-Section' key={index}>
                    <div className='Royal-Card'>
                        <div className='Image-Section'>

                            <img className="Cards-Logo" src={Ex1} alt="" />
                            <span className='Number'>{item.number}</span>

                        </div>

                        <div className='Card-Text-Section'>    <span className='Card-Title'>{item.name}</span>
                            <span className='Card-Text'>{item.title}</span></div>


                    </div>
                </div>
            ))}
        </CardsStyled>

    )
}

export default RoyalCards