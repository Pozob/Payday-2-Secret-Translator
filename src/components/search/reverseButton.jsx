import React from 'react';

const ReverseButton = ({ handleClick }) => {
    return (
        <button className='btn btn-primary reverse-btn' onClick={handleClick}>
            Reverse Search
        </button>
    );
};

export default ReverseButton;
