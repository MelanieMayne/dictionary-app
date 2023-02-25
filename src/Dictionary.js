import React, { useState } from 'react';
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
    let [searchedWord, setSearchedWord] = useState(props.defaultSearchedWord);
    let [results, setResults] = useState();  
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleWord(event) {
        setSearchedWord(event.target.value);
    }

    function search() {
        let ApiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
        let ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${ApiKey}`;
        axios.get(ApiUrl).then(handleResponse);

        let photoApiKey = "ZMRUlccmkyISvXVq5tWdhiOMNLqu6HfMUttww2cJrST3xLUIrOtMYqNX";
        let photoApiUrl = `https://api.pexels.com/v1/search?query=${searchedWord}&per_page=3`;
        let headers = { Authorization : `${photoApiKey}` };
        axios.get(photoApiUrl, { headers: headers }).then(handlePhotoResults);
    }

    function handlePhotoResults(response) {
        setPhotos(response.data.photos);
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
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
    }
   
}