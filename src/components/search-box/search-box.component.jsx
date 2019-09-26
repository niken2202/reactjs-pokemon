import React from 'react'
import './search-box.style.js'
import './search-box.style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="search-box">
        <input type="text"
            placeholder={placeholder}
            onChange={handleChange} />
            <span></span>
    </div>

)