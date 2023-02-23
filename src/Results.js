import React from 'react';
import Synonyms from "./Synonyms"

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
               <h2>{props.results.word}</h2>
               <h3>{props.results.phonetic}</h3>
               {props.results.meanings.map(function(meanings, index) {
                return (
                    <div>
                        <h4>{meanings.partOfSpeech}</h4>
                        <p>
                            {meanings.definition}
                            <br />
                            <em>{meanings.example}</em>
                        </p>
                        <Synonyms synonyms={meanings.synonyms}/>
                    </div>
                );
               })}
            </div>
        );
    } else {
        return (null);
    }    
}