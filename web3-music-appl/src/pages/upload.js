
import ReactDOM from "react-dom";
// import UploadMusic from "../components/uploadMusic";
import styles from "../App.css";
import axios from 'axios';
import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap'


const bsty = {
  marginLeft:"1vw", 
  marginTop: "2vh",
  border: ".5vh solid",
  borderRadius: 100, 
  width: "20vw", 
  height:"6vh", 
  fontSize:"1.75vw", 
  padding: 0,
  fontFamily: "'Inconsolata', monospace",
  color: "black",
  fontWeight: "bold"
}


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

const containersty = {
    borderRadius: "1vw",
    backgroundColor: "gray",
    padding: "1vw",
    width: "35vw"
  }

const inputsty = {
    width: "100%",
    backgroundColor: "white",
    color: "black",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "1vw",
    cursor: "pointer"
  
}
class Upload extends Component {
  
  state = {

    // Initially, no file is selected
    selectedFile: null
  };
  
  // On file select (from the pop up)
  onFileChange = event => {
  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };
  
  // On file upload (click the upload button)
  onFileUpload = () => {
    
    
    
    //Want to upload to sanity.io here
    let title = prompt("Please Enter Song Title", "Song Title");
    console.log(title)
    let artist = prompt("Please Enter Artist Name", "Artist Name")
    console.log(artist)
    




    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };
  
  // File content to be displayed after
  // file upload is complete
  fileData = () => {
  
    
    if (this.state.selectedFile) {
       
      return (
        <div>
          {/* <h2>File Details:</h2>
           
            <p>File Name: {this.state.selectedFile.name}</p>       
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p> */}

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h3>Choose before Pressing the Upload button</h3>
        </div>
      );
    }
  };
  
  render() {
  
    return (
      <div>
        <center>
          <h1 style={h1sty}>
            Upload
          </h1>
          <h2 style={h2sty}>
            Upload your file here.
          </h2>
          <div class="container" style={containersty}>
            {/* <label for="song" style={{fontFamily: "'Inconsolata', monospace", fontSize: "1.5vw"}}><b>Song Title</b></label>
            <input type="text" id="song" name="songtitle" placeholder="Song Title..." style={inputsty}/>

            <label for="artist" style={{fontFamily: "'Inconsolata', monospace", fontSize: "1.5vw"}}><b>Artist Name</b></label>
            <input type="text" id="artist" name="artistname" placeholder="Artist Name..." style={inputsty}/> */}
            <Form.Label>Upload your audio file here.</Form.Label>
            <Form.Control type="file" onChange={this.onFileChange}/>
            
            <Button class="button" variant="outline-success" style={bsty} onClick={this.onFileUpload}>
              Upload File
            </Button>
          </div>
        {this.fileData()}
        </center>
      </div>
    );
  }
}

export default Upload;
