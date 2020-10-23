import React from 'react';
import { useState, useEffect } from 'react';
import Card from './components/Card.react';
import Searchbar from './components/Searchbar.react';
import './App.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const MIN_TITLE_LEN = 3;
const MAX_NOMINATIONS_LEN = 5;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [nominations, setNominations] = useState([]);
  const [isSearchQueryMinLength, setIsSearchQueryMinLength] = useState(false);
  const [isSearchQueryContainedInData, setIsSearchQueryContainedInData] = useState(false);

  useEffect(() => {
    if (searchQuery.length < MIN_TITLE_LEN) {
      setError("Please search for a longer title name.");
      setData([]);
      setIsSearchQueryMinLength(false);
      return;
    }

    /* 
     * TODO: doesn't work, but check that regardless of whether error occurs, 
     * if current search query is contained in data to allow data to persist
     */
    setIsSearchQueryContainedInData(
      data.length > 0 && 
      data.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase())).length > 0
    );
    
    setIsSearchQueryMinLength(true);
    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`)
      .then(response => response)
      .then(response => response.json())
      .then(response => {
        if (response.Response === "False") {
          if(!isSearchQueryContainedInData) {
            setError(response.Error);
            setData([]);
          }
        } else {
          const info =
            response.Search.reduce(
              (acc, movie) => (
                [...acc, { title: movie.Title, year: movie.Year, id: movie.imdbID }]
              ), []
            );
          info.sort((movie1, movie2) => movie1.title < movie2.title ? -1 : 1);
          setData(info);
        }
      })
      .catch(({ message }) => {
        if(!isSearchQueryContainedInData) {
          setError(message);
          setData([]);
        }
      });
  }, [searchQuery]);

  const addNominatedMovie = (movie) => {
    if (nominations.length === MAX_NOMINATIONS_LEN) {
      alert(`You can only have up to ${MAX_NOMINATIONS_LEN} nominations.`)
    } else {
      setNominations([...nominations, movie]);
    }
  }

  const isNominateDisabled = (movie) => 
    nominations.filter((nominatedMovie) => nominatedMovie.id === movie.id).length > 0;

  const removeNominatedMovie = (movieToRemove) => {
    if (movieToRemove !== null && movieToRemove !== undefined) {
      const id1 = movieToRemove.id;
      const updatedMovies =
        nominations.filter(existingMovie => existingMovie.id !== id1);
      setNominations(updatedMovies);
    }
  }

  return (
    <div className="App">
      <div className="App_column">
        <h1>The Shoppies</h1>
        <Searchbar
          addNominatedMovie={addNominatedMovie} 
          data={data} 
          error={error}
          isNominateDisabled={isNominateDisabled}
          isSearchQueryMinLength={isSearchQueryMinLength}
          setSearchQuery={setSearchQuery}
        />
        <div className="App_nominations">
          <Card title="Nominations" isBold={true}>
            {nominations.length > 0
              ? <ul>
                {nominations.map((movie) =>
                  <div className="App_row" key={movie.id}>
                    <li>{`${movie.title} (${movie.year})`}</li>
                    <button onClick={() => removeNominatedMovie(movie)}>Remove</button>
                  </div>)}
              </ul>
              : <div>
                {`You don't have any nominations yet. You can nominate up to ${MAX_NOMINATIONS_LEN} movies.`}
              </div>
            }
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
