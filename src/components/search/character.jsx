import React from 'react';
import '../../icons/alphabet/index.svg';

const Character = ({ char, handleOnClick }) => {
    return (
        <span className='character' onClick={() => handleOnClick(char)}>
            <svg alt={char}>
                <use xlinkHref={`icons/alphabet/index.svg#${char}`}></use>
            </svg>
            <span>{char}</span>
        </span>
    );
};

export default Character;
