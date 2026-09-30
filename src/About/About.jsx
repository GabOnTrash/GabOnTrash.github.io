import './about.css'

function About()
{
    return (
        <section id="about" className="container hairline-bottom">
            <div className="grid-12 about-grid">
                
                <div className="about-wayfinding">
                    <span className="section-number">01</span>
                    <h2 className="section-title">ABOUT</h2>
                </div>

                <div className="about-content">
                    <p className="about-text">
                        I am a {new Date().getFullYear() - 2008} years old Computer Science student from Italy. 
                        My journey in software development is driven by a focus on structural integrity 
                        and efficient problem solving.
                    </p>
                    <p className="about-text">
                        I specialize in creating clean architectures and performant applications, 
                        primarily working with C++, Python, Java, and modern web technologies. 
                        My goal is to build software that is both robust under the hood and 
                        intuitive on the surface.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;