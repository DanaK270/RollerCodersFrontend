import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Parks from './components/Parks'
import Register from '../pages/Register'
import Login from '../pages/Login'
//import { checkSession } from '../'
import About from './components/About'
import ThemeParks from './components/ThemeParks'
import Form from './components/Form'

const App = () => {
  const [user, setUser] = useState(null)
  const themes = {
    park: 'one',
    name: 'three',
    location: 'cc',
    country: 'ccc',
    type: '2',
    timezone: 'ff',
    description: 'ffff',
    images: 'null'
  }
  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  // useEffect(() => {
  //   const checkToken = async () => {
  //     const user = await checkSession()
  //     setUser(user)
  //   }

  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     checkToken()
  //   }
  // }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/parks" element={<Parks user={user} />} /> */}
          <Route path="/parks" element={<Parks />} />
          <Route path="/addPark" element={<Form />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Roller Coders. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
