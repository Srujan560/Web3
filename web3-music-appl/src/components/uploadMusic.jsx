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
        <div>
          <span>{this.formatNumUploads()}</span>
          <button>Upload</button>
        </div>
        <div onSubmit={this.onMusicUpload}>
          <h1>File Upload</h1>
          <input
            type="file"
            name="music"
            onMusicUpload={(e) => this.onMusicUpload(e)}
          />
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
