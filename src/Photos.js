import React from "react";
import "./Photos.css";

export default function Photo(props) {
    if (props.photos) {
        return (
            <div className="Photos">
                {props.photos.map(function(photo, index) {
                    return (
                        <img src={photo.src.landscape} key={index}></img>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
}