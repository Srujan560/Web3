import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import styles from "../styles/style.module.css";
import { storeFiles, makeStorageClient } from "../utils/storage.js";
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
//Send song upload info to Algolia for search
async function UpdateAlgolia(
  cid,
  imageCid,
  fileName,
  songName,
  artistName,
  imgfileName
) {
  const appId = "MVJ73ZN1LB";
  //This is an admin API Key!!!
  const adminApiKey = "28948f71f0522927651a734218839dd7";
  const searchClient = algoliasearch(appId, adminApiKey);
  const index = searchClient.initIndex("test_MusicUploads");

  //construct image URL
  const imgURL = "https://" + imageCid + ".ipfs.dweb.link/" + imgfileName;
  const audioURL = "https://" + cid + ".ipfs.dweb.link/" + fileName;
  const uploadObj = [
    {
      objectID: cid,
      uploadName: fileName,
      artist: artistName,
      song: songName,
      image: imgURL,
      audio: audioURL
    }
  ];
  //set upload to a JSON file
  const data = JSON.stringify(uploadObj);
  const parsedData = JSON.parse(data);
  console.log("Info being uploaded to algolia: \n" + data);
  index.saveObjects(parsedData).then(({ objectIDs }) => {
    console.log(objectIDs);
  });
}
function UploadMusic() {
  const [files, setFiles] = useState([]);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [fileName, setFileName] = useState("");
  const [imgfileName, setImgFileName] = useState("");

  //dropZone object
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
      if (acceptedFiles[0].type.includes("audio")) {
        setFileName(acceptedFiles[0].path);
        setImgFileName(acceptedFiles[1].name);
      } else {
        setFileName(acceptedFiles[1].path);
        setImgFileName(acceptedFiles[0].name);
      }
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  //must simultaneously upload to dropzone
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path} className={styles.form}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const uploadFile = async () => {
    if (!songName.trim()) {
      alert("Please Enter Song Name");
      return;
    }
    if (!artistName.trim()) {
      alert("Please Enter Artist");
      return;
    }
    //Checked Successfully

    //store files to web3.storage
    const client = makeStorageClient();
    if (files[0].type.includes("audio")) {
      const cid = await client.put([files[0]], {
        name: files[0].name
      });
      const imageCid = await client.put([files[1]], {
        name: files[1].name
      });
      UpdateAlgolia(cid, imageCid, fileName, songName, artistName, imgfileName);
    } else {
      const cid = await client.put([files[1]], {
        name: files[1].name
      });
      const imageCid = await client.put([files[0]], {
        name: files[0].name
      });
      UpdateAlgolia(cid, imageCid, fileName, songName, artistName, imgfileName);
    }

    alert("Success");
    //now clear up ui
    handleDelete();
  };
  const handleDelete = (event) => {
    setFiles([]);
    setFileName("");
    setSongName("");
    setArtistName("");
    setImgFileName("");
  };

  //add section for song image cover, upload it to web3storage as well then render it's preview
  //ask about how to pick preview img file
  return (
    <div className="Upload">
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {files.length === 0 && (
          <p>
            Drag Audio and Image files here simultaneously, or Click to select
            files
          </p>
        )}
        {files.length === 1 && (
          <p>Drag Audio Cover image here, or Click to select file</p>
        )}
        {files.length === 1 && <p>audio file selected</p>}
        {files.length === 2 && <p>Audio and Image file selected</p>}
      </Container>
      {files.length !== 0 && (
        <center className={styles.SubmitForm}>
          <form className={styles.form}>
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
            <Stack>
              <img src={files[0].preview}></img>
              <label id="songLabel">Song Name:</label>
              <input
                id="songName"
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
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
