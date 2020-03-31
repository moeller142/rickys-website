import React, { useState } from 'react';
import './linked-tab.css'

export default function LinkedTab({ link, title, options }) {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const toggleOptionsOpen = () => setOptionsOpen(!optionsOpen);

    return (
        <div className='dropdown'>
            <div className='tab'>
                <a className='tabLink' href={link} onMouseEnter={toggleOptionsOpen} onMouseLeave={toggleOptionsOpen}>{title}</a>
            </div>
            {
                options &&
                <div className='dropdown-content'>
                    {options.map(option => (
                        <div className='option' key={option.title}>
                            {option.title}
                        </div>
                    ))}
                </div>
            }

        </div>);
}