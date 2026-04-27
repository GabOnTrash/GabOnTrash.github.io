import Carousel from './Carousel/Carousel.jsx';
import Description from './Description/Description.jsx'
import './about.css'

function About()
{
    return (
        <section id="about">
            <div className="about-bg">
                <div className="about-blob blob-blue"></div>
                <div className="about-blob blob-purple"></div>
            </div>

            <div className="about-header">
                <span className="section-badge">Discover</span>
                <div className="title-divider">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                </div>
            </div>

            <div id="content">
                <Description/>
                <Carousel/>
            </div>
        </section>
    );
}

export default About;