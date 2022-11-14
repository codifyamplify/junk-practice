import React from "react"

function MovieCard({movies}){
    console.log("inside movie Card", movies)
    return (
        <li className="smallComponent">Movie Card Content Component Instance</li>
    )
}

export default MovieCard