import React from 'react';
import "./Child.css";

export default function Child(props) {
    return (
        <button className={props.color} onClick={props.setColor}></button>
    )
}