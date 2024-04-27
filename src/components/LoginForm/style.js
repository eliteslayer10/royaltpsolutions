import styled from "styled-components";


export const CardStyled = styled.div`

display: flex;
justify-content: center;

.Card-Main-Section {
    /* background-color: #FFFFFF; */
    background-color: white;
    margin-top: 20px;
    height: 310px;
   width: 1300px;
    border-radius: 28px;
    display: flex;
    padding: 15px;
    margin-top: 40px;
    justify-content: center;
   
}
.Check-Box{
  width: 17px;
  background-color: #1F3978 !important ;
    height: 17px; }
.Main-Detail-Box{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-radius: 5px;
  }
  .Main-Container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
.Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    
}
.Form-Box-Text-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 56px;
    cursor: pointer;
    width: 380px;
    margin-left: 10px;
}
 .Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 57px;
    cursor: pointer;
    width: 394px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;
}
.disclaimer-text {
  font-size: 0.8rem;

  color: #203978;
  font-weight: 500;
  width: 1189px;
}
.Text-Section{
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 5px;
}
  .NameBox {
    width: 379px;
    height: 30px;
    font-size: 15px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
  }
  .FormBox {
    display: flex;
   
  }
  .Form-Box-Title{
    padding-left: 2px;
    padding-bottom: 3px;
    font-size: 13px;
    color: #1F3978; font-weight: 500;
  }
  .Form-Icon{
    width: 20px;
    color: #1F3978;
}
@media (max-width: 1300px) {
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
    height: 57px;
    cursor: pointer;
    width: 304px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;
}
 .disclaimer-text {
  margin-top: 20px;
    font-size: 13px;
    flex-wrap: wrap;
    color: #203978;
    font-weight: 500;
    width: 891px;
}
.Form-Box-Text-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 56px;
    cursor: pointer;
    width: 280px;
    margin-left: 10px;
}
 .Card-Main-Section {
    background-color: white;
    margin-top: 20px;
    height: 281px;
    width: 1052px;
    border-radius: 28px;
    display: flex;
    padding: 15px;
    margin-top: 80px;
    justify-content: center;
}
  }
@media (max-width: 1140px) {
   .Card-Main-Section {
    background-color: white;
    margin-top: 20px;
    height: 307px;
    width: 985px;
    border-radius: 28px;
    display: flex;
    padding: 15px;
    margin-top: 30px;
    justify-content: center;
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
    height: 57px;
    cursor: pointer;
    width: 304px;
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
    width: 891px;
}
.Form-Box-Text-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 56px;
    cursor: pointer;
    width: 280px;
    margin-left: 10px;
}
  }
  @media (max-width: 1060px) {
    .Card-Main-Section {
    background-color: white;
    margin-top: 20px;
    height: 265px;
    width: 934px;
    border-radius: 28px;
    display: flex;
    padding: 15px;
    margin-top: 80px;
    justify-content: center;
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
    height: 57px;
    cursor: pointer;
    width: 260px;
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
    width: 840px;
}
.Form-Box-Text-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 56px;
    cursor: pointer;
    width: 243px;
    margin-left: 10px;
}
.NameBox {
    font-size: 14px;
  }
  }
  @media (max-width: 992px) {
        .Card-Main-Section {
    background-color: white;
    margin-top: 20px;
    height: 314px;
    width: 885px;
    border-radius: 28px;
    display: flex;
    padding: 15px;
    margin-top: 80px;
    justify-content: center;
}
    .NameBox {
    width: 300px;
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
.Form-Box-Text-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 56px;
    cursor: pointer;
    width: 250px;
    margin-left: 10px;
}

.Submit-Button {
    border: none;
    padding: 4px;
    border-radius: 8px;
    height: 57px;
    cursor: pointer;
    width: 270px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #1F3978;
}
 .disclaimer-text {
    font-size: 13px;
    margin-top: 15px;
    color: #203978;
    font-weight: 500;
    width: 793px;
}

  }
  @media (max-width:885px) {
 
 .disclaimer-text {
    font-size: 13px;
    margin-top: 15px;
    color: #203978;
    font-weight: 500;
    width: 614px;
}

  }
  @media (max-width:661px) {
    .Names-Form{
    display: flex;
   gap: 19px;
   justify-content: center;
   flex-direction: column;
   
    align-items: center;
    margin-top: 20px;
    width: 100%;
    
}
 .disclaimer-text {
  font-size: 4px;
  margin-top: 15px;
  margin: auto;
  color: #203978;
  font-weight: 500;
  width: 357px;
  text-align: center;
}

  }
  @media (max-width: 500px) {

.Card-Main-Section {

    height: 683px;
    width: 100%;
    border-radius: 0px;


}
.disclaimer-text {
    font-size: 10px;
margin-top: 15px;
    color: #203978;
    font-weight: 500;
    width: 340px;
}



  }
  @media (max-width: 400px) {
    .Names-Form{
    display: flex;
   gap: 19px;
   justify-content: center;
   flex-direction: column;
   
    align-items: center;
    margin-top: 20px;
    width: 100%;
    
}
.Form-Box-Text-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 5px;
    border-radius: 13px;
    height: 56px;
    cursor: pointer;
    width: 295px;
    margin-left: 10px;
}
.NameBox {
    width: 280px;
    height: 22px;
    font-size: 13px;
    border: none;
    padding-left: 3px;
    outline: none;
    color: black;
    font-weight: 500;
}
.disclaimer-text {
    font-size: 8px;

    color: #203978;
    font-weight: 500;
    width: 251px;
    
}

  }


  
`;