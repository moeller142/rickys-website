import React from 'react';
import './linked-tab.css'

export default function LinkedTab({ sideMenu, link, title, options, colorStyle }) {
    const tabLinkClass = 'tabText ' + colorStyle;

    return (
    <div className='tab dropdown' >
        <div className='top-tab'>
            <a className={tabLinkClass} href={link}> {title} </a>
        </div>
        {options &&
            <div className='dropdown-content' > {
                options.map(option => (<a href={`${link}/${option}`} key={option}> {option} </a>
                ))
            } </div>
        }

    </div>
    );
}