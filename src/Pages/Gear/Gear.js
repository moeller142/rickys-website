import React from 'react';
import '../styles/pages.css'
import './gear.css';
import blanca from './photos/BLANCA.jpg';
import byron from './photos/BYRON.jpg';
import denaeys from './photos/DENAERYS.jpg';
import heartbreaker from './photos/HEARTBREAKER.jpg';
import isabelle from './photos/ISABELLE.jpg';
import lapsteel from './photos/LAPSTEEL.jpg';
import nomad from './photos/NOMAD.jpg';
import pedal_board from './photos/PEDALBOARD.jpg';
import ruby from './photos/RUBY.jpg';

export default function Gear() {

    return (
        <div className="page-container">
                <div className="grid-container">
                    <img className="blanca" src={blanca} alt='idk' />
                    <img className="byron" src={byron} alt='idk' />
                    <img className="denaeys" src={denaeys} alt='idk' />
                    <img className="heartbreaker" src={heartbreaker} alt='idk' />
                    <img className="isabelle" src={isabelle} alt='idk' />
                    <img className="lapsteel" src={lapsteel} alt='idk' />
                    <img className="nomad" src={nomad} alt='idk' />
                    <img className="pedal-board" src={pedal_board} alt='idk' />
                    <img className="ruby" src={ruby} alt='idk' />
                </div>

        </div>
    )
}