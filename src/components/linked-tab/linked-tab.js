import React, { useState } from 'react';
import './linked-tab.css'
export default function LinkedTab({ sideMenu, link, title, options, colorStyle }) {
    const tabLinkClass = 'tabText ' + colorStyle;
    const [showOptions, setShowOptions] = useState(false);
    const formatLabel = (label) =>  label.replace('-', ' ');
    const renderLinkIfNoOptions = () => {
        if (!options) {
            return (<a className={tabLinkClass} href={link}> {title} </a>)
        } else {
            return (
                <div className={sideMenu ? 'side-tab': ''}>
                    <span className={tabLinkClass}>{formatLabel(title)}</span>
                    {sideMenu && options && showOptions && <i className="material-icons dark">keyboard_arrow_up</i>}
                    {sideMenu && options && !showOptions && <i className="material-icons dark">keyboard_arrow_down</i>}
                </div>
            )
        }
    }

    if (!sideMenu) {
        return (
            <div className='dropdown' >
                <div className='top-tab side-tab'>
                    {renderLinkIfNoOptions()}
                </div>
                {options &&
                    <div className='dropdown-content' > {
                        options.map(option => (<a href={`${link}/${option}`} key={option}> {formatLabel(option)} </a>
                        ))
                    } </div>
                }

            </div>
        );
    } else {
        return (
            <>
                <div className='top-tab' onClick={() => setShowOptions(!showOptions)} >
                    {renderLinkIfNoOptions()}
                </div>
                {
                    options && showOptions && options.map(option => (<a className='side-option' href={`${link}/${option}`} key={option}> {formatLabel(option)} </a>))

                }
            </>
        )
    }
}