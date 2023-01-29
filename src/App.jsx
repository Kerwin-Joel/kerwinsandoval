import React from 'react'
import { Nav } from './components/nav/Nav';
import { Hero } from './components/hero/Hero';
import { Project } from './components/projects/Project';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
