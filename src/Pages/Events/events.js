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

    useEffect(() => {
        console.log(state);
    }, [state])

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
    return (<>
        <div className='title'>Events</div>
        <table className='eventWrapper font-large'>
            {
                state.map(event=>(
                <tr onClick={() => onClick(event.link)} className='rowWrapper' key={event.event}>
                    <td>{event.project}</td>
                    <td>{event.date}</td>
                    <td className='event-title' >{event.event}</td>
                    <td>{event.location}</td>
                </tr>))
            }
        </table>
    
    </>)
}