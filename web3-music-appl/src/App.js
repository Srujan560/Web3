import './App.css';

import {Route, BrowserRouter, Routes,} from 'react-router-dom';
import About from './pages/About';
import Profile from "./pages/profile"
import Upload from './pages/upload';
import Login from './pages/Login';
import Navbar from "./pages/navbar";






function App() {
  
  return (
    <div>
      <div>
        <h4>Hello, Is account active</h4>
      </div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
    
        <Route path = "/" exact element={<Login/>} />
        <Route path = "/about" exact element={<About/>} />
        <Route path = "/profile" exact element={<Profile/>} />
        <Route path = "/upload" exact element={<Upload/>} />
        </Routes>
      </BrowserRouter>
      {/* <div className="app">
        <Walletcard/>
      </div> */}

      
    </div>
  );
}

export default App;
