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
import MusicPlayer from "./MusicPlayer";

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
      <div style={{height:"100vh", backgroundColor:"bisque", paddingTop: "15vh"}}>
        <center>
          <h1>Welcome to the Web3 Music Player.</h1>
          <h2>Connect your MetaMask wallet below to sign in.</h2>
          <Button style={buttonCenter} variant="outline-success" onClick={() => authenticate()}>Login with MetaMask</Button>
          </center>
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
