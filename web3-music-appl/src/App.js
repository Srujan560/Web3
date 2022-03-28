import styles from "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/profile";
import Upload from "./pages/upload";
import UploadMusic from "./components/uploadMusic";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Navbar from "./pages/navbar";
import { useMoralis } from "react-moralis";
import Home from "./pages/home";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';



const buttonCenter = {
    width: "30vw",
    height: "10vh",
    fontSize: "40%",
    marginLeft: "35vw",
    marginRight: "35vw",
    marginTop: "45vh",
    marginBottom: "45vh",
    padding: "0px"
  };

  
function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  console.log("Hello world");
  console.log(user);
  // const userPerf = Moralis.Object.extend("_users");
  if (!isAuthenticated) {
    return (
      <div style={{height:"100vh", backgroundColor:"bisque"}}>
          <Button style={buttonCenter} variant="outline-success" onClick={() => authenticate()}>Login with MetaMask</Button>
      </div>
    );
  }
  return (
    <body style={{backgroundColor:"bisque", height:"100vh"}}>
      <div>
        <h4 id="addr">Welcome User: {user.get("username")}</h4>
        
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/upload" exact element={<Upload />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="app">
        <Walletcard/>
      </div> */}
      
     
    </body>
  );
}

export default App;
