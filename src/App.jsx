import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Parks from './components/Parks'
//import { checkSession } from '../'
import About from './components/About'
import ThemeParks from './components/ThemeParks'

const App = () => {
  return (
    <div className="App">
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/parks" element={<Parks user={user} />} /> */}
          <Route path="/parks" element={<Parks />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Roller Coders. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
