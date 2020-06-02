import React, { useState } from 'react';
import './linked-tab.css'

export default function LinkedTab({ sideMenu, link, title, options, colorStyle }) {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const toggleOptionsOpen = () => {
        setOptionsOpen(!optionsOpen);
        console.log('toggle', optionsOpen, options);

    }

    const tabLinkClass = 'tabText ' + colorStyle;

    // <h2>Topics</h2>
    //   <ul>
    //     <li>
    //       <Link to={`${url}/conscious-pilot`}>Rendering with React</Link>
    //     </li>
    //     <li>
    //       <Link to={`${url}/rix`}>Components</Link>
    //     </li>
    //     <li>
    //       <Link to={`${url}/other`}>Props v. State</Link>
    //     </li>
    //   </ul>

    

    return ( <div className = 'tab dropdown' >
        <div>
        <a className = { tabLinkClass }href = { link }> { title } </a> 
        </div> 
        { options &&
                <div className = 'dropdown-content' > {
                    options.map(option => ( <a href = { `${link}/${option}` } > { option } </a>
                    ))
                } </div>
        }

        </div>
        );
    }