import './App.css'

import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'
import Footer from './Footer/Footer.jsx'

function App() 
{
  return (
      <div className="app-wrapper">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects />
          <Footer/>
      </div>
  )
}

export default App;