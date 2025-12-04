import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen text-white selection:bg-neon-purple selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;