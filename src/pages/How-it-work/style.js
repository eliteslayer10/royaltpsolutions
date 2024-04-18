import styled from "styled-components";


export const HomeStyled = styled.div`
display: flex;

flex-direction: column;

.Header-Section{
   display: flex;
   flex-direction: column;
   justify-content: center;
    /* width: 23%; */
     align-items: center; 
    margin-top: 50px;
    padding-left: 94px;
    padding-bottom: 20px;

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
@media (max-width: 550px) {
    .Header-Section{
   display: flex;
   flex-direction: column;
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


@media (max-width:633px) {
    .Header-Section{
   display: flex;
   flex-direction: column;
   justify-content: center;
    /* width: 23%; */
     align-items: center; 
    margin-top: 50px;
text-align: center;

}
.Header-Text-Section{
    display: flex;
    justify-content: center;
    background-color: #001D64;
    align-items: center;
   
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 144px;
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
.Header-Text-1 {
    font-size: 17px;
    color: #FFFFFF;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 251px;
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
.Header-Text-1 {
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 251px;
}

}
@media (max-width:342px) {
     .Header-Text-1 {
    font-size: 14px;
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

}

`; 