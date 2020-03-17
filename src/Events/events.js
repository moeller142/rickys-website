import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './events.css';
import { Button } from '@material-ui/core';

const testData = [
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

    function FormRow(data) {
        function onClick(link) {
            var win = window.open(link, '_blank');
            win.focus()
        }
        return (
            <React.Fragment >
                <Grid item xs={3}>
                    <Paper>{data.data.date}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>{data.data.event}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>{data.data.project}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>{data.data.location}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={() => onClick(data.data.link)}>asdf</Button>
                </Grid>
            </React.Fragment>
        );
    }

    return (<>
        <div className='header'>Events</div>
        <div className='root'>
            {state.length && state.map((event, index) => (
                // <Grid key={index} container spacing={1}>
                    <Grid key={index} container item xs={5} spacing={1}>
                        <FormRow className='row'  data={event} />
                    </Grid>
                // </Grid>
            ))}
        </div>
    </>)
}