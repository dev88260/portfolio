import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;