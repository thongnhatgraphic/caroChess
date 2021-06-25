import React from 'react';

function RowTable(props) {
    return (
        <>
            <tr>
                {props.children}
            </tr>
        </>
    );
}

export default RowTable;