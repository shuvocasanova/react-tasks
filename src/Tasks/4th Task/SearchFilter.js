import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import "./SearchFilter.css";
const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  // handleChange function
  const handleChange = (e) => {
    const searchString = e.target.value;
    setSearchValue(searchString);
  };

  return (
    <div>
      <input
        className="input"
        onChange={handleChange}
        type="text"
        placeholder="Search"
      />
      {JSONDATA.filter((val) => {
        if (searchValue === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return val;
        }
      }).map((val, index) => (
        <div className="user" key={index}>
          <p>{val.first_name}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchFilter;
