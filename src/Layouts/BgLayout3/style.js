import styled from "styled-components";
import bgImage from "../../assets/images/bg2.png";

export const WelStyle = styled.div`
  height: 100%;
  .Well-Menu-Section {
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    display: flex;

    flex-direction: column;

    width: 100%;
    height: 665px;
  }
`;