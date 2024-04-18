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

width: 440px;
}


@media (max-width: 550px) {
    .Header-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0px;
    text-align: center;
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