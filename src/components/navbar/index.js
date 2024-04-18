import React, { useState } from "react";
import { NavbarSection } from "./style";

import navlogo from "../../assets/images/navlogo.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

function Navbar() {
    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <NavbarSection>
            <nav className="navbar">
                <div className="container">
                    <img className="nav-Logo" src={navlogo} alt="" onClick={() => navigate("/")} />
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <div className="navLinks">
                            <span
                                className="NavLink"
                                onClick={() => navigate("/how-it-work")}
                            >
                                How it works
                            </span>
                            <span className="NavLink" onClick={() => navigate("/blog")}>Pricing</span>
                            <span className="NavLink" onClick={() => navigate("/testimonials")}>Testimonials</span>
                            <span className="NavLink" onClick={() => navigate("/about")}>About Us </span>
                            <span className="NavLink" onClick={() => navigate("/contact")}>Contact </span>
                            // <span className="NavLink" >Privacy Policy </span>
                            <button className="Quote-Button" onClick={() => navigate("/quote")} >Request a quote</button>
                        </div>


                    </div>

                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                </div>
            </nav>
        </NavbarSection>
    );
}

export default Navbar;
