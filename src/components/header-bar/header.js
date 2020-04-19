import React, { useEffect, useState } from 'react';
import LinkedTab from '../linked-tab/linked-tab'
import logo from '../../assets/logo.jpg'
import LinkedTab2 from '../linked-tab/linked-tab2'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        // const height = window.innerHeight
        //           || document.documentElement.clientHeight
        //           || document.body.clientHeight;
        // return {width, height}
        return width;
    };
    const [width, setWidth] = useState(getWindowDimension());

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

    const mediaTypes = [
        {
            title: 'pictures'
        },
        {
            title: 'videos'
        }
    ]

    if (width > minLargeWidth) {
        return (
            <div className='nav-bar'>
                <div>
                    <img className='logo' src={logo} alt='idk' />
                </div>
                <div className='tabs'>
                    <LinkedTab link='/Home' title='home'></LinkedTab>
                    <LinkedTab link='/Discography' title='discography' options={projects}></LinkedTab>
                    <LinkedTab link='/About' title='about'></LinkedTab>
                    <LinkedTab link='/Lessons' title='lessons'></LinkedTab>
                    <LinkedTab link='/gear' title='gear'></LinkedTab>
                    <LinkedTab link='/backing-tracks' title='backing tracks'></LinkedTab>
                    <LinkedTab link='/Media' title='media'></LinkedTab>
                    <LinkedTab link='/Events' title='events'></LinkedTab>
                    {/* <LinkedTab2/> */}
                    {/* <Button>CONTACT</Button> */}
                </div>
            </div>)
    } else {
        return (
            <div className='nav-bar'>
                <div>
                    <img className='logo' src={logo} alt='idk' />
                </div>
                <div className='tab'>
                    <MenuIcon fontSize='large'/>
                </div>
            </div>
        );
    }

    // return (
    //     <div className='nav-bar'>
    //         <div>
    //             <img className='logo' src={logo} alt='idk' />
    //         </div>
    //         <div className='tabs'>

    //             <MenuIcon />
    //             <LinkedTab link='/Home' title='home'></LinkedTab>
    //             <LinkedTab link='/Discography' title='discography' options={projects}></LinkedTab>
    //             <LinkedTab link='/About' title='about'></LinkedTab>
    //             <LinkedTab link='/Lessons' title='lessons'></LinkedTab>
    //             <LinkedTab link='/gear' title='gear'></LinkedTab>
    //             <LinkedTab link='/backing-tracks' title='backing tracks'></LinkedTab>
    //             <LinkedTab link='/Media' title='media'></LinkedTab>
    //             <LinkedTab link='/Events' title='events'></LinkedTab>
    //             {/* <LinkedTab2/> */}
    //             <Button>CONTACT</Button>
    //         </div>
    //     </div>)
}