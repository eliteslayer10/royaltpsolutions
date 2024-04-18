import styled from "styled-components";

export const NavbarSection = styled.div`
   margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    margin: 0;
    padding: 0;
  }

  .nav-Logo {
    width: 109px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
 justify-content: space-around;
  }

  .navLinks {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    font-size: 14px;
    align-items: center;
    color: #7A7B7B;
    gap: 23px;
    font-weight: 500;


    .NavLink:hover {
    cursor: pointer;
      
      color: white;
    
    }
  }

  .navbar {
    // height: 60px;
    background-color: transparent;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .menu-icon {
    display: none;
  }

  .nav-elements ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  .nav-elements ul li:not(:last-child) {
    margin-right: 60px;
  }

  .nav-elements ul a {
    font-size: 16px;
    font-weight: 400;
    color: #2f234f;
    text-decoration: none;
  }

  .nav-elements ul a.active {
    color: #574c4c;
    font-weight: 500;
    position: relative;
  }

  .nav-elements ul a.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #574c4c;
  }
  .Quote-Button{
display: flex;
align-items: center;
justify-content: center;
border: none;
width: 140px;
height: 35px;

font-weight: 600;
color: #203977;
border-radius: 6px;
  }
  .Quote-Button:hover{
background-color: #1F3978;
color: white;

  }
  @media (max-width: 1140px) {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    gap: 31px;
    }
  }
  @media (max-width: 1000px) {
   
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    gap: 23px;
}
    .navLinks {
 display: flex;
 justify-content: center;
 white-space: nowrap;
 font-size: 14px;
 align-items: center;
 color: #7A7B7B;
 gap: 13px;



    }
  }
  @media (max-width: 1070px) {

    .container {
      display: flex;

      align-items: center;
      width: 100%;
    gap: 23px;
}
    .Quote-Button{
display: flex;
align-items: center;
justify-content: center;
border: none;
width: 110px;
height: 35px;

font-weight: 600;
color: #203977;
border-radius: 6px;
  }

 
  }
  @media (max-width: 920px) {
    .menu-icon {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 60px;
    color: white;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    gap: 23px;
}
    .nav-elements ul li:not(:last-child) {
      margin-right: 30px;
    }
    .navbar {
      // height: 60px;
      background-color: transparent;
      position: relative;
      width: 100%;
      height: 90px;
    }
    .navLinks {
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 35px;
      color: #7A7B7B;
    }
     .Quote-Button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 140px;
    height: 35px;
    font-weight: 600;
    color: #203977;
    border-radius: 6px;
}
    .nav-Logo {
      width: 102px;
     
    }
    .nav-elements {
      display: flex;
      flex-direction: column !important;
      position: absolute;
      right: 0;
      top: 104px;
   display: n;
      width: 0px;
      height: 100vh;
      transition: all 0.3s ease-in;
      overflow: hidden;
    }

    .nav-elements.active {
      display: flex;
    flex-direction: column !important;
    position: absolute;
    right: 0;
    top: 1px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background-color: hsla(228, 24%, 6%, .2);
    width: 100%;
    height: 100vh;
    transition: all 0.3s ease-in;
    overflow: hidden;
    text-align: center;
    justify-content: center;
    }

    .nav-elements ul {
      display: flex;
    }

    .nav-elements ul li {
      margin-right: unset;
      margin-top: 22px;
    }
  }
  @media (max-width: 400px) {
    .navbar {
    background-color: transparent;
  }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0px;
    }
    .nav-Logo {
      width: 102px;
    }
  }
`;
