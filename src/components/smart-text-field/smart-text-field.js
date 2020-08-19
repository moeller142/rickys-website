import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { isNullUndefinedEmptStg } from '../../services/utils';

const defaultVariant = 'filled';
export const validatorFns = {
    required: {
        validate: (value) => isNullUndefinedEmptStg(value)
    },
    email: {
        validate: (value) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return !re.test(String(value).toLowerCase());
        }
    }
};
export default function SmartTextField({validators, value, setValue, label, submitAttempted, required, setError}) {

    const [blurred, setBlurred] = useState(false);
    const [showError, setShowError] = useState(false);
    // const [error, setError] = useState(false);
    useEffect(() => {
        const e = validators.some(validator => validatorFns[validator].validate(value))
        setError(e);
        if(blurred || submitAttempted) {
            setShowError(e)
        }
    }, [value, blurred, submitAttempted, validators, setError]) 
    
    return (
    <TextField 
        variant={defaultVariant} 
        error={showError} 
        required={required}
        value={value} 
        onBlur={() => setBlurred(true)}
        onChange={(event) => setValue(event.target.value)} 
        label={label} 
    />
    );

}