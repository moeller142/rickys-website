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
import backgroundImage from './assets/background_photo.jpg';

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
        },
        {
            link: '/',
            title: '',
            pageComponent: () => (<Home />)

        }

    ];

    const headerTabInfo = tabs.map(x => ({ link: x.link, title: x.title, subMenu: x.subMenu }))
    // let location = useLocation();
    // console.log('location', location);

    // const [isDarkPage, setIsDarkPage] = useState(false);
    // const [page, setPage] = useState('home');
    // const [appClass, setAppClass] = useState('')
    
    // useEffect(() => {
    //     setIsDarkPage(page !== 'home')
    // }, [page]);
    
    return (
        <div className='app photo-light'>
            <div className='content'>

            <Header tabInfo={headerTabInfo} />
            <div className='page-body'>
                <Router>
                    <div >
                        <Switch>
                            {tabs.map(tab => (
                                <Route path={tab.link}>
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

export default App;
