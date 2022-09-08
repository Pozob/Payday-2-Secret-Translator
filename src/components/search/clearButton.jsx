import React from 'react';

const ClearButton = ({ handleClick }) => {
    return (
        <button className='btn btn-success clear-btn' onClick={handleClick}>
            Clear Search
        </button>
    );
};

export default ClearButton;
