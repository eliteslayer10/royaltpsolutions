import styled from "styled-components";


export const HomeStyled = styled.div`
display: flex;

flex-direction: column;

.Header-Section{
   display: flex;
   flex-direction: column;
   justify-content: center;
    /* width: 23%; */
    /* align-items: center; */
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
margin-top: 15px;

width: 401px;
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

width: 229px;
}
}
`;
export const AboutFooter = styled.div`
  background-color: #001D64;
 margin-top: 40px;
  height: 490px;


  .Footer-Main-Section {
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-wrap: wrap;
    .Footer-Container {
      display: flex;
      justify-content: center;
     
      margin-top: 70px;
      gap: 55px;
      padding-bottom: 90px;
      border-bottom: 2px #92989b solid;
    }
    .Copy-Right-Section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 30px;
      width: 70.5%;
      .Copy-Right-Text {
        font-size: 17px;
        color: #c5c8c9;
      }
    }
    .Public-Title1{
      font-size: 20px;
      font-weight: 500;
      color: white;
    }
    .ContactLinks {
      display: flex;
      flex-direction: column;
      padding-left: 10px;

      .Contact-Link-Text {
        font-size: 17px;
width: 430px;
        color: #abafb1;
      }
      .Social-Logo-Section {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .Social-Logo {
          width: 40px;
          color: whitesmoke;
          height: 20px;
        }
      }
    }
    .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: #abafb1;
        }
      }
    }
    .Contact-Side {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
align-items: flex-start;
gap: 10px;
      .Contact-Text-Section {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .Contact-Title {
        font-size: 20px;
          color: white;
         
          font-weight: 500;
      }
      .Contact-Text {
        font-size: 16px;
        color: #BFC7D8;
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .Number {
          font-size: 15px;
          color: #BFC7D8;
white-space: nowrap;
          .Number-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: #BFC7D8;
          .Email-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
      }
    }
  }


  @media all and (max-width: 1100px) {
    
    height: 516px;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;

      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
        padding-bottom: 90px;
        border-bottom: 2px #92989b solid;
      }
      .Copy-Right-Section {
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        margin-top: 30px;
        width: 83.5%;
        .Copy-Right-Text {
          font-size: 17px;
          color: #c5c8c9;
        }
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .Number {
          font-size: 13px;
          color: #BFC7D8;
white-space: nowrap;
          .Number-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: #BFC7D8;
          .Email-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;

        .Contact-Link-Text {
          font-size: 16px;

          color: #abafb1;
        }
        .Social-Logo-Section {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .Social-Logo {
            width: 40px;
            color: whitesmoke;
            height: 20px;
          }
        }
      }
      .ProductSection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .PublicMainSection {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        align-items: flex-start;
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }
     
    }
 
  }
  @media all and (max-width: 960px) {
    height: 620px;
   
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;

      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
        padding-bottom: 90px;
        border-bottom: 2px #92989b solid;
      }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
        width: 83.5%;
        .Copy-Right-Text {
          font-size: 17px;
          color: #c5c8c9;
        }
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .Number {
          font-size: 13px;
          color: #BFC7D8;
white-space: nowrap;
          .Number-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: #BFC7D8;
          .Email-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;

        .Contact-Link-Text {
          font-size: 16px;
width: 330px;
          color: #abafb1;
        }
        .Social-Logo-Section {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .Social-Logo {
            width: 40px;
            color: whitesmoke;
            height: 20px;
          }
        }
      }
      .ProductSection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .PublicMainSection {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        align-items: flex-start;
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }
     
    }
 
  }
  @media all and (max-width: 672px) {
    margin-top: 200px;
    height: 915px ;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: #abafb1;
        }
      }
    }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;
        border-top: 1px solid #92989b;

        .Copy-Right-Text {
          font-size: 17px;
          padding-top: 12px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .Contact-Link-Text {
          font-size: 17px;
width: 330px;
display: flex;
text-align: center;
          color: #abafb1;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: whitesmoke;
          margin-bottom: 7px;
          padding-right: 10px;
        }
        .Contact-Text {
          font-size: 17px;
          color: #abafb1;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 270px;
          gap: 5px;
        }
      }
    }
    .Number {
          font-size: 13px;
          color: #BFC7D8;
white-space: nowrap;
  
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: #BFC7D8;
        
        }
  }
  @media all and (max-width: 540px) {
    margin-top: 200px !important;
    height: 907px ;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: #abafb1;
        }
      }
    }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;
        border-top: 1px solid #92989b;

        .Copy-Right-Text {
          font-size: 17px;
          padding-top: 12px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .Contact-Link-Text {
          font-size: 17px;
width: 330px;
display: flex;
text-align: center;
          color: #abafb1;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: whitesmoke;
          margin-bottom: 7px;
          padding-right: 48px;
        }
        .Contact-Text {
          font-size: 17px;
          color: #abafb1;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 270px;
          gap: 5px;
        }
      }
    }
    .Number {
          font-size: 13px;
          color: #BFC7D8;
white-space: nowrap;
  
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: #BFC7D8;
        
        }
  }
  @media all and (max-width: 380px) {
    margin-top: 90px;
    height: 1000px;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: #abafb1;
        }
      }
    }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;
        border-top: 1px solid #92989b;

        .Copy-Right-Text {
          font-size: 17px;
          padding-top: 12px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .Contact-Link-Text {
          font-size: 17px;
width: 277px;
display: flex;
text-align: center;
          color: #abafb1;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: whitesmoke;
          margin-bottom: 7px;
          padding-right: 43px;
        }
        .Contact-Text {
          font-size: 17px;
          color: #abafb1;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 270px;
          gap: 5px;
        }
      }
    }
    .Number {
          font-size: 13px;
          color: #BFC7D8;
white-space: nowrap;
  
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: #BFC7D8;
        
        }
  }
 
  
`;