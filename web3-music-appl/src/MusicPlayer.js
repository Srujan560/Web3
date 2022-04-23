import React, { useState, useEffect } from "react";
import "./App.css";
import Player from "./Player";
import SongList from "./SongList";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "./components/autocomplete";
import { ProductItem } from "./components/productItem";
import styles from "../src/styles/style.module.css";

//added autocomplete search bar with music uploads to web3 storage
function MusicPlayer() {
  //const appId = "latency";
  const appId = "MVJ73ZN1LB";
  //const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
  const apiKey = "676191f4468f9a895db992a7241163cc";
  const searchClient = algoliasearch(appId, apiKey);

  return (
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
      <Player />
      <SongList />
    </React.Fragment>
  );
}
export default MusicPlayer;
