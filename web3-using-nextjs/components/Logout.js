
import { useMoralis } from "react-moralis";
// import { Button } from "react-bootstrap";
const LogoutButton = () => {
    const { logout, isAuthenticating } = useMoralis();
  
    return (
      // <Button variant="outline-danger" style={{border: ".5vh solid",
      // borderRadius: 100}} onClick={() => logout()} disabled={isAuthenticating}>
      //   Logout
      // </Button>
      <button onClick={logout} disabled={isAuthenticating}>Logout</button>
    )
  }
  export default LogoutButton;
