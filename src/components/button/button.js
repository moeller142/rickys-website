import React from 'react';
import './button.css';

export default function Button({disabled, onClick, label}) {

    return (
        <button className='button-style' disabled={disabled} onClick={onClick}>{label}</button>
    )
}