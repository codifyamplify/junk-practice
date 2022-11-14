import React from "react"

function CreateMovie(){
    return (
        <div className="component">
            <h1>Create Movie Entry Component</h1>
            <form>
                <h3>Create a new movie entry here by providing a movie name and genre.</h3>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Genre:
                    <input type="text" name="genre" />
                </label>
            </form>
        </div>
    )
}

export default CreateMovie