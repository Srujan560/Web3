import React, { Component } from "react";
import { useState } from "react";
import { retrieve, listUploads, makeStorageClient } from "../utils/storage";
import algoliasearch from "algoliasearch";
import "@algolia/autocomplete-theme-classic";
import { Autocomplete } from "./autocomplete";

//still in progress
function GetMusic() {
  // API keys below contain actual values tied to your Algolia account
  const client = algoliasearch(
    "MVJ73ZN1LB",
    "28948f71f0522927651a734218839dd7"
  );
  const index = client.initIndex("your_index_name");
  const uploadIndex = [];

  const getFile = async () => {
    //const ipfsLink = "https://" + cid + ".ipfs.dweb.link";
    //console.log(ipfsLink);
    //return ipfsLink;
  };

  async function saveUploadsToAlgolia() {
    //get uploads form web3 storage
    const client = makeStorageClient();
    for await (const upload of client.list()) {
      //JSON strings need to happen in here
      const uploadObj = { objectID: upload.cid, uploadName: upload.name };
      uploadIndex.push(uploadObj);
    }
    //set uploads to a JSON files
    const data = JSON.stringify(uploadIndex);
    //localStorage.setItem("test.json", data);
    const dataRetreived = JSON.parse(localStorage.getItem("test.json"));
    //localStorage.removeItem("test.json");
    index.saveObjects(dataRetreived).then(({ objectIDs }) => {
      console.log(objectIDs);
    });
  }
  const getUploads = async () => {
    //const cid = "bafybeig5sppat2oyggn6nrco2znvd7yuedt6wuuasgxn4j3fj45bdiwdya";
    const songNames = await listUploads();
    for (var i = 0; i < songNames.length; i++)
      console.log(i + ". " + songNames[i]);
    console.log("song name");
  };

  //save name and cid pairing to algoliaSearch
  return (
    <div>
      <button onClick={getFile}>get file</button>
      <button onClick={saveUploadsToAlgolia}>get uploads</button>
      <audio src={getFile} controls></audio>
    </div>
  );
}

export default GetMusic;
