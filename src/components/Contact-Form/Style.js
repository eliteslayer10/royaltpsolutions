import styled from "styled-components";


export const HomeStyled = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

.Contact-Form-Container{
    display: flex;
margin-top: 15px;
align-items: baseline;
    justify-content: space-around;
    width: 100%;
}
.Review-Side{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.Review-Title-Section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
}

.Review-Title{
font-size:28px;
font-weight: 500;
color: #001D64;

}
.Review-Text{
color: #001D64;
font-size: 17px;
font-weight: 400;
}
.Contact-Side{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}
.Address-Side{
    display: flex;
    gap: 5px;
    align-items: center;

}
.Adress-Icon {
    background-color: #E1EAFF;
    border-radius: 50%;
    color: #001D64;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
}
.Main-Detail-Box{
    display: flex;

   
    flex-direction: column;
    margin-top: 20px;
    border-radius: 5px;
  }
.Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    
}
.Form-Box-Text-Bottom {
display:flex;
}
 .Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    width: 600px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;


}
.Button-Div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.disclaimer-text {
  font-size: 0.8rem;
 
  color: #203978;
  font-weight: 500;
  width: 564px;
}
.Text-Section{
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 5px;
}
.NameBox {
    width: 270px;
    height: 37px;
    font-size: 17px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 280px;
  }
  .Form-Box-Title{
    padding-left: 2px;
    padding-bottom: 3px;
    font-size: 13px;
    color: #1F3978; font-weight: 500;
  }
  .FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 581px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 570px;
   
    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .Form-Icon{
    width: 20px;
    color: #1F3978;
}

@media (max-width: 1300px) {
  .Review-Side{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 20px;
}
.disclaimer-text {
  margin-top: 20px;
    font-size: 13px;
    flex-wrap: wrap;
    color: #203978;
    font-weight: 500;
    width: 571px;
}
}
@media (max-width: 1140px) {
  .Review-Side{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 20px;
}
  .Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    
}
.Contact-Form-Container{
    display: flex;
margin-top: 15px;
align-items: baseline;
    justify-content: center;
    width: 100%;
}
.Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 45px;
    cursor: pointer;
    width: 350px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;
}
.disclaimer-text {
    font-size: 14px;
    flex-wrap: wrap;
    color: #203978;
    margin-top: 20px;
    font-weight: 500;
    width: 551px;
}
.FormBox {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 39px;
    cursor: pointer;
    width: 280px;
    margin-left: 10px;
}
.FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 592px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 582px;

    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  }
  @media (max-width: 1000px) {
    .Contact-Form-Container{
    display: flex;
margin-top: 15px;
align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
}
  .Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    
}
.Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 45px;
    cursor: pointer;
    width: 360px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;
}
.disclaimer-text {
    font-size: 14px;
    flex-wrap: wrap;
    margin-top: 15px;
    color: #203978;
    font-weight: 500;
    width: 582px;
}
.FormBox  {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 39px;
    cursor: pointer;
    width: 250px;
    margin-left: 10px;
}
.NameBox {
    width: 238px;
    height: 30px;
    font-size: 13px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
  }
  .FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 528px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 518px;

    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  }
  @media (max-width: 920px) {
    .NameBox {
    width: 238px;
    height: 30px;
    font-size: 13px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
  }
    .Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    
}
.Text-Section{
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 5px;
  justify-content: center;
}
.Card-Main-Section {

    height: 525px;
    width: 100%;
    border-radius: 0px;


}
.FormBox  {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 39px;
    cursor: pointer;
    width: 250px;
    margin-left: 10px;
}

.Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    width: 330px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;


}
 .disclaimer-text {
    font-size: 14px;

    color: #203978;
    font-weight: 500;
    width: 520px;
}

  }
  @media (max-width: 584px) {
    .NameBox {
    width: 238px;
    height: 30px;
    font-size: 13px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
  }
    .Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    
}
.FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 252px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 232px;
   
    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
.Text-Section{
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 5px;
  justify-content: center;
}
.Card-Main-Section {

    height: 700px;
    width: 100%;
    border-radius: 0px;


}
.FormBox  {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 39px;
    cursor: pointer;
    width: 250px;
    margin-left: 10px;
}

.Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    width: 274px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;


}
 .disclaimer-text {
    font-size: 14px;

    color: #203978;
    font-weight: 500;
    width: 298px;
}
.Review-Side{
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
}

 .Review-Text {
    color: #001D64;
    font-size: 13px;
    font-weight: 400;
    width: 274px;
}
  }
  @media (max-width: 500px) {
    .FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 252px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 240px;
   
    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
.Card-Main-Section {

    height: 640px;
    width: 100%;
    border-radius: 0px;


}
.disclaimer-text {
    font-size: 14px;

    color: #203978;
    font-weight: 500;
    width: 298px;
}



  }
  @media (max-width: 400px) {
    .Names-Form{
    display: flex;
   gap: 10px;
   justify-content: center;
   flex-direction: column;
   
    align-items: center;
    margin-top: 20px;
    width: 100%;
    
}
.FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 293px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 275px;
   
    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .Check-Box{
  width: 17px;
  background-color: #1F3978 !important ;
    height: 17px; }
.FormBox  {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 35px;
    cursor: pointer;
    width: 295px;
    margin-left: 10px;
}
.NameBox {
    width: 280px;
    height: 30px;
    font-size: 13px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
}
.disclaimer-text {
    font-size: 12px;

    color: #203978;
    font-weight: 500;
    width: 298px;
    
}

  }
  @media (max-width: 350px) {
   .FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 246px;
    height: 120px;
}
 .NameBox-Comment {
    width: 230px;
    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
}
    .Names-Form{
    display: flex;
   gap: 10px;
   justify-content: center;
   flex-direction: column;
   
    align-items: center;
    margin-top: 20px;
    
    
}
.FormBox  {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 35px;
    cursor: pointer;
    width: 250px;
    margin-left: 10px;
}
.NameBox {
    width: 240px;
    height: 30px;
    font-size: 13px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
}
.disclaimer-text {
    font-size: 12px;
    color: #203978;
    font-weight: 500;
    width: 272px;
    
}
.Review-Text {
    color: #001D64;
    font-size: 13px;
    font-weight: 400;
    width: 235px;
}
 .Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    width: 295px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;
}
  }
`;
