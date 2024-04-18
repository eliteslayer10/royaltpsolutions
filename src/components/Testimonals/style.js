import styled from "styled-components";

export const TestiSide = styled.div`

  .Test-Menu-Section {
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Test-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Test-Title-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* width: 80%; */
    gap: 10px;
    margin-bottom: 31px;
    margin-top: 94px;
}
.Test-Title{
  color: #001D64;
  font-size: 35px;
}
.Test-Text{
  color: #001D64;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 20px;
}
  .Test-Button {
    display: flex;
    justify-content: center;
    gap: 10px;

    .arrows {
      height: 27px;
      width: 25px;
      border: 1px #4eb4ff solid;
      border-radius: 50%;
      padding: 5px;
      color: #4eb4ff;
    }
  }
  .Star-Section {
    display: flex;
    gap: 1px;
    color: #ffa500;
  }
  .Box-Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }

  .Box-Section-menu {
    display: flex;
    flex-direction: column;
    width: 351px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;
    height: 332px;
   
  }
  .Box-Section-menu:hover {
 background-color: #001D64;
 color: white;
 .Box-Text {
      
      color: white;
     
    }
    
  }
  .Box-Text-Section {
    width: 390px;
    
    .Box-Text {
      font-size: 14px;
      color: #64748b;
      width: 336px;
    }
  }

  .Box-Image {
    display: flex;
    gap: 10px;
    .Box-Image1 {
      width: 63px;
    }
    .Box-Person {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .Person-Name {
        font-size: 19px;
        font-weight: 500;
      }
      .Cbo {
        font-size: 17px;
        color: #64748b;
      }
    }
  }
  @media (max-width:1240px) {
    .Box-Section-menu {
    display: flex;
    flex-direction: column;
    width: 325px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;
    height: 367px;
   
  }
  .Box-Text-Section {
    width: 326px;
    .Box-Text {
      font-size: 17px;
      color: #64748b;
      width: 326px;
    }
  }
  
  
  }
  @media (max-width:901px) {
    .Box-Section-menu {
    display: flex;
    flex-direction: column;
    width: 320px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;
    height: 367px;
   
  }
  .Box-Text-Section {
    width: 326px;
    .Box-Text {
      font-size: 17px;
      color: #64748b;
      width: 326px;
    }
  }
  
  
  }
  @media (max-width:400px) {
     .Box-Section-menu {
    display: flex;
    flex-direction: column;
    width: 289px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;
    height: 389px;
}
  .Box-Text-Section {
    width: 285px;
    .Box-Text {
      font-size: 17px;
      color: #64748b;
      width: 285px;
    }
  }
  
  
  }
`;
