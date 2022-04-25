import React, { useState, useEffect } from "react";
import "./App.css";
import Player from "./Player";
import SongList from "./SongList";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "./components/autocomplete";
import { ProductItem } from "./components/productItem";
import styles from "../src/styles/style.module.css";
import searchDisplay from "./components/searchDisplay";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function MusicPlayer() {
  //   const appId = "latency";
  //   const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
  const appId = "MVJ73ZN1LB";
  const apiKey = "676191f4468f9a895db992a7241163cc";
  const searchClient = algoliasearch(appId, apiKey);

  const Hit = ({ hit }) => {
    const handleClick = () => {
      console.log(hit.audio)
    };
    return (
        <div className={styles.hit}>
          <div className={styles.artist} onClick={handleClick}>
            <center><img src={hit.image} width="80%"></img></center>
            <h4 class="song">{hit.song}</h4>
            <h3 class="artist">{hit.artist}</h3>
            <AudioPlayer
              //autoPlay
              src={hit.audio}
              onPlay={e => console.log("onPlay")}
              // other props here
            />
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

  //replace seach bar in nav bar with autocomplete bar!!
  return (
    <div style={{height:"150vh", width:"100vw", backgroundColor:"#1b2838"}}>
    <React.Fragment>
      <div className={styles.searchBar}>
        <Autocomplete
          openOnFocus={true}
          placeholder="Search for Music Uploads"
          getSources={({ query }) => [
            {
              sourceId: "uploadName",
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "test_MusicUploads",
                      query
                    }
                  ]
                });
              },
              templates: {
                item({ item, components }) {
                  return <ProductItem hit={item} components={components} />;
                }
              }
            }
          ]}
        />
      </div>
      {/* music search functionality */}
      <div className={styles.searchcont}>
        <InstantSearch
          searchClient={searchClient}
          indexName="test_MusicUploads"
        >
          <SearchBox translations={{ placeholder: "Search for music" }} />
          <main>
            <Content />
          </main>
        </InstantSearch>
      </div>
      {/* <Player /> */}
      {/* <SongList /> */}
    </React.Fragment>
    </div>
  );
}
export default MusicPlayer;
