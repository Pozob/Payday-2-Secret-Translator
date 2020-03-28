import React from 'react';

const ReverseButton = ({ handleClick }) => {
    return (
        <button className='btn btn-primary' onClick={handleClick}>
            Reverse Search
        </button>
    );
};

export default ReverseButton;
