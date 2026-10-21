import { useState } from 'react'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
    <main>
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </main>
    </> 
  );
}

export default App
