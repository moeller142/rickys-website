import React from 'react';
import '../styles/pages.css';
import './home.css';
import main2 from '../../assets/main_photo.jpg';

export default function Home() {

    return (<div>
        <img className='main-photo' src={main2} alt='main'/>
    </div>)
}