import React from "react";
import ReactDOM from "react-dom";
import UploadMusic from "../components/uploadMusic";
import styles from "../App.css";

//const uploadMusic = <h1>Upload Music</h1>;
//ReactDOM.render(<UploadMusic />, document.getElementById("root"));

function upload() {
  return (
    <div>
      <center>
        <h1 style={{fontSize: "4em"}}>Upload</h1>
      </center>
    </div>
  );
}
export default UploadMusic;
