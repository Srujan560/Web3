import styles from "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/profile";
import Upload from "./pages/upload";
// import UploadMusic from "./components/uploadMusic";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Navbar from "./pages/navbar";
import { useMoralis } from "react-moralis";
import Home from "./pages/home";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import MusicPlayer from "./MusicPlayer";
import Search from './pages/search';
//import style from "./CSS/login.css"

const buttonCenter = {
    width: "30vw",
    height: "10vh",
    fontSize: "4vh",
    marginLeft: "35vw",
    marginRight: "35vw",
    marginTop: "10vh",
    marginBottom: "45vh",
    padding: "0px",
    border: "1vh solid",
    borderRadius: 100,
    fontFamily: 'Inconsolata'
  };

  
function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  console.log("Hello world");
  console.log(user);
  // const userPerf = Moralis.Object.extend("_users");
  if (!isAuthenticated) {
    return (
      <div style={{height:"100vh", width:"100vw", backgroundColor:"bisque", paddingTop: "15vh"}}>
        <center>
          <h1 style={{fontSize:"4vw"}}>Welcome to the Web3 Music Player.</h1>
          <h2 style={{fontSize:"2vw"}}>Connect your MetaMask wallet below to sign in.</h2>
          <Button id="loginB" style={buttonCenter} variant="outline-success" onClick={() => {authenticate(); document.getElementById("loginB").innerHTML = "Awaiting Connection..."}}>Login with MetaMask</Button>
        </center>
      </div>
    );
  }



  
  return (
    <body style={{backgroundColor:"bisque", height:"100vh", width:"100vw"}}>
      <div>
        <h4 id="addr" style={{fontSize:"1vw"}}>Welcome User: {user.get("username")}</h4>
      </div>

      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/upload" exact element={<Upload />} />
          <Route path="/MusicPlayer" exact element={<MusicPlayer />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="app">
        <Walletcard/>
      </div> */}
      
     
    </body>
  );
}

export default App;
