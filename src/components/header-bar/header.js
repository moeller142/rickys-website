import React, { useEffect, useState } from 'react';
import LinkedTab from '../linked-tab/linked-tab'
// import logo from '../../assets/logo.jpg'
import logo from '../../assets/logo_new.png';

import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import './header.css';
export default function Header({ tabInfo, setPage }) {
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

    const topMenu = (tabs) => tabs.map(tab =>
                <LinkedTab colorStyle='dark' sideMenu={false} link={tab.link} title={tab.title} options={tab.subMenu}/>);

    const sideMenu = () => <MenuIcon onClick={() => openSideMenuOpen(true)} className='tab' fontSize='large' />;

    let displayTabs;
    if (width > minLargeWidth) {
        displayTabs = topMenu;
    } else {
        displayTabs = sideMenu;
    }

    return (
        <>
            <Drawer anchor='right' open={sideMenuOpen} onClose={() => openSideMenuOpen(false)}>
                <div className="hamburger-menu">
                    {tabInfo.map(tab => <LinkedTab sideMenu={true} link={tab.link} title={tab.title} colorStyle='light' options={tab.subMenu}/>)}
                </div>
            </Drawer>
            <div className='nav-bar'>
                <img className='logo' src={logo} alt='idk' />
                <div className='tabs'>
                    {displayTabs(tabInfo)}
                </div>
            </div>
        </>
    )
}