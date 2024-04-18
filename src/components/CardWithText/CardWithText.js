import React from 'react'
import { RoyalTextArray } from '../../Array'
import RoyalCards from '../RoyalCards'
import { CardStyled } from './style'

function CardWithText() {
    return (
        <>
            <CardStyled>
                {RoyalTextArray.map((item, index) => (
                    <div className='Royal-Text-Container' key={index}>
                        <div className='Feature-Button-Section'>
                            <button className='Feature-Button'>Feature</button>
                            <span className='Text-1'>{item.name}</span>
                        </div>
                        <span className='Text-2'>{item.title}</span>
                        <span className='Text-3'>{item.desc}</span>

                    </div>
                ))}</CardStyled>
            <RoyalCards />
        </>
    )
}

export default CardWithText