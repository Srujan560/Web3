import React from "react";
import ReactDOM from "react-dom";
import UploadMusic from "../components/uploadMusic";
import styles from "../App.css";
import GetMusic from "../components/getMusic";

//const uploadMusic = <h1>Upload Music</h1>;
//ReactDOM.render(<UploadMusic />, document.getElementById("root"));

const h1sty = {
  fontSize: "4vw",
  color: "#e0d9cf"
};

const container = {
  width: "1000%",
  maxWidth: "1000px",
  margin: "0 auto",
  maxHeight: "1000%",
  height: "1000px"
};

function upload() {
  return (
    <body style={{backgroundColor:"#1b2838", height:"200vh"}}>
      <div className="container">
        <center>
          <h1 style={h1sty}>Upload</h1>
        </center>
        {<UploadMusic />}
      </div>
    </body>
  );
}
export default upload;
