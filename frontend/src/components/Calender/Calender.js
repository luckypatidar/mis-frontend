
import React, { useState } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import './Calender.style.css';


const useStyles = makeStyles((theme) => ({
    root: {

    },
    box: {
        backgroundColor: 'rgba(32, 33, 53, 1)',
        width: '100%',
        borderRadius: '16px',
        padding: '0.4rem'
    },
    heading: {
        color: "#fff",
        fontWeight: 500,
    },

    ////dark theme
    darkheading: {
        color: "#20213D",
        fontWeight: 500,
    },
    darkbox: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '16px',
        padding: '1rem',
    },
}))

export default function Calender({ checked }) {

    const [value, onChange] = useState(new Date());

    const classes = useStyles();
    return (
        <>

            <Container  >
                <h2 className={checked ? classes.heading : classes.darkheading}>Calender</h2>
                <Container className={checked ? classes.box : classes.darkbox}>
                    <div >
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </Container>
            </Container>

        </>
    )
}
