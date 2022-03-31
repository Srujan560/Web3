import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "react-bootstrap";
const LogoutButton = () => {
    const { logout, isAuthenticating } = useMoralis();
    const bsty = {
      marginLeft:"6vw", 
      border: ".5vh solid",
      borderRadius: 100, 
      width: "4vw", 
      height:"4vh", 
      fontSize:".75vw", 
      padding:0
    }
    return (
      <Button variant="outline-danger" style={bsty} onClick={() => logout()} disabled={isAuthenticating}>
        Logout
      </Button>
    )
  }
  export default LogoutButton;
