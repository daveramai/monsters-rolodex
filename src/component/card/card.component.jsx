import React from 'react';
import './card.styles.css';

// rafc + TAB for template
export const Card = (props) => (
    <div className="card-container">
        <h1> {props.monster.name} </h1>    
    </div>
)
