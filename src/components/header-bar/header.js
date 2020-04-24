import React, { useEffect, useState } from 'react';
import LinkedTab from '../linked-tab/linked-tab'
import logo from '../../assets/logo.jpg'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import './header.css';
export default function Header() {
    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        return width;
    };
    const [width, setWidth] = useState(getWindowDimension());
    const [sideMenuOpen, openSideMenuOpen] = useState(false);

    const handleResize = () => {
        setWidth(getWindowDimension())
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize, false)
    }, []);


    const minLargeWidth = 1200;

    const projects = [
        {
            title: 'conscious pilot',
        },
        {
            title: 'rix'
        },
        {
            title: 'ricky feria trio'
        }
    ]

    if (width > minLargeWidth) {
        return (
            <div className='nav-bar'>
                    <img className='logo' src={logo} alt='idk' />
                <div className='tabs'>
                    <LinkedTab link='/Home' title='home'></LinkedTab>
                    <LinkedTab link='/Discography' title='discography' options={projects}></LinkedTab>
                    <LinkedTab link='/About' title='about'></LinkedTab>
                    <LinkedTab link='/Lessons' title='lessons'></LinkedTab>
                    <LinkedTab link='/gear' title='gear'></LinkedTab>
                    <LinkedTab link='/backing-tracks' title='backing tracks'></LinkedTab>
                    <LinkedTab link='/Media' title='media'></LinkedTab>
                    <LinkedTab link='/Events' title='events'></LinkedTab>
                </div>
            </div>)
    } else {

            return (<>
                <Drawer anchor='right' open={sideMenuOpen} onClose={() => openSideMenuOpen(false)}>
                   <div className="hamburger-menu">
                       Test
                       </div> 
                </Drawer>
                <div className='nav-bar'>
                    <div>
                        <img className='logo' src={logo} alt='idk' />
                    </div>
                    <div className='tabs'>
                        {/* <button onClick={() => openSideMenuOpen(true)}> */}
                            <MenuIcon onClick={() => openSideMenuOpen(true)} className='tab' fontSize='large' />
                        {/* </button> */}
                    </div>
                </div>
                </>
            );
    }
}