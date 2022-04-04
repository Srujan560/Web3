import React from "react";
import ReactDOM from "react-dom";
// import UploadMusic from "../components/uploadMusic";
import styles from "../App.css";

//const uploadMusic = <h1>Upload Music</h1>;
//ReactDOM.render(<UploadMusic />, document.getElementById("root"));

const h1sty = {
  fontSize: "4vw", 
  color:"#e0d9cf"
}
const h2sty = {
  fontSize:"2vw",
  color:"grey"
}
const h3sty = {
  fontSize:"1vw",
  marginBottom: "5vh",
      color:"#c94242"
}

function upload() {
  return (
    <div>
      <center>
        <h1 style={h1sty}>Upload</h1>
        
      </center>
      
      {/* <UploadMusic/> */}
    </div>
  );
}
export default upload;
