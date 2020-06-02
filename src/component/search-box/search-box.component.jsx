import React from 'react';
import './search-box.styles.css';

// NB: Deconstructed props into {placeholder,handleChange}
export const SearchBox = ({placeholder,handleChange}) => (
        <input
        className= "search"
        type="search"
        onChange={handleChange}
        placeholder={placeholder} 
        />
);
