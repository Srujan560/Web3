import { Button } from "react-bootstrap";
// import  styles from "../CSS/search.css";
import styles from "../styles/style.module.css";
import { Form } from "react-bootstrap";

import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "../components/autocomplete";
import { ProductItem } from "../components/productItem";

const appId = "MVJ73ZN1LB";
const apiKey = "676191f4468f9a895db992a7241163cc";
const searchClient = algoliasearch(appId, apiKey);

const SearchBar = () => (
  <form action="/" method="get">
    <div className={styles.navSearch}>
      <Autocomplete
        openOnFocus={true}
        placeholder="Search for Music Uploads"
        getSources={({ query }) => [
          {
            sourceId: "song",
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
    {/* <label htmlFor="header-search">
                <span className="search"></span>
            </label>
            <Form.Control type="search" style={{width:"10vw", height:"3.75vh", fontSize:".75vw"}} placeholder="Search Music..." />
            <Button class="button" type="submit" variant="outline-success" style={bsty} onClick={() => {alert("Search Submitted")}}>Search</Button> */}
  </form>
);
export default SearchBar;
