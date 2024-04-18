import styled from "styled-components";


export const CardStyled = styled.div`
flex-wrap: wrap;
margin-top: 10px;
padding-top: 15px;


.Royal-Text-Container{
    display: flex;
    align-items: center;
    gap: 10px;
    text-align:center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}
.Feature-Button-Section{
    display: flex;
   align-items: center;
    flex-direction: column;
    gap: 10px;
}
.Feature-Button{
    width: 120px;
    height: 30px;
    background-color: #E1EAFF;
    color: #011D63;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 550;
    border: none;
    margin-top: 220px;
}
.Text-1{
    color: #003083;
    font-size: 15px;
    font-weight: 500;
}
.Text-2{
    color: #001D64;
    font-size: 42px;
    font-weight: 500;
}
.Text-3{
    color: #003083;
    font-size: 15px;
    font-weight: 500;
    width: 666px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width:700px) {
    .Text-3{
    color: #003083;
    font-size: 15px;
    font-weight: 500;
    width: 470px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Text-2{
    color: #001D64;
    margin-top: 10px;
    font-size: 29px;
    font-weight: 500;
}
.Feature-Button-Section{
    display: flex;
   align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
    justify-content: center;
}
  }
  @media (max-width:500px) {
    .Text-3{
    color: #003083;
    font-size: 15px;
    font-weight: 500;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Text-2{
    color: #001D64;
    margin-top: 10px;
    font-size: 21px;
    font-weight: 500;
}
.Feature-Button-Section{
    display: flex;
   align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 55px;
    justify-content: center;
}
  }
  @media (max-width:400px) {
    .Text-3{
    color: #003083;
    font-size: 15px;
    font-weight: 500;
    width: 285px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Text-2{
    color: #001D64;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
}
.Feature-Button-Section{
    display: flex;
   align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 0px;
    justify-content: center;
}
  }
`;