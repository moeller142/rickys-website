import React from 'react';
import './switch.css';

export default function Switch({ value, setValue, leftOption, rightOption }) {

    return (
        <div className='switch-wrapper'>
            <div>
                {leftOption}
            </div>
            <label className="switch">
                <input type="checkbox" checked={value} onChange={(e) => setValue(e.target.checked)} />
                <span className="slider round"></span>
            </label>
            <div>
                {rightOption}
            </div>
        </div>
    );
}