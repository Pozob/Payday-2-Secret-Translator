import React from 'react';
import alphabet from '../../../alphabet.svg'

const Character = ({ char, handleOnClick }) => {
    // console.log(alphabet);
    return (
        <span className='character' onClick={() => handleOnClick(char)}>
            <svg alt={char}>
                <use xlinkHref={`${alphabet}#${char}`}></use>
            </svg>
            <span>{char}</span>
        </span>
    );
};

export default Character;
