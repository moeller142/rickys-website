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

    return (
        <div className='app'>
            <Router>
                <Header className="header"/>
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
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
