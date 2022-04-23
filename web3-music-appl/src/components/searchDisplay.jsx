import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import styles from "../styles/style.module.css";

//   const appId = "latency";
//   const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
const appId = "MVJ73ZN1LB";
const apiKey = "676191f4468f9a895db992a7241163cc";
const searchClient = algoliasearch(appId, apiKey);

export const Hit = ({ hit }) => {
  const handleClick = () => {
    var playimg = hit.image;
    var playsong = hit.music;
    var title = hit.uploadName;
  };
  return (
    <div className={styles.hit}>
      <div className={styles.artist} onClick={handleClick}>
        <h4>{hit.uploadName}</h4>
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className={styles.content}>
      <Hits hitComponent={Hit} />
    </div>
  );
};

function searchDisplay() {
  return (
    <div className={styles.searchcont}>
      <h1>Testing</h1>
      <InstantSearch searchClient={searchClient} indexName="test_MusicUploads">
        <SearchBox translations={{ placeholder: "Search for music" }} />
        <main>
          <Content />
        </main>
      </InstantSearch>
    </div>
  );

  // return (
  //   <div className="ais-InstantSearch">
  //     <h1>React InstantSearch e-commerce demo</h1>
  //     <InstantSearch indexName="demo_media" searchClient={searchClient}>
  //       <div className="right-panel">
  //         <SearchBox />
  //         <Hits hitComponent={Hit} />
  //       </div>
  //     </InstantSearch>
  //   </div>
  // );
}
export default searchDisplay;
