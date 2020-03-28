import React from 'react';

const SearchInput = ({ handleInput, value }) => {
    return (
        <React.Fragment>
            <input
                type='text'
                // onChange={handleInput}
                onChange={e => handleInput(e.currentTarget.value)}
                // onKeyUp={handleInput}
                value={value}
                className='form-control'
                placeholder='Click the Buttons below'
            />
        </React.Fragment>
    );
};

export default SearchInput;
