import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, Container} from "react-bootstrap";
import styles from '../styles/style.module.css'
import { Button } from "react-bootstrap";
import Logout from "./Logout";
import Search from "./search"

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
        {paddingLeft: "1vw", 
        paddingRight: "2vw", 
        paddingTop: ".5vh",
        paddingBottom: ".5vh",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "1vw"
        }} bg="dark" variant="dark">
        <Navbar.Brand href="/" style={
          {paddingLeft: "1vw", 
          paddingRight: "3vw", 
          fontSize: "2vw"
          }}>
          Web3 Music Player
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Exlpore" style={{paddingLeft: "1vw"}}>Exlpore</Nav.Link>
            <Nav.Link href="/About"  style={{paddingLeft: "1vw"}}>About</Nav.Link>
            <Nav.Link href="/profile"  style={{paddingLeft: "1vw"}}>Profile</Nav.Link>
            <Nav.Link href="/upload" style={{paddingLeft: "1vw"}}>Upload</Nav.Link>
            <Nav.Link href="/MusicPlayer" style={{paddingLeft: "1vw"}}>MusicPlayer</Nav.Link>
            <Nav.Link href="/ButtonPlayer" style={{paddingLeft: "1vw"}}>ButtonPlayer</Nav.Link>
          </Nav>
          <Search />
          <Logout />
        </Navbar>
      </Container>
   
        
  )
};

export default Layout;