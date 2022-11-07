
import './App.css';

import React from 'react'
import Intro from './components/intro/Intro';
import About from './components/About/about';
import Skills from './components/Skills/Skills';
import Motivation from './components/Motivation/Motivation';
import SovTech from './components/SovTech/SovTech';

const App = () => {
  return (
    <div> 
      <Intro/>
       <About/>
       <Skills/>
       <Motivation/>
       <SovTech/>
    </div>
  )
}

export default App
