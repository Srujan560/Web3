import React from "react";
import {Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/upload">upload</Link>
          </li>
        </ul>
    </div>
  )
};

export default Layout;