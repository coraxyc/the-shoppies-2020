import React from 'react';
import { useState, useEffect } from 'react';
import Card from './components/Card.react';
import './App.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`)
      .then(response => response)
      .then(response => response.json())
      .then(response => {
        if (response.Response === 'False') {
          setError(response.Error);
          console.log(error);
        }
        else {
          const info = 
            response.Search.reduce(
              (acc, movie) => (
                [...acc, { title: movie.Title, year: movie.Year, id: movie.imdbID }]
              ), []
            );
          setData(info);
          console.log(info);
        }
      })
      .catch(({ message }) => {
        setError(message);
      })
  }, [searchQuery]);

  const addNominatedMovie = (movie) => {
    setNominations([...nominations, movie]);
  }

  const removeNominatedMovie = (movieToRemove) => {
    if(movieToRemove !== null && movieToRemove !== undefined) {
      const id1 = movieToRemove.id;
      const updatedMovies = 
        nominations.filter(existingMovie => existingMovie.id !== id1);
      setNominations(updatedMovies);
    }
  }

  return (
    <div className="App">
      <div className="Column">
        <h1>The Shoppies</h1>
        <Card title="Movie title">
          <form onSubmit={() => {}}>
            <input 
              type="text" 
              className="Search" 
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Enter 3 letters or more and hit enter to search" 
            />
          </form>
        </Card>
        <div className="Row">
          <Card title={`Results for "${searchQuery}"`} isBold={true}>
            {data.length > 0
              ? <ul>
                  {data?.map((movie) => 
                    <div className="Row" key={movie.id}>
                      <li>{`${movie.title} (${movie.year})`}</li>
                      <button 
                        onClick={() => addNominatedMovie(movie)} 
                        disabled={
                          nominations.filter(
                            (nominatedMovie) => 
                            nominatedMovie.id === movie.id).length > 0
                        }>
                          Nominate
                      </button>
                    </div>)}
                </ul> 
              : <div>
                  {error ? error : "Couldn't find any movies for this title."}
                </div>}

          </Card>
          <Card title="Nominations" isBold={true}>
            {nominations.length > 0
              ? <ul>
                  {nominations.map((movie) => 
                    <div className="Row" key={movie.id}>
                      <li>{`${movie.title} (${movie.year})`}</li>
                      <button onClick={() => removeNominatedMovie(movie)}>Remove</button>
                    </div>)}
                </ul>
              : <div>
                  You don't have any nominations yet. Nominate some movies!
                </div>
            }
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;