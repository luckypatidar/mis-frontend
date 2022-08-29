import React, { useState } from 'react';
import { Component } from 'react';
//material ui components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';
import Login_bg from '../../assets/login_bg.png';
import useStyles from './styles';

//components
import Announcement from '../../components/Announcement/Announcement';
import Courses from '../../components/Courses/Courses';
import Options from '../../components/Options/Options';
import Today from '../../components/Today/Today';
import Calender from '../../components/Calender/Calender';
import Sidebar from '../../components/Sidebar/Sidebar';
import Message from '../../components/Message/Message';
import CardMedia from '@material-ui/core/CardMedia';


import unauth from '../../assets/error_401.svg';


function Unauthorized() {

    const handleChange = () => {
        setChecked((prev) => !prev);
        console.log('changed');
    };
    const classes = useStyles();
    const [checked, setChecked] = useState(true);
    const [messageComponent, setMessageComponent] = useState(true);
    const [checkedforgot, setCheckedForgot] = useState(false);


    return (

        <>

            <div className={checked ? classes.root : classes.darkroot}>
                {/* <div>
                    <Sidebar checked={checked} onChange={handleChange} setMessageComponent={setMessageComponent} disbled={true} />
                </div> */}
                <div>
                    <div>
                        <Container className={classes.wrapper}>
                            <img src={unauth} alt="Page under construction" className={classes.responsive} />
                            <Typography className={classes.footer}>Unauthorized Access</Typography>
                        </Container>
                    </div>
                </div>
            </div>
        </>


    )
}
export default Unauthorized;
