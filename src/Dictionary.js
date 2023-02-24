import React, { useState } from 'react';
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [searchedWord, setSearchedWord] = useState("");
    let [results, setResults] = useState();  

    function handleWord(event) {
        setSearchedWord(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();

        let ApiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
        let ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${ApiKey}`;
        axios.get(ApiUrl).then(handleResponse);
    }

    function handleResponse(response) {
       setResults(response.data);
    } 

    return (
        <div className="Dictionary">
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Lookup Word..." className="search-bar" onChange={handleWord}></input>
                <input type="submit" value="Search" className="search-button"></input>
            </form>
            <Results results={results} />
        </div>
    );
}