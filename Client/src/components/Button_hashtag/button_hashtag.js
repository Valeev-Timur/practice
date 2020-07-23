import React from 'react';

const ButtonHastag = props => { 
    return (
        <button
        onClick = {props.onClick}
        disaibled={props.disaibled}
        >
            {props.children}
        </button>
    )
}
export default ButtonHastag;