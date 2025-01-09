import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom'

const NaveBar = () => {
  return (
    <nav>
        <h1>iDart</h1>
        <ul>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/user">User</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/username">User Name</Link>
        </ul>
    </nav>
  );
}

export default NaveBar;