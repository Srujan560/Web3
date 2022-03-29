import { Button } from "bootstrap";
import React, { Component } from "react";
class UploadMusic extends Component {
  state = {
    numUploads: 0
  };

  onMusicUpload(e) {
    let files = e.target.files;
    console.warn("music file", files);
  }
  render() {
    return (
      <>
        <div id="upload-input-area">
          <div id="welcome-message">
            Welcome to the image gallery example app for{" "}
            <a href="https://web3.storage">Web3.Storage</a>. Drag an image onto
            the box below, or use the button to select an image file!
          </div>
          <div id="drop-area">
            <form id="inputs">
              <label class="select-button" for="file-input">
                Select an image file
              </label>
              <input
                class="hidden"
                type="file"
                id="file-input"
                accept=".jpeg,.jpg,.png,.gif,image/*"
              />

              <img id="image-preview" class="preview-image" />

              <div class="spacer"></div>
              <label for="caption-input">Enter a caption</label>
              <input id="caption-input" placeholder="Enter a caption" />

              <button id="upload-button" disabled="true">
                Upload to Web3.Storage
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
  formatNumUploads() {
    const { numUploads } = this.state;
    return numUploads === 0 ? <h1>Zero</h1> : numUploads;
  }
}

export default UploadMusic;
