import axios from 'axios'
import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'
const Login = () => {
    const usernameRef = useRef('')
    const passRef = useRef('')
const navigate =useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { username: usernameRef.current.value, password: passRef.current.value }
        try {
            
            const resp = await axios.post('/users/login', { user: data })
            console.log(resp)
            if (resp.status === 200) {
       
              sessionStorage.setItem("token", JSON.stringify(resp.data))
                
                window.location.href = '/'

          //redirect here
             //i changed to session storage because i want the cookie to expire each time he closes the browser.
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div>
          

          <form action="" className='w-2/5 m-auto p-8 shadow-lg' onSubmit={handleSubmit}>
              <input type="text"  className='w-full border outline-none mb-2 text-lg pl-2' placeholder='Username' ref={usernameRef}/>
              <input type="password" className='w-full border outline-none mb-2 text-lg pl-2' placeholder='Password' ref={passRef}/>
              <button className='bg-gray-900 text-white px-3'>Login</button>
          </form>
    </div>
  )
}

export default Login