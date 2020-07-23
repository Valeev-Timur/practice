import React from 'react';

const ButtonPhotoCategory = props => { 
    return (
        <button
        onClick = {props.onClick}
        disaibled={props.disaibled}
        >
            {props.children}
        </button>
    )
}
export default ButtonPhotoCategory;