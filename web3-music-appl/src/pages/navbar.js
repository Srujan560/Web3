import React from "react";
import {BrowserRouter, Link } from "react-router-dom";
import {Nav, Navbar, Container} from "react-bootstrap";
import Home from "./home";
import { Button } from "react-bootstrap";
import Logout from "./Logout";

const divStyle = {
  navbar: {
    
    paddingLeft: ".5em",
    paddingRight: ".5em"
  }
  
};

const Layout = () => {
  return (
    <Container style={{paddingLeft: "0px",paddingRight: "0px"}} fluid >
      <Navbar style={
        {paddingLeft: ".75em", 
        paddingRight: ".75em", 
        paddingTop: ".75em",
        paddingBottom: ".75em",
        marginLeft: "0px",
        marginRight: "0px"
        }} bg="dark" variant="dark">
        <Navbar.Brand href="/">Web3 Music Player</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
          </Nav>
          <Logout />
        </Navbar>
      </Container>
   
    /*
    <nav class="navbar navbar-dark bg-dark">
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
        </nav>
*/
        
  )
};

export default Layout;