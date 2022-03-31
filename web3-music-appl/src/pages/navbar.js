import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, Container} from "react-bootstrap";

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
            <Nav.Link href="/MusicPlayer">MusicPlayer</Nav.Link>
          </Nav>
          <Logout />
        </Navbar>
      </Container>
   
        
  )
};

export default Layout;