import Carousel from './Carousel/Carousel.jsx';
import Description from './Description/Description.jsx'
import './about.css'

function About()
{
    return (
        <div id="about">
            <div id="name">
                <span>ABOUT MYSELF</span>
            </div>
        
            <div id="content">
                <Description/>
                <Carousel/>
            </div>
        </div>
    );
}

export default About;