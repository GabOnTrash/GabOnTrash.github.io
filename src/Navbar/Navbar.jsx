import { useState } from "react";
import "./navbar.css";
 
function Navbar() 
{
    return (
        <header id="navbar-wrapper">
            <nav id="navbar" className="container grid-12">
                <div className="nav-brand">
                    <a href="#">Gabriele Armenise</a>
                </div>

                <div className="nav-links-wrapper">
                    <ul className="nav-links">
                        <li><a href="#about"><span className="nav-index">01</span> About</a></li>
                        <li><a href="#projects"><span className="nav-index">02</span> Projects</a></li>
                        <li><a href="#contact"><span className="nav-index">03</span> Contact</a></li>
                        <li><a href="/Gabriele_Armenise_CV.pdf" target="_blank" download><span className="nav-index">04</span> CV</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;
