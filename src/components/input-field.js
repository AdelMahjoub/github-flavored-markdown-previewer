import React from 'react';

export default function(props) {
    return (
        <textarea
        defaultValue={props.textInput} 
        onChange={props.handleChange} 
        className="text-field" 
        rows="50" 
        />
    )
}