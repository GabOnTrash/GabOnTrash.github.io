import './description.css'

function Description()
{
    return(
        <div id="text">
            <h4>Hello!<br/>I'm Gabriele</h4>
            <p>
            I'm a {new Date().getFullYear() - 2008} years old student, attending "Dell'Erba" school in Castellana Grotte 
            where I'm studying Computer Science. I have a passion for programming and 
            software development. I love creating new projects and learning new technologies.
            I have experience in various programming languages, and I'm always open to learn more.
            I was born in Putignano (Ba) and I now know programming languages like C, C++, Python, Java and also
            a little bit of the basics of php and Javascript (needed for this PortFolio)...
            </p>
        </div>
    );
}

export default Description;