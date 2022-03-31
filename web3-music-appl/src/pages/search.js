import { Button } from "react-bootstrap";
import  styles from "../CSS/search.css";
const SearchBar = () => (
    <form action="/" method="get">
        <div>
        <label htmlFor="header-search">
            <span className="search"></span>
        </label>
        <input
            className="bar"
            type="text"
            id="header-search"
            placeholder="Search Music"
        />
        <button class="button"type="submit">Search</button>
        </div>
    </form>
);
export default SearchBar;