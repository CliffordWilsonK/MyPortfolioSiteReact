import React from 'react';
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;