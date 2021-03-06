import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";

import classes from "../../styles/SearchInput.module.css";

export default function SearchInput() {
  const [searchState, setSearchState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchState("NOT IMPLEMENTED");
  }

  function handleChange(e) {
    setSearchState(e.target.value);
  }
  return (
    <div className={classes.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search bar"
          value={searchState}
          onChange={handleChange}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
