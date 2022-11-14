import React from "react"
import MovieCard from "./MovieCard"
import Filter from "./Filter"
import SearchMovie from "./SearchMovie"

function MovieList({movies}){
    return (
        <div className="component">
            <h1>Movie List Component</h1>
            <h5>I will need data from db.json</h5>
            <p>Still working</p>
            <Filter />
            <SearchMovie />
            <ul>
                <MovieCard movies={movies}/>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </ul>
        </div>
    )
}

export default MovieList