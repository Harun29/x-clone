import SearchIcon from "../../icons/SearchIcon"
import XIcon from "../../icons/XIcon";
import "../../styles/elements.css"

const SearchElement = () => {

  return ( 
    <div className="search-element">
      <div className="search-element-search-icon">
        <SearchIcon />
      </div>
      <input type="text" placeholder="Search" className="search-element-input"/>
      <button className="search-element-x-button">
        <XIcon />
      </button>
    </div>
   );
}
 
export default SearchElement;