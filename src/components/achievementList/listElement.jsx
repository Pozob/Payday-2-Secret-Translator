import React from 'react';

const ListElement = ({ data, onClick }) => {
    return (
        <li className='list-element' onClick={() => onClick(data)}>
            <span className='element-title'>{data.name}</span>
            <div className='element-desc'>{data.text}</div>
        </li>
    );
};

export default ListElement;
