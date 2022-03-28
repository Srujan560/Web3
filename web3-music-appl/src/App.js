import "./App.css";
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

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  console.log("Hello world");
  console.log(user);
  // const userPerf = Moralis.Object.extend("_users");
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Login with Metmask</button>
        <p>Sign in with MetaMask, or Login</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h4>Welcome User: {user.get("username")}</h4>
      </div>

      <BrowserRouter>
        <Navbar />
        <Logout />
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
    </div>
  );
}

export default App;
