import React, { useEffect, useState } from 'react';
import './App.css';

import Events from './Pages/Events/events';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from 'react-router-dom';
import Lessons from './Pages/Lessons/lessons';
import Home from './Pages/Home/home';
import Discography from './Pages/Discography/Discography';
import About from './Pages/about/about';
import Gear from './Pages/Gear/Gear';
import Media from './Pages/media/media';
import Header from './components/header-bar/header';
import Footer from './components/footer-bar/footer';

export default function AppWithRouter() {
    return (
        <Router>
            <App/>
        </Router>
    )
}

function App() {
    const tabs = [
       
        {
            link: '/home',
            title: 'home',
            pageComponent: () => (<Home />)
        },
        {
            link: '/about',
            title: 'about',
            pageComponent: () => (<About />)
        },
        {
            link: '/discography',
            title: 'discography',
            pageComponent: () => (<Discography />),
            subMenu: ['conscious-pilot', 'rix', 'other']
        },
        // {
        //     link: '/backing-tracks',
        //     title: 'backing tracks',
        //     pageComponent: () => (<BackingTracks />)
        // },
        {
            link: '/lessons',
            title: 'lessons',
            pageComponent: () => (<Lessons />)
        },
        {
            link: '/events',
            title: 'events',
            pageComponent: () => (<Events />)
        },
        {
            link: '/gear',
            title: 'gear',
            pageComponent: () => (<Gear />)
        },
        {
            link: '/media',
            title: 'media',
            pageComponent: () => (<Media />)
        }
    ];
    const nonTabLink = [{
        link: '/',
        title: '',
        pageComponent: () => (<Home />)
    }];

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight();

    const headerTabInfo = tabs.map(x => ({ link: x.link, title: x.title, subMenu: x.subMenu }))
    let location = useLocation();

    const [appClass, setAppClass] = useState('app photo-light')
    
    useEffect(() => {
        const touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
        const isHome = location.pathname === '/home' || location.pathname === '/';
        var appClass = isHome ? 'app photo-light' : 'app photo-dark';
        if (!touchsupport) {
            appClass += ' non-touch';
        }
        setAppClass(appClass);
    }, [location]);
    
    return (
        <div className={appClass}>
            <div className='content'>

            <Header tabInfo={headerTabInfo} />
            <div className='page-body'>
                <Router>
                    <div >
                        <Switch>
                            {tabs.concat(nonTabLink).map(tab => (
                                <Route key={tab.title} path={tab.link}>
                                    {tab.pageComponent()}
                                </Route>
                            ))}
                        </Switch>
                    </div>

                </Router>
            </div>
            <Footer/>
            </div>

        </div>

    );
}
