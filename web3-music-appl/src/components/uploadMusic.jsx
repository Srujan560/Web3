import { Button } from "bootstrap";
import React, { Component } from "react";
import "../styles/style.css";
import { storeImage } from "../utils/storage";
import {
  makeClipboardButton,
  showElement,
  hideElement,
  getSavedToken,
  navToSettings
} from "../utils/helpers";

class UploadMusic extends Component {
  state = {};

  render() {
    return (
      //{this.setupUploadUI()}
      <>
        <div id="upload-input-area">
          <div id="welcome-message">
            Welcome to the Music Upload module with{" "}
            <a href="https://web3.storage">Web3.Storage</a>. Drag an file onto
            the box below, or use the button to select an song file!
          </div>
          <div id="drop-area">
            <form id="inputs">
              <label class="select-button" for="file-input">
                Select an song file
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
}

export default UploadMusic;
