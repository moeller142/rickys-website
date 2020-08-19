import React from 'react';
import '../styles/pages.css'    
import { aboutText } from './about-text';
import './about.css'

export default function About() {
    return (
        <div>
            <div className='title'>about</div>
            <div className='text-wrapper font-large'>
                    {aboutText}
            </div>
        </div>

    )
}