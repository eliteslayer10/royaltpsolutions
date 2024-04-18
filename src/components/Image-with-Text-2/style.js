import styled from "styled-components";


export const CardsStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
.Image-Section-Header{
display: flex;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
width: 100%;
}
.Header-Text-Side{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
margin-top: 10px;
gap: 15px;
margin-bottom: 50px;
}
.Header1{
    font-size: 40px;
    font-weight: 600;
    color: #001D64;
}
.Header2{
    font-size: 18px;
    font-weight: 400;
    color: #6677A2;
}
.Image-Logo{
    
    width: 485px;
    height: 469px;

}
.Image-Logo-1{
    
    width: 485px;
    height: 616px;

}
.Text-Section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
   color: #334A83;
   gap: 5px;
   padding-left: 15px;
    font-size: 15px;
    font-weight: 500;

}
.Title{
    font-size: 20px;
    color: #001D64;
}
.Text{
    color: #334A83;
    font-size: 15px;
   
}
.Image-Text-Section{
    display: flex;
    justify-content: space-between;
   
    width: 100%;
    gap: 16px;
}
@media (max-width:1000px) {
  .Image-Text-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 16px;
}
}
@media (max-width:999px) {

.Text-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
   color: #334A83;
    font-size: 14px;
    font-weight: 500;
    padding-left: 0px;

}
.Text{
color: #334A83;
font-size: 15px;
width: 700px;
}


}
@media (max-width:800px) {

.Text-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
   color: #334A83;
    font-size: 14px;
    font-weight: 500;
    padding-left: 0px;

}
.Text{
color: #334A83;
font-size: 15px;
width: 402px;
}


}
@media (max-width:633px) {
    .Header-Text{
    
    font-size: 15px;
    color: #FFFFFF;
    font-weight: 500;
}
.Text-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align:center;
   color: #334A83;
    font-size: 14px;
    font-weight: 500;

}
.Text{
color: #334A83;
font-size: 15px;
width: 402px;
}
.Header-Text-Section{
    display: flex;
    justify-content: center;
    background-color: #001D64;
    align-items: center;
   
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 70px;
}
 .Header-Button {
   font-size: 15px;
    width: 130px;
    height: 32px;
    color: #1F3978;
    font-weight: 600;
    background-color: #FFFFFF;
    border: none;
    border-radius: 4px;
}
}
@media (max-width:502px) {
  .Image-Text-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 16px;
}
.Text-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align:center;
   color: #334A83;
    font-size: 14px;
    font-weight: 500;

}
.Text{
    color: #334A83;
    font-size: 15px;
    width: 370px;
}
 .Image-Logo {
    width: 350px;
    height: 350px;
}
.Image-Logo-1{
    
    width: 350px;
    height: 383px;
margin-bottom: 15px;
}
}
@media (max-width:427px) {
     .Header-Text {
    font-size: 15px;
    color: #FFFFFF;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 203px;
}
.Header-Text-Section{
    display: flex;
    justify-content: center;
    background-color: #001D64;
    align-items: center;
   
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
 .Header-Button {
   font-size: 15px;
    width: 130px;
    height: 32px;
    color: #1F3978;
    font-weight: 600;
    background-color: #FFFFFF;
    border: none;
    border-radius: 4px;
}
.Text{
    color: #334A83;
    font-size: 15px;
    width: 343px;
}
}
@media (max-width:368px) {
  .Image-Text-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 16px;
}
.Text-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    width: 100%;
   color: #334A83;
    font-size: 14px;
    font-weight: 500;

}
.Image-Logo {
    width: 280px;
    height: 280px;
}
.Image-Logo-1 {
    width: 280px;
    height: 280px;
}
.Text{
    color: #334A83;
    font-size: 15px;
    width: 300px;
}
}
`;