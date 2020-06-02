import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

// create and export functional component
export const CardList = (props) => (
    <div className='card-list'>{
        props.monsters.map(monster => (
            // Card component created for each monster and assigned a key
            <Card key={monster.id} monster={monster}/>
        ))
        }
    </div>
);
    