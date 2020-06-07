import React, { useEffect, useState } from 'react';
import './events.css';
import '../styles/pages.css'

const testData = [
    {
        date: '1/2/20',
        event: 'resonance music festival',
        project: 'Conscious Pilot',
        location: 'Slippery Rock, Pennsylvania',
        link: 'https://google.com'
    },
    {
        date: '1/2/20',
        event: 'St Fattys Day',
        project: 'Conscious Pilot',
        location: 'Woodlands Tavern',
        link: 'https://google.com'
    },
    {
        date: '1/3/20',
        event: 'Other event',
        project: 'Ricky Feria Trio',
        location: 'The Summit',
        link: 'https://google.com'
    }
]

export default function Events() {
    const [state, setState] = useState([]);

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
        
    }, [width]);

    // https://docs.google.com/spreadsheets/d/e/2PACX-1vTPzVCSpk2gZ0PGb0iZGX1M5hawDgMsRGpBW0pQCa9NpVAO0hkztu6bGqfHcYTaOHBIG9HzjauyO9jD/pubhtml

    useEffect(() => {
        setState(testData);
        // Tabletop.init({
        //     key: '1NzkJHy0XFj_i3-NZR8yN6j1kShYJREU3xG5mVuOfGuA',
        //     callback: googleData => {
        //         setState(googleData);
        //     },
        //     simpleSheet: true
        // })
    }, []);

    function onClick(link) {
        var win = window.open(link, '_blank');
        win.focus()
    }

    const fullTable = (state) => {
       return (
            <table className='eventWrapper font-large'>
                    {
                        state.map(event=>(
                        <tr onClick={() => onClick(event.link)} className='rowWrapper' key={event.event}>
                            <td></td>
                            <td>{event.project}</td>
                            <td>{event.date}</td>
                            <td className='event-title' >{event.event}</td>
                            <td>{event.location}</td>
                        </tr>))
                    }
                </table>
        )
    };

    const smallTable = (state) => (
        <div className='eventWrapper font-large'>
            {
                state.map(event =>(
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
        {reactiveTable(state, width)}
    </>)
}