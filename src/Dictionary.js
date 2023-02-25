import React, { useState } from 'react';
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
    let [searchedWord, setSearchedWord] = useState(props.defaultSearchedWord);
    let [results, setResults] = useState();  
    let [loaded, setLoaded] = useState(false);

    function handleWord(event) {
        setSearchedWord(event.target.value);
    }

    function search() {
        let ApiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
        let ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${ApiKey}`;
        axios.get(ApiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleResponse(response) {
       setResults(response.data);
    } 
     
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Lookup Word..." className="search-bar" onChange={handleWord}></input>
                    <input type="submit" value="Search" className="search-button"></input>
                </form>
                <Results results={results} />
            </div>
        );
    } else {
        load();
    }
   
}