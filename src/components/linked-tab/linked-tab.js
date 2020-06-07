import React, { useState } from 'react';
import './linked-tab.css'

export default function LinkedTab({ sideMenu, link, title, options, colorStyle }) {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const toggleOptionsOpen = () => {
        setOptionsOpen(!optionsOpen);
        console.log('toggle', optionsOpen, options);

    }

    const tabLinkClass = 'tabText ' + colorStyle;

    return (
    <div className='tab dropdown' >
        <div className='top-tab'>
            <a className={tabLinkClass} href={link}> {title} </a>
        </div>
        {options &&
            <div className='dropdown-content' > {
                options.map(option => (<a href={`${link}/${option}`} > {option} </a>
                ))
            } </div>
        }

    </div>
    );
}