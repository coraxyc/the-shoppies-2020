import React from 'react';
import { useState } from 'react';
import '../styles/Dropdown.css'

function Dropdown(props) {
  const addNominatedMovie = props.addNominatedMovie;
  const data = props.data;
  const error = props.error;
  const isNominateDisabled = props.isNominateDisabled;

  const [listOfHovering, setListOfHovering] = useState(new Array(data.length).fill(false));

  const handleMouseEnter = (index) => {
    let modifiedListOfHovering = [];
    modifiedListOfHovering.fill(false);
    modifiedListOfHovering[index] = true;
    setListOfHovering(modifiedListOfHovering);
  };

  const handleMouseLeave = () => {
    let modifiedListOfHovering = [];
    modifiedListOfHovering.fill(false);
    setListOfHovering(modifiedListOfHovering);
  };

  return (
    <div className="Dropdown">
      {data.length > 0
        ? <div className="Dropdown_body">
            {data?.map((movie, index) =>
              <div
                className="Dropdown_row" 
                key={movie.id} 
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => addNominatedMovie(movie)}
              >
                {`${movie.title} (${movie.year})`}
                {listOfHovering[index] && 
                  <button
                    onClick={() => addNominatedMovie(movie)}
                    disabled={isNominateDisabled(movie)}
                  >
                    Nominate
                  </button>
                }
              </div>)}
          </div>
        : <div className="Dropdown_error">
            {error ? error : "Couldn't find any movies for this title. Try another title."}
          </div>}
    </div>
  );
}

export default Dropdown;
