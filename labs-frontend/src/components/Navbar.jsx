import React from "react";
import { Link } from "react-router-dom";
import checkAdmin from "../checkAdmin";
import axios from "axios";
const Navbar = () => {
  const handleLogout = async () => {
  try {
    const resp = await axios.get('/users/logout')
    console.log(resp)
    if (resp.status === 200) {
      sessionStorage.clear()
    }
  } catch (error) {
    
  }
}
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex gap-4 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>

        {checkAdmin() && <Link to="/profile">Admin Profile</Link>}
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
