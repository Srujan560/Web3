import React, { useState, useEffect } from "react";
import "./App.css";
import Player from "./Player";
import SongList from "./SongList";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "./components/autocomplete";
import { ProductItem } from "./components/productItem";
import styles from "../src/styles/style.module.css";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
//import "instantsearch.css/themes/satellite.css";

function MusicPlayer() {
  const appId = "MVJ73ZN1LB";
  const apiKey = "676191f4468f9a895db992a7241163cc";
  const searchClient = algoliasearch(appId, apiKey);

  const [songQueue, setSongQueue] = useState([]);
  const [playNow, setplayNow] = useState("");

  const Hit = ({ hit }) => {
    const handlePlay = () => {
      setplayNow(hit.audio);
      //alert("Now Playing: " + hit.song + "\nBy: " + hit.artist);
    };
    const handleQueue = () => {
      const queuedSongObj = {
        audio: hit.audio,
        song: hit.song
      };
      setSongQueue((oldQueue) => [...oldQueue, queuedSongObj]);
    };
    return (
      <div className={styles.hit}>
        <div className={styles.artist}>
          <center className={styles.cover}>
            <img className={styles.coverImg} src={hit.image} width="80%" />
            <img
              className={styles.hoverPlay}
              onClick={handlePlay}
              src="http://www.slatecube.com/images/play-btn.png"
            />
          </center>
          <div className="songInfo">
            <h4 class="song">{hit.song}</h4>
            <h3 class="artist">{hit.artist}</h3>
            <button className={styles.queueButton} onClick={handleQueue}>
              Add to Queue
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Content = () => {
    return (
      <div className={styles.content}>
        <Hits hitComponent={Hit} />
      </div>
    );
  };

  const handleRemoveSong = (e) => {
    console.log("trying to remove");
    const song = e.target.getAttribute("removeSongs");
    setSongQueue(songQueue.filter((items) => items.song !== song));
  };
  const handlePlayNext = () => {
    setplayNow(songQueue.shift().audio);
    setSongQueue(songQueue);
  };

  return (
    <div className={styles.musicPlayerPage}>
      {/* <SongList /> */}
      <React.Fragment>
        {/* music search functionality */}
        <div className={styles.contentRow}>
          <div className={styles.searchcont}>
            <InstantSearch
              searchClient={searchClient}
              indexName="test_MusicUploads"
            >
              <center>
                <SearchBox
                  className={styles.searchBox}
                  translations={{ placeholder: "Search for Music" }}
                />
              </center>
              <main>
                <Content />
              </main>
            </InstantSearch>
          </div>
          <div className={styles.queueContainer}>
            <center className={styles.queueTitle}>Queue</center>
            {songQueue.map(function (songs, index) {
              return (
                <div className={styles.queuedSong} key={index}>
                  {songs.song}
                  <button removeSongs={songs.song} onClick={handleRemoveSong}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <AudioPlayer
          className={styles.audioPlayer}
          //autoPlay
          src={playNow}
          onPlay={(e) => console.log("onPlay")}
          onEnded={handlePlayNext}
          // other props here
        />
      </React.Fragment>
    </div>
  );
}
export default MusicPlayer;
