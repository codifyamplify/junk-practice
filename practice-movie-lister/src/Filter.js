import React from "react"

function Filter(){
    return (
        <div className="smallComponent">
            <h2>Filter Genre Component</h2>
            <h3>Filter movies in your list by genre by selecting a genre from the dropdown menu.</h3>
            {/* hanlde change */}
            <form>
                <b>Genre </b>
                <p>will need a change handler</p>
                <select id="filter">
                    <option>All</option>
                    <option>Horror</option>
                    <option>Sci-fi</option>
                    <option>Horror</option>
                </select>
            </form>
        </div>
    )
}

export default Filter