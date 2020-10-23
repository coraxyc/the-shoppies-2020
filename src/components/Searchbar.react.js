import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../styles/Searchbar.css'
import Dropdown from './Dropdown.react';

function Searchbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const node = useRef();

  const handleClick = (e) => {
    setIsDropdownOpen(node.current.contains(e.target) && props.isSearchQueryMinLength);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleClick);
    };
  }, [props.isSearchQueryMinLength]);

  return (
    <div ref={node}>
      <div className={`Searchbar ${isDropdownOpen ? "Searchbar__hasDropdown" : ""}`}>
        <i className="fa fa-search" />
        <input
          type="search"
          className="Searchbar_input"
          onChange={(event) => props.setSearchQuery(event.target.value)}
          placeholder={!isDropdownOpen ? "Nominate a movie" : ""}
        />
      </div>

      {
        isDropdownOpen && (
          <div>
            <Dropdown 
              addNominatedMovie={props.addNominatedMovie} 
              data={props.data} error={props.error} 
              isNominateDisabled={props.isNominateDisabled}
            />
          </div>
        )
      }
    </div>
  );
}

export default Searchbar;
