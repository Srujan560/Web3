import { Button } from "react-bootstrap";
import  styles from "../CSS/search.css";
import {Form} from "react-bootstrap"
const bsty = {
    marginLeft:"1vw", 
    border: ".5vh solid",
    borderRadius: 100, 
    width: "6vw", 
    height:"4vh", 
    fontSize:".75vw", 
    padding:0
}
const SearchBar = () => (
    <form action="/" method="get">
        <div class="searchContainer">
            <label htmlFor="header-search">
                <span className="search"></span>
            </label>
            <Form.Control type="search" style={{width:"10vw", height:"3.75vh", fontSize:".75vw"}} placeholder="Search Music..." />
            <Button class="button" type="submit" variant="outline-success" style={bsty} onClick={() => {alert("Search Submitted")}}>Search</Button>
        </div>
    </form>
);
export default SearchBar;