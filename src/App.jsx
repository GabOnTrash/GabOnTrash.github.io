import { useState } from 'react'
import './App.css'

import About from './About/About.jsx'
import Footer from './Footer/Footer.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Projects from './Projects/Projects.jsx'

function App() 
{
  return (
      <>
          <Navbar/>
          <Hero/>
          <About/>
          <Projects />
          <Footer/>
      </>
  )
}

export default App;