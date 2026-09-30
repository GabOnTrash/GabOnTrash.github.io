import React from "react";
import "./hero.css"; 

export default function Hero() 
{
    return (
        <section id="hero" className="container grid-12 hairline-bottom">
            <div className="hero-statement">
                <h1 className="hero-title">Gabriele<br/>Armenise</h1>
                <p className="hero-subtitle">Software Developer</p>
            </div>
            
            <div className="hero-metadata">
                <div className="meta-block">
                    <span className="meta-label">ROLE</span>
                    <span className="meta-value">Software Developer</span>
                </div>
                <div className="meta-block">
                    <span className="meta-label">BASED IN</span>
                    <span className="meta-value">Castellana Grotte (BA), Italy</span>
                </div>
                <div className="meta-block">
                    <span className="meta-label">FOCUS</span>
                    <span className="meta-value">C++, Python, Rust</span>
                </div>
                <div className="meta-block">
                    <span className="meta-label">STATUS</span>
                    <span className="meta-value">Open to work</span>
                </div>
            </div>
        </section>
    );
}