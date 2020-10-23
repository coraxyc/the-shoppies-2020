import React from 'react';
import '../styles/Searchbar.css'

function Searchbar(props) {
  return (
    <div className="Searchbar">
      <i className="fa fa-search"/>
      <input
        type="search"
        className="Search"
        onChange={(event) => props.setSearchQuery(event.target.value)}
      />
    </div>
  );
}

export default Searchbar;
