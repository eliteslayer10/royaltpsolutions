import styled from "styled-components";


export const HomeStyled = styled.div`
display: flex;

flex-direction: column;

 .Header-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    gap: 28px;
    text-align: center;
    padding-left: 94px;
    padding-bottom: 100px;
}
.Header-Title{
color: white;
font-size: 30px;
font-weight: 500;

}
.Header-Text{
color: white;
font-size: 16px;
margin-bottom: 219px;

width: 401px;
}
.Header-Text-1{
    font-size: 17px;
    color: #FFFFFF;
    font-weight: 500;

}
.Header-Text-Section{
    display: flex;
    justify-content: center;
    background-color: #001D64;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 70px;
}
 .Header-Button {
   font-size: 15px;
    width: 144px;
    height: 32px;
    color: #1F3978;
    font-weight: 600;
    background-color: #FFFFFF;
    border: none;
    border-radius: 4px;
}
@media (max-width: 900px) {
    .Header-Section{
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
    /* width: 23%; */
    /* align-items: center; */
    padding-left: 0px;
    margin-top: 50px;
    align-items: center;

}
}
@media (max-width: 550px) {
    .Header-Section{
   display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: center;
    /* width: 23%; */
    /* align-items: center; */
    padding-left: 0px;
    margin-top: 50px;
    
    align-items: center;

}
.Header-Text{
color: white;
font-size: 16px;
margin-top: 15px;

width: 309px;
}
}






`; 