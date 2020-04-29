import React, { useState } from 'react';
import './linked-tab.css'

export default function LinkedTab({ link, title, options, colorStyle }) {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const toggleOptionsOpen = () => setOptionsOpen(!optionsOpen);

    const tabLinkClass = 'tabText ' + colorStyle;

    return (
        <div className='tab'>
            <div>
                <a className={tabLinkClass} href={link} onMouseEnter={toggleOptionsOpen} onMouseLeave={toggleOptionsOpen}>{title}</a>
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