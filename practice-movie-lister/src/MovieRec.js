import React from "react"

function MovieRec({movies}){
    console.log("inside MovieRec", movies)
    return (
        <div className="component">
            <h1>Movie Reccomendation Component</h1>
            <h3>Would you like a quick recommendation from the database? Just watch here!</h3>

        </div>
    )
}

export default MovieRec