import React from 'react';
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
               <h2>{props.results.word}</h2>
               <h3>{props.results.phonetic}</h3>
               {props.results.meanings.map(function(meanings, index) {
                return (
                    <div key={index}>
                        <h4>{meanings.partOfSpeech}</h4>
                        <p>
                            <div className="definition">{meanings.definition}</div>
                            <div className="example"><em>{meanings.example}</em></div>
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