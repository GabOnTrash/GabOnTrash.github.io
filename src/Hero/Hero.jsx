import React from "react";
import "./hero.css"; 

export default function StartSection() 
{
    return (
        <section id="hero">
            <div className="blob-container">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
                <div className="blob blob-4"></div>
                <div className="noise-overlay"></div>
            </div>

            <div id="hero-content">
                <div className="glass-panel">
                    <div className="badge">Software Developer</div>
                    <h1 className="title">
                        Gabriele <span className="highlight">Armenise</span>
                    </h1>
                    <p className="description">
                        Web Personal Portfolio made with HTML, CSS and React. 
                        Clean design, smooth animations and focus on performance.
                    </p>
                </div>
            </div>

            <div id="scroll-section">
                <a href="#about" className="mouse-scroll">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>Scroll to view</span>
                </a>
            </div>
        </section>
    );
}