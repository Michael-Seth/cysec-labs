import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Verify from './components/Verify'
import Profile from './components/Profile'
import Layout from './components/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/verify"
          element={
            <Layout>
              <Verify />
            </Layout>
          }
        />
        <Route path="/profile" element={
          <Layout>

            <Profile />
          </Layout>
        
        } />
      </Routes>
    </div>
  );
}

export default App
