import React, { useEffect } from 'react';
import './App.css';

import Events from './Pages/Events/events';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Lessons from './Pages/Lessons/lessons';
import Home from './Pages/Home/home';
import Discography from './Pages/Discography/Discography';
import About from './Pages/about/about';
import Gear from './Pages/Gear/Gear';
import BackingTracks from './Pages/Backing-Tracks/backing-tracks';
import Media from './Pages/media/media';
import Header from './components/header-bar/header';
import Footer from './components/footer-bar/footer';

function App() {
    const tabs = [
        {
            link: '/home',
            title: 'home',
            pageComponent: () => (<Home/>)
        },
        {
            link: '/discography',
            title: 'discography',
            pageComponent: () => (<Discography />)
        },
        {
            link: '/about',
            title: 'about',
            pageComponent: () => (<About />)
        },
        {
            link: '/lessons',
            title: 'lessons',
            pageComponent: () => (<Lessons />)
        },
        {
            link: '/gear',
            title: 'gear',
            pageComponent: () => (<Gear />)
        },
        {
            link: '/backing-tracks',
            title: 'backing tracks',
            pageComponent: () => (<BackingTracks />)
        },
        {
            link: '/media',
            title: 'media',
            pageComponent: () => (<Media />)
        },
        {
            link: '/events',
            title: 'events',
            pageComponent: () => (<Events />)
        }
    ];

    const headerTabInfo = tabs.map(x => ({link: x.link, title: x.title}))

    return (
        <div className='app'>
            <Router>
                <Header tabInfo={headerTabInfo} className="header" />
                <div className='page'>
                    <Switch>
                        {tabs.map(tab => (
                            <Route path={tab.link}>
                                {tab.pageComponent()}
                            </Route>
                        ))}
                    </Switch>
                </div>

            </Router>
                <Footer />
        </div>

    );
}

export default App;
