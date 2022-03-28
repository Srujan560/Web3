import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "react-bootstrap";
const LogoutButton = () => {
    const { logout, isAuthenticating } = useMoralis();
  
    return (
      <Button variant="outline-danger" onClick={() => logout()} disabled={isAuthenticating}>
        Logout
      </Button>
    )
  }
  export default LogoutButton;
