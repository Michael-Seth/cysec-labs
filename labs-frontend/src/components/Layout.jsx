import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useEffect, useContext } from 'react'
import { UserContext } from '../App';
const Layout = ({ children }) => {
    const [user, setUser] = useContext(UserContext)
    const getUser = async () => {
    try {
        const resp = await axios.get("/users/user", {
          headers: {

       
            "authorization": JSON.parse(sessionStorage.getItem('token'))?.token,
          },
        }); 
      console.log(resp.data)
      setUser(resp.data)
   
        
        //if user is not logged in no data will be here, so you can redirect them to anywhere.
    } catch (error) {
        console.log(error)
    }
    }
    

    useEffect(() => {
        getUser()
    }, [])
  return (
    <>
    {children}
      </>
  )
}

export default Layout