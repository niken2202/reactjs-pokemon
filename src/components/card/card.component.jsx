import React from 'react';

import './card.style.css'

export const Card  = props =>(
    <div className="card-container">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.user.id}.png`} />
        <h1 > {props.user.name} </h1>
    </div>
)