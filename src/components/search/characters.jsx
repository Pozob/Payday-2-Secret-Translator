import React from 'react';
import Character from './character';

const Characters = ({ handleOnClick }) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return characters.map(character => (
        <Character key={character} char={character} handleOnClick={handleOnClick} />
    ));
};

export default Characters;
