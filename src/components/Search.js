import React, { useState } from "react"

function Search({searchText}) {
    const [text, setText] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        searchText(text)
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="border border-indigo-200 rounded-2xl text-md pl-4 hover:shadow-md">
            <input type = "text" placeholder="Search..." onChange={(e) => setText(e.target.value)} className=""/>
            <button className="uppercase rounded-l-none px-4">Search</button>
        </form>
    </div>
    )
}

export default Search;


