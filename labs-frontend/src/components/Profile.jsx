import axios from 'axios';
import React, { useRef } from 'react'
/*
this is just an example of when you need to send the token you store in the cookies

*/
import Cookies from 'js-cookie';


const Profile = () => {
    
    const emailRef = useRef("");
    
    const usernameRef = useRef("");
    const firstnameRef = useRef("");
    const lastnameRef = useRef("");

    const user = JSON.parse(Cookies.get('user'))


    const handleSubmit = async (e) => {
         e.preventDefault();
         const data = {
           firstname: firstnameRef.current.value,
           lastname: lastnameRef.current.value,
           username: usernameRef.current.value,
           email: emailRef.current.value,
          
         };
        try {
            const resp = await axios.post(
              "http://localhost:8081/api/v1/users/update-profile",
              { updateData: data },
              {
                headers: {
                  'authorization': Cookies.get("token"),
                },
              }
            ); 
            
          console.log(resp.data)
          window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <form
        action=""
        className="w-2/5 m-auto p-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="First Name"
          ref={firstnameRef}
          defaultValue={user.firstname}
        />
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Last Name"
          ref={lastnameRef}
          defaultValue={user.lastname}
        />
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Email Address"
          ref={emailRef}
          defaultValue={user.email}
        />
    
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Username"
          ref={usernameRef}
          defaultValue={user.username}
        />
        
        <button className="bg-gray-900 text-white px-3">Register</button>
      </form>
    </div>
  );
}

export default Profile