import React from 'react';
import '../styles/pages.css'
import { aboutText } from './about-text';
import photo from '../../assets/rix-werkout.jpg';
import './about.css'

export default function About() {
    return (
        <div>
            <div className='title'>about</div>
            <div className='about-wrapper'>
                <div className='about-element about-text'>
                    {aboutText}
                </div>
            </div>
        </div>

    )
}