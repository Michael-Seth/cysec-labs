import axios from 'axios'
import React, { useRef } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const usernameRef = useRef('')
    const passRef = useRef('')
const navigate =useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { username: usernameRef.current.value, password: passRef.current.value }
        try {
            
            const resp = await axios.post('http://localhost:8081/api/v1/users/login', { user: data })
            console.log(resp)
            if (resp.status === 200) {
                console.log(resp.data);
                navigate('/')

              Cookies.set("token", resp.data.token, {
                secure: true,
                expires: resp.data.tokenExpiryTime,
                path: "/",
              });
              
          
              /*
                you can also  store all data sent by the server side with cookies
                 Cookies.set('token', resp.data, { secure: true, path: "/" })
                 you can also store your redux state here.


                 
                */
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