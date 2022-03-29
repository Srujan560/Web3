import React from "react";
import ReactDOM from "react-dom";
import UploadMusic from "../components/uploadMusic";

//const uploadMusic = <h1>Upload Music</h1>;
ReactDOM.render(<UploadMusic />, document.getElementById("root"));

function upload() {
  return (
    <div>
      <center>
        <h1>Upload</h1>
      </center>
    </div>
  );
}
export default UploadMusic;
