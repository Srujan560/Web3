import React from "react";
import ReactDOM from "react-dom";
import UploadMusic from "../components/uploadMusic";

//const uploadMusic = <h1>Upload Music</h1>;
ReactDOM.render(<UploadMusic />, document.getElementById("root"));

function upload() {
  return (
    <div>
      <h1>Upload test</h1>
    </div>
  );
}
export default upload;
