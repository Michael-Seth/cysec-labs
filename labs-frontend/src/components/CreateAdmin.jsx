import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
const CreateAdmin = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const usernameRef = useRef("");
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    try {
      const resp = await axios.post(
        "http://localhost:8081/api/v1/manage/create-admin",
        {
          user: data,
        },
        
      );
      console.log(resp.status);

      if (resp) {
        navigate("/verify");
      }
      if (resp.status === 201) {
        console.log(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        />
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Last Name"
          ref={lastnameRef}
        />
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Email Address"
          ref={emailRef}
        />
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Username"
          ref={usernameRef}
        />
        <input
          type="password"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Password"
          ref={passRef}
        />
        <button className="bg-gray-900 text-white px-3">Register</button>
      </form>
    </div>
  );
};

export default CreateAdmin;
