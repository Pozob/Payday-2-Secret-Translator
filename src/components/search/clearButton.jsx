import React from 'react';

const ClearButton = ({ handleClick }) => {
    return (
        <button className='btn btn-success' onClick={handleClick}>
            Clear Search
        </button>
    );
};

export default ClearButton;
