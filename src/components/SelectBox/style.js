import styled from "styled-components";


export const SelectStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
.Select-Box-container{
display: flex;
justify-content: center;
align-items: center;
}

.Text-Straight{
    display: flex;
  align-items: center;
  gap: 10px; 
  padding-top: 5px;
}
.Properties-Container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 6px;

}
 .Text {
    color: black;
    font-weight: 500;
    font-size: 15px;
    border-bottom: 1px solid #DADDE6;
    padding-bottom: 6px;
    width: 150px;
}
 .Select-Box {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #DADDE6;
    background-color: white;
    height: 360px;
    width: 207px;
    padding: 9px;
   
}
.Properties-Text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 5px;
    
}
.properties-title{
    color: #001D64; 
    font-size: 35px;
    margin-top: 33px;
    font-weight: 500;
}
.properties-subtitle{
    color: #63759F;
    font-size: 17px; 
      margin-top: 10px;
    font-weight: 500;
}
.Box-Gapping{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom:20px
}
.checkbox-wrapper {
  display: inline-block;
  cursor: pointer;
}

.checkbox {
  width: 20px; /* Size of the checkbox */
  height: 20px;
  background-color: #1F3978; /* Your color */
  border-radius: 50%;
  position: relative;
}

.checkbox.checked {
  /* Style for when the checkbox is checked */
}

.checkmark {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
}


@media (max-width:600px) {
  .properties-title{
    color: #001D64; 
    font-size: 26px;
    margin-top: 33px;
    font-weight: 500;
}
}

@media (max-width:400px) {
  .properties-title{
    color: #001D64; 
    font-size: 22px;
    margin-top: 33px;
    font-weight: 500;
}
.properties-subtitle{
    color: #63759F;
    font-size: 15px; 
      margin-top: 10px;
    font-weight: 500;
}
}
`;