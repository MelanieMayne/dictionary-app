import React, { useState } from 'react';

export default function Dictionary() {
    let [searchedWord, setSearchedWord] = useState("");

    function handleWord(event) {
        setSearchedWord(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        alert(`Searching for definition of ${searchedWord}`);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Lookup Word..." onChange={handleWord}></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    );
}