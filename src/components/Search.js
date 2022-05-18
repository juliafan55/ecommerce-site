import React, { useState, useEffect } from "react"

function Search({searchText}) {
    // const { products } = props;
    const [text, setText] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()

        searchText(text)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Search..." onChange={(e) => setText(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
    )
}

export default Search


