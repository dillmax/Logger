import React from 'react';

const LoggerList = ({ loggerItems }) => {
    return(<div>
        <ul>
            {loggerItems.map((loggerItem) => {
                return <li key={loggerItem.id} >{loggerItem.name}</li>
            })}
            
        </ul>
    </div>)
}

export default LoggerList;