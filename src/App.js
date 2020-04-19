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
import logo from './assets/logo.jpg'
import LinkedTab from './components/linked-tab/linked-tab';
import Discography from './Pages/Discography/Discography';
import About from './Pages/about/about';
import Gear from './Pages/Gear/Gear';
import BackingTracks from './Pages/Backing-Tracks/backing-tracks';
import Media from './Pages/media/media';
import { Button } from '@material-ui/core';
import LinkedTab2 from './components/linked-tab/linked-tab2';
import Header from './components/header-bar/header';
import Header2 from './components/header-bar/header2';

function App() {


    const socialOptions = [
        {
            title: 'instagram',
            link: 'https://www.instagram.com/ricky_feria_music/?hl=en'
        },
        {
            title: 'facebook',
            link: 'https://www.facebook.com/RickyFeriaGuitar/?modal=admin_todo_tour',
        },
        {
            title: 'youtube',
            link: 'https://www.youtube.com/channel/UCL_E9INNCDg84_Cvx35ydHw?view_as=subscriber'
        }
    ];

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

    useEffect(() => {

        return () => {

        }
    }, [])

    return (
        <div className='app'>
            <Router>
                <Header/>
                {/* <div className='nav-bar'>
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
                        <LinkedTab2/>
                        <Button>CONTACT</Button>
                    </div>
                </div> */}
                <div className='page'>
                    <Switch>
                        <Route path='/events'>
                            <Events />
                        </Route>
                        <Route path='/discography'>
                            <Discography />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/gear'>
                            <Gear />
                        </Route>
                        <Route path='/backing-tracks'>
                            <BackingTracks />
                        </Route>
                        <Route path='/media'>
                            <Media />
                        </Route>
                        <Route path='/lessons'>
                            <Lessons />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>

    );
}

export default App;
