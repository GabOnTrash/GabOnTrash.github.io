import { useState } from 'react'
import './App.css'

import About from './About/About.jsx'
import Footer from './Footer/Footer.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Skills from './Skills/Skills.jsx'
function App() 
{
  return (
      <>
          <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Footer/>
      </>
  )
}

export default App;