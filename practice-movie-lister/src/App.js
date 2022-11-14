import './App.css';
import React, {useEffect, useState} from "react"
import Header from "./Header"
import MovieList from './MovieList';
import MovieRec from "./MovieRec"
import CreateMovie from './CreateMovie';

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((movies) => setMovies(movies))
  }, [])


  return (
    <div className="App">
      <Header />
      <MovieRec movies={movies}/>
      <CreateMovie />
      <MovieList movies={movies}/>
      {/* <div className="starter">
        <p>
          Some text here for display purposes.
        </p>
        <p>more text beneath it</p>
      </div> */}
    </div>
  );
}

export default App;
