import React, { useEffect } from 'react';
import './App.css';

import Events from './Events/events';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Lessons from './Lessons/lessons';
import SideProjects from './Side-Projects/side-projects';
import Home from './Home/home';
import Tabletop from 'tabletop';
import logo from './assets/logo.jpg'
import LinkedTab from './components/linked-tab/linked-tab';

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
    ]

    useEffect(() => {

        return () => {

        }
    }, [])

    return (
        <div className='app'>
            <Router>
                <div className='nav-bar'>
                    <div>
                        <img className='logo' src={logo} alt='idk' />
                    </div>
                    <div className='tabs'>
                        <LinkedTab link='/Home' title='home'></LinkedTab>
                        <LinkedTab link='/Home' title='social' options={socialOptions}></LinkedTab>
                        <LinkedTab link='/Events' title='events'></LinkedTab>
                        <LinkedTab link='/Projects' title='projects'></LinkedTab>
                        <LinkedTab link='/Lessons' title='lessons'></LinkedTab>
                    </div>
                </div>
                <div className='page'>
                    <Switch>
                        <Route path='/events'>
                            <Events />
                        </Route>
                        <Route path='/projects'>
                            <SideProjects />
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
