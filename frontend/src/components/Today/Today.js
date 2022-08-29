
import React from 'react'
import { Container } from '@material-ui/core';
import useStyles from './styles';

export default function Today({ checked }) {

    const classes = useStyles();
    return (
        <>
            <Container className={classes.root}>
                <h2 className={checked ? classes.heading : classes.darkheading} >Today</h2>
                <Container className={checked ? classes.box : classes.darkbox}>

                </Container>
            </Container>
        </>
    )
}