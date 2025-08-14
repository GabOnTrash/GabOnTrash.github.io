import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/globe.png";
import cv from '../documents/CV_Studente.pdf'
import "./Navbar.css";

function Navbar() 
{
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navbar">
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
                <li><a href={cv} target="_blank" rel="noopener noreferrer">Curriculum</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
