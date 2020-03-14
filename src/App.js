import React, { useEffect } from 'react';
import './App.css';

import Events from './Events/events';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Lessons from './Lessons/lessons';
import SideProjects from './Side-Projects/side-projects';
import Home from './Home/home';
import Tabletop from 'tabletop';
import logo from './assets/logo.jpg'

function App() {

    useEffect(() => {

        return () => {
            
        }
    }, [])

// https://docs.google.com/spreadsheets/d/e/2PACX-1vTPzVCSpk2gZ0PGb0iZGX1M5hawDgMsRGpBW0pQCa9NpVAO0hkztu6bGqfHcYTaOHBIG9HzjauyO9jD/pubhtml
    return (
        <Router>
            <div className="app-bar">
            <img src={logo} alt='idk'/>
                <div className="tab">
                    <a className="tabLink" href="/Home">home</a>
                </div>
                <div className="tab">
                    <a className="tabLink" href="/events">Events</a>
                </div>
                <div className="tab">
                    <a className="tabLink" href="/projects">Projects</a>
                </div>
                <div className="tab">
                    <a className="tabLink" href="/lessons">Lessons</a>
                </div>
            </div>
            <Switch>
                <Route path="/events">
                    <Events />
                </Route>
                <Route path="/projects">
                    <SideProjects />
                </Route>
                <Route path="/lessons">
                    <Lessons />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
