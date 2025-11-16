import "./footer.css"

import githubIcon from "/svg/github.svg";
import instagramIcon from "/svg/instagram.svg";
import gmailIcon from "/svg/gmail.svg"; 

function Footer()
{
    return (
        <footer id="footer">
            <div id="contact">
                <span id="github">
                    <a href="https://github.com/gabontrash" target="_blank">
                        <img src={githubIcon} alt="GitHub"/>GitHub
                    </a>
                </span>
        
                <span id="instagram">
                    <a href="https://www.instagram.com/_gabrielearmenise" target="_blank">
                        <img src={instagramIcon} alt="Instagram"/>Instagram
                    </a>
                </span>
        
                <span id="gmail">
                    <a href="mailto:gabrielearmenise08@gmail.com" target="_blank">
                        <img src={gmailIcon} alt="Gmail"/>Gmail
                    </a>
                </span>
            </div>
        
            <div id="copyright">
                &copy; {new Date().getFullYear()} Gabriele Armenise. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;