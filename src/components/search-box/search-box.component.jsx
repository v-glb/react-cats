import React from 'react';
import './search-box.styles.css'

// again: Implicit return, so () instead of {} after =>
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);