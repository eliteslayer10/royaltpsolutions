import React from 'react'

import Navbar from '../../components/navbar/index'
import Footer from "../../components/footer/footer";
import BgLayout7 from "../../Layouts/BgLayout7/BgLayout7";
import { HomeStyled } from "./style"
import TextBlog from '../../components/Text-For-Blog/TextBlog';

function index() {
  return (
    <>
      <BgLayout7>
        <Navbar />
        <HomeStyled>
          <div className="Header-Section">
            <span className="Header-Title">The Blog</span>
            <span className="Header-Text">Stay informed, inspired, and engaged with our blog. Dive into a wealth of articles, insights, and resources covering topics ranging from industry trends and market updates to helpful tips for homeowners. Explore our blog to discover valuable content that empowers you to make informed decisions and navigate the real estate landscape with confidence.</span>
          </div>

          <TextBlog />

          <Footer />
        </HomeStyled>
      </BgLayout7>
    </>
  )
}

export default index