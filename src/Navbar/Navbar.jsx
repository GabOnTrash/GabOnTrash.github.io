import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/globe.png";
import "./Navbar.css";

function Navbar() 
{
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navbar" className={menuOpen ? "open" : ""}>
            
            <div id="logo">
                <img src={logo} alt="Logo" />
                <p>Gabriele</p>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#about">About me</a></li>
                <li><a href="#skills">Dev skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/Gabriele_Armenise_CV_IT_ENG.zip" download>
                    Curriculum
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960" width="1.3rem" fill="currentColor">
                        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                    </svg>
                </a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
