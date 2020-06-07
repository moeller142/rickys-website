import React, { useEffect, useState } from 'react';
import LinkedTab from '../linked-tab/linked-tab'
import logo from '../../assets/logo_new.png';
import small_logo from '../../assets/small_logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import './header.css';
export default function Header({ tabInfo }) {
    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        return width;
    };
    const [width, setWidth] = useState(getWindowDimension());
    const [sideMenuOpen, openSideMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(getWindowDimension())
        };
        handleResize();
        window.addEventListener('resize', handleResize, false)
    }, []);


    const topMenu = (tabs) => tabs.map(tab =>
                <LinkedTab colorStyle='light' key={tab.title} sideMenu={false} link={tab.link} title={tab.title} options={tab.subMenu}/>);

    const sideMenu = () => <MenuIcon onClick={() => openSideMenuOpen(true)} className='hamburger-button ' fontSize='large' />;

    const displayTabs = (width) => {
        if(width > 1200) {
            return topMenu;
        } else {
            return sideMenu;
        }
    }

    const reactiveLogo = (width) => {
        if(width > 600) {
            return (<img className='logo' src={logo} alt='idk'/>)
        } else {
            return (<img className='small-logo' src={small_logo} alt='idk'/>)
        }
    }

    return (
        <>
            <Drawer anchor='right' open={sideMenuOpen} onClose={() => openSideMenuOpen(false)}>
                <div className="hamburger-menu">
                    {tabInfo.map(tab => <LinkedTab key={tab.title} sideMenu={true} link={tab.link} title={tab.title} colorStyle='dark' options={tab.subMenu}/>)}
                </div>
            </Drawer>
            <div className='nav-bar'>
                <a key='logo' href='/home'>
                    {reactiveLogo(width)}
                </a>
                <div className='tabs'>
                    {displayTabs(width)(tabInfo)}
                </div>
            </div>
        </>
    )
}