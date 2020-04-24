import React, { useState } from 'react';
import './linked-tab.css'

export default function LinkedTab2({ link, title, options }) {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const toggleOptionsOpen = () => setOptionsOpen(!optionsOpen);

    return (
        <div class="dropdown">
            {/* <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div> */}
        </div>);
}