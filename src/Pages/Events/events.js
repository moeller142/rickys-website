import React, { useEffect, useState } from 'react';
import './events.css';
import '../styles/pages.css'
import { initEventsSheet } from '../../services/google-sheet.service';
import { CircularProgress } from '@material-ui/core';

const NO_EVENTS = 'No events scheduled at this time';

export default function Events() {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);

    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        return width;
    };
    const [width, setWidth] = useState(getWindowDimension());

    useEffect(() => {
        const handleResize = () => setWidth(getWindowDimension());
        handleResize();
        window.addEventListener('resize', handleResize, false)
    }, []);

    useEffect(() => {
        setLoading(true);
        initEventsSheet(setState);
    }, []);

    useEffect(() => {
        if (state.length) {
            setLoading(false);
        }
    }, [state]);

    function onClick(link) {
        if (link) {
            var win = window.open(link, '_blank');
            win.focus()
        }
    }

    const fullTable = (state) => 
        (
            state.length && 
                <table className='eventWrapper font-large'>
                {
                    state.map(event => (
                        <tr onClick={() => onClick(event.link)} className='rowWrapper' key={event.event}>
                            <td></td>
                            <td>{event.project}</td>
                            <td>{event.date}</td>
                            <td className='event-title' >{event.event}</td>
                            <td>{event.location}</td>
                        </tr>))
                }
            </table>
        );

    const smallTable = (state) => (
        <div className='eventWrapper font-large'>
            {
                state.map(event => (
                    <div onClick={() => onClick(event.link)} className='rowWrapper small-row-wrapper'>
                        <div className='left-side'> {event.date} </div>
                        <div className='right-side'>
                            <div className='event-title'>{event.event}</div>
                            <div>{event.location}</div>
                            <div className='font-small'>{event.project}</div>
                        </div>
                    </div>

                ))
            }
        </div>
    );


    const reactiveTable = (state, width) => {
        if (width > 1000) {
            return fullTable(state)
        } else {
            return (smallTable(state))
        }
    };

    return (<>
        <div className='title'>Events</div>
        {state.length && reactiveTable(state, width)}
        {loading &&
        <div className="loading-spinner">
            <CircularProgress />
        </div>
        }
        {!state.length && !loading &&
            <div>
                {NO_EVENTS}
            </div>
        }
    </>)
}