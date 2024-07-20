
import { IoSearch } from "react-icons/io5";
import './Header.css'

function SearchBar() {
  return (
    <>
      {/* Header search starts here */}
      <div className="headerSearch">
        <input type="text" placeholder="search for products" />
        <button>
          <IoSearch className="svg" />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
