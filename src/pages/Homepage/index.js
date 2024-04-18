import React from "react";
import Navbar from "../../components/navbar/index";
import BgLayout from "../../Layouts/BgLayout1/BgLayout";
import { HomeStyled } from "./style"
import Form from "../../components/LoginForm/index";
import CardWithText from "../../components/CardWithText/CardWithText";
import SelectBox from "../../components/SelectBox/SelectBox";
import Testimonals from "../../components/Testimonals/testi";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/Contact-Form/ContactForm"
function Homepage() {
  return (
    <>
      <BgLayout>
        <Navbar />
        <HomeStyled>
          <div className="Header-Section">
            <span className="Header-Title">Getting A Quote</span>
            <span className="Header-Text">No hassles. No obligation. No commitment. Complete Form & A
              Property Specialist Will Contact You</span>
          </div>
          <Form />
          <CardWithText />
          <SelectBox />
          <Testimonals />
          <ContactForm />
          <Footer />
        </HomeStyled>
      </BgLayout>
    </>
  );
}

export default Homepage;
