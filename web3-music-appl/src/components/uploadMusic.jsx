import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import styles from "../styles/style.module.css";
import { storeFiles } from "../utils/storage.js";
import Stack from "react-bootstrap/Stack";
import algoliasearch from "algoliasearch";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border-width: 5px;
  border-radius: 5px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  height: 150px;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

async function UpdateAlgolia(cid, fileName, songName, artistName) {
  const appId = "MVJ73ZN1LB";
  //This is an admin API Key!!!
  const apiKey = "28948f71f0522927651a734218839dd7";
  const searchClient = algoliasearch(appId, apiKey);
  const index = searchClient.initIndex("test_MusicUploads");
  const uploadObj = [
    {
      objectID: cid,
      uploadName: fileName,
      artist: artistName,
      song: songName
    }
  ];
  //set upload to a JSON file
  const data = JSON.stringify(uploadObj);
  const parsedData = JSON.parse(data);
  console.log("The song info being uploaded to algolia: \n" + parsedData);
  index.saveObjects(parsedData).then(({ objectIDs }) => {
    console.log(objectIDs);
  });
}
function UploadMusic() {
  const [files, setFiles] = useState([]);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [fileName, setFileName] = useState("");

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    maxFiles: 2,
    accept: "audio/*,image/*",
    onDrop: (acceptedFiles) => {
      setFileName(acceptedFiles[0].path);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });
  files.forEach((element) => {
    console.log(element);
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path} className={styles.form}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  const uploadFile = async () => {
    if (!songName.trim()) {
      alert("Please Enter Song Name");
      return;
    }
    //Check for the Email TextInput
    if (!artistName.trim()) {
      alert("Please Enter Artist");
      return;
    }
    //Checked Successfully
    //store files to web3.storage
    const cid = await storeFiles(files);
    UpdateAlgolia(cid, fileName, songName, artistName);

    alert("Success");
    //now clear up ui
    handleDelete();
  };
  const handleDelete = (event) => {
    setFiles([]);
    setFileName("");
    setSongName("");
    setArtistName("");
  };

  //add section for song image cover, upload it to web3storage as well then render it's preview
  //redirect to results page after upload
  return (
    <div className="Upload">
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {files.length == 0 && (
          <p>Drag Audio files here, or Click to select files</p>
        )}
        {files.length == 1 && (
          <p>Drag Audio Cover image here, or Click to select file</p>
        )}
        {files.length !== 0 && <p>audio file selected</p>}
        {files.length !== 1 && <p>Audio and Image file selected</p>}
      </Container>
      {files.length !== 0 && (
        <center className={styles.SubmitForm}>
          <form className={styles.form}>
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
            <Stack>
              <label id="songLabel">Song Name:</label>
              <input
                id="songName"
                type="text"
                value={songName}
                onChange={(e) =>
                  setSongName(e.target.value)(console.log(songName))
                }
              />
              <label id="artistLabel">Artist:</label>
              <input
                id="artistName"
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
              />
            </Stack>
          </form>
          <center>
            <button className={styles.deleteButton} onClick={handleDelete}>
              Remove File
            </button>
            <button
              className={styles.uploadButton}
              onClick={() => uploadFile()}
            >
              Upload Music
            </button>
          </center>
        </center>
      )}
    </div>
  );
}
export default UploadMusic;
