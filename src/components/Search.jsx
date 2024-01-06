import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
function Search({ onSearchClick }) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchValue(value);
    };
  
    const handleSearchClick = () => {
      onSearchClick(searchValue);
    };
  return (
    <div className="d-flex container py-2 my-1">
                  <input 
                    value={searchValue}
                    placeholder="Search"
                    className="form-control"
                    aria-label="Search"
                    onChange={handleInputChange} 
                  />
                  <button onClick={handleSearchClick}> <FaSearch /> </button>
                </div>
  )
}

export default Search