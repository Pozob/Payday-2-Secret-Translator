import React from 'react';
import '../../../alphabet.svg'

const Character = ({ char, handleOnClick }) => {
    return (
        <span className='character' onClick={() => handleOnClick(char)}>
            <svg alt={char}>
                <use xlinkHref={`/alphabet.svg#${char}`}></use>
            </svg>
            <span>{char}</span>
        </span>
    );
};

export default Character;
