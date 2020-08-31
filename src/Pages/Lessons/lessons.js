import React, { useState } from 'react';
import '../styles/pages.css';
import './lessons.css';
import { Dialog, TextField, Select, InputLabel, MenuItem, createMuiTheme, ThemeProvider } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import emailjs from 'emailjs-com';
import './lessons.css';
import SmartTextField from '../../components/smart-text-field/smart-text-field';
import { sleep } from '../../services/utils';
import Button from '../../components/button/button';
import Switch from '../../components/switch/switch';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F09750',
        },
        secondary: {
            main: '#F09750',

        },
    },
});
const lessonText = `Learn guitar, bass, or study music theory and improvisation from the comfort of your own home.  Ricky Feria's online lessons are tailored to the individual, from beginner to advanced levels.

Lessons can be taught via Zoom and any sheet music and tabs are provided for the student.`

const textBoxVariant = 'filled';
export default function Lessons() {
    const instruments = ['guitar', 'bass', 'drums', 'music theory'];
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [instrument, setInstrument] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [message, setMessage] = useState('');
    const [reoccurringLesson, setReoccurringLesson] = useState(true);
    const [preferredDay, setPreferredDay] = useState('');
    const [sendingEmail, setSendingEmail] = useState(false);
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [showValidationMessage, setShowValidationMessage] = useState(false);

    const errors = [firstNameError, lastNameError, emailError];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setInstrument('');
        setDate(new Date());
        setTime(new Date());
        setMessage('');
        setReoccurringLesson(true);
        setPreferredDay('');
        setSendingEmail(false);
        setShowValidationMessage(false);
        setFirstNameError(true);
        setSubmitAttempted(false);
    }



    function sendEmail() {
        const emailConfig = {
            name: `${firstName} ${lastName}`,
            instrument,
            date: reoccurringLesson ? null : '',
            time: reoccurringLesson ? null : '',
            email,
            message,
            reoccurringLesson,
            preferredDay: reoccurringLesson ? preferredDay : '',
        }
        setSubmitAttempted(true);
        if (errors.some(e => e)) {
            setShowValidationMessage(true);
            return;
        }
        setShowValidationMessage(false);
        setSendingEmail(true);


        // console.log('SENDING EMAIL');
        // sleep(1000).then(() => {
        //     setSendingEmail(false);
        // })


        emailjs.send('gmail', 'ricky_lesson', emailConfig, 'user_bm3avkDlVWMcN83cU7dPN')
            .then((result) => {
                setSendingEmail(false);
                setOpen(false);
                resetForm();
            }, (error) => {
                setSendingEmail(false);
            });

    }

    return (
        <>
            <div className='title'>Lessons</div>
            <div className='text-wrapper font-large'>
                <div>Starting at $20.00</div>
                <br/>
                <div className='text-margin'>{lessonText}</div>
                <Button onClick={() => setOpen(true)} label='BOOK ONLINE LESSON'></Button>
            </div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='lesson-modal'>
                <div className='sub-title modal-title'>LESSON FORM</div>

                        <div className='form'>
                            {showValidationMessage && <div className='validation-message'>**Please correct the fields in red**</div>}
                            <span>
                                <SmartTextField className='input-field' required={true} validators={['required']} value={firstName} setValue={setFirstName} label={'First Name'} submitAttempted={submitAttempted} setError={setFirstNameError} />
                                <SmartTextField className='input-field' required={true} validators={['required']} value={lastName} setValue={setLastName} label={'Last Name'} submitAttempted={submitAttempted} setError={setLastNameError} />
                            </span>
                            <SmartTextField required={true} validators={['required', 'email']} value={email} setValue={setEmail} label={'Email'} submitAttempted={submitAttempted} setError={setEmailError} />
                            <div className='input-field'>
                                <InputLabel id="demo-simple-select-label">Instrument</InputLabel>
                                <Select
                                    value={instrument}
                                    onChange={(event) => setInstrument(event.target.value)}
                                >
                                    {
                                        instruments.map(i =>
                                            <MenuItem key={i} value={i}>{i}</MenuItem>
                                        )
                                    }
                                </Select>
                            </div>
                            <div className='input-field'>
                                    <Switch value={reoccurringLesson} setValue={setReoccurringLesson} leftOption='One Time' rightOption='Reoccurring'></Switch>
                            </div>
                            {reoccurringLesson &&
                                <div className='input-field'>
                                    <InputLabel>Which Day do you Prefer?</InputLabel>

                                    <Select
                                        value={preferredDay}
                                        onChange={(event) => setPreferredDay(event.target.value)}
                                    >{
                                            days.map(day => <MenuItem key={day} value={day}>{day}</MenuItem>)
                                        }
                                    </Select>
                                </div>
                            }
                            {!reoccurringLesson && <div>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    {/* <InputLabel>Preferred Date</InputLabel> */}

                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Preferred Date"
                                        value={date}
                                        onChange={(event) => setDate(event)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    {/* <InputLabel>Preferred Time</InputLabel> */}

                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Preferred Time"
                                        value={time}
                                        onChange={(event) => setTime(event)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>}

                            <div className='input-field'>
                                <InputLabel>What are you hoping to get from lessons?</InputLabel>
                                <TextField variant={textBoxVariant} multiline value={message} onChange={(event) => setMessage(event.target.value)} label='Message' />
                            </div>
                            <div className='modal-footer'>
                                <div>
                                    <Button disabled={sendingEmail} onClick={() => {
                                        setOpen(false);
                                        resetForm();
                                    }} label='Cancel'></Button>
                                
                                </div>
                                <div>
                                    <Button disabled={sendingEmail} onClick={() => sendEmail()} label='Submit'></Button>
                                </div>
                            </div>
                        </div>
                </div>
            </Dialog>
        </>
    )
}