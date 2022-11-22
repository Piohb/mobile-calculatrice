import React from 'react';

function Button({number, clickEvent}) {
    
    return (
        <button onClick={ () => clickEvent(number)}>{number}</button>
    )
}

export default Button;