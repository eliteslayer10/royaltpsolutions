import styled from "styled-components";


export const CardsStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 100%;
flex-wrap: wrap;
.Royal-Cards-Section{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A0AAC4;
    flex-wrap: wrap;
    margin-top: 10px;
    border-radius: 12px;
    margin-bottom: 20px;
    
}
.Card-Text-Section{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
    font-size: 13px;
    width: 250px;
   
}
.Royal-Card{
    display: flex;
 flex-direction: column;
 gap: 10px;
 width: 330px;
 height: 340px;

 align-items: center;
 justify-content: center;
}
.Cards-Logo{
    width: 300px;
}
.Image-Section{
    position: relative;
}
.Card-Title{
    font-size: 18px;
    font-weight: 500;
    color: #001D64;
}
 .Number {
    position: absolute;
    right: 4px;
    background: #001D64;
    color: #F6F6F6;
    top: 154px;
    width: 33px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    height: 31px;
    align-items: center;
}
@media (max-width:700px) {
    .Royal-Card{
    display: flex;
 flex-direction: column;
 gap: 10px;
 width: 300px;
 height: 340px;

 align-items: center;
 justify-content: center;
}
.Cards-Logo{
    width: 280px;
}
}
`;