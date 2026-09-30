import "./footer.css"

function Footer()
{
    return (
        <footer id="contact" className="container hairline-top">
            <div className="grid-12 footer-wayfinding">
                <span className="section-number">03</span>
                <h2 className="section-title">CONTACT</h2>
            </div>
            
            <div className="grid-12 footer-bottom">
                <div className="footer-links">
                    <a href="mailto:gabrielearmenise08@gmail.com" className="meta-link">Email</a>
                    <a href="https://github.com/gabontrash" target="_blank" rel="noreferrer" className="meta-link">GitHub</a>
                    <a href="https://www.instagram.com/_gabrielearmenise" target="_blank" rel="noreferrer" className="meta-link">Instagram</a>
                    <a href="/Gabriele_Armenise_CV.pdf" target="_blank" download className="meta-link" style={{color: "var(--color-accent)"}}>Download CV</a>
                </div>
                
                <div className="footer-copyright">
                    <span className="meta-label">
                        &copy; {new Date().getFullYear()} Gabriele Armenise. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;