import { createContext, useState } from 'react'
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
import CreateAdmin from './components/CreateAdmin'
import axios from 'axios'
export const UserContext =  createContext()
function App() {
  axios.defaults.withCredentials = true;

  const [count, setCount] = useState(0)
const [user, setUser] = useState({})
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
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
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route path="/create-admin" element={<CreateAdmin />} />
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App
