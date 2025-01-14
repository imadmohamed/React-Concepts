import React from 'react'
import "./NavBar.css";
import { Link, useNavigate } from 'react-router-dom'

const NaveBar = () => {
  const navigate = useNavigate()

  const handleChange = () => {
    navigate("/user");
  }

  return (
    <nav>
        <h1>iDart</h1>
        <ul>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/user">User</Link>
            {/* <li onClick={handleChange}>user</li> */}
            <Link to = "/contact">Contact</Link>
            <Link to = "/username">User Name</Link>
        </ul>
    </nav>
  );
}

export default NaveBar;