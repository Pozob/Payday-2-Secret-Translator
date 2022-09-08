import React from 'react';
import ListElement from './listElement';

const List = ({ listData, handleOnClick, ...rest }) => {
    return (
        <React.Fragment>
            <ul>
                {listData.map(data => (
                    <ListElement key={data.name} onClick={handleOnClick} data={data} />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default List;
