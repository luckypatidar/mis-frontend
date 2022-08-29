import React, { useState } from 'react';
import {
    Link, useParams
} from "react-router-dom";
//material ui components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, Container, FormControlLabel, Snackbar, Switch } from '@material-ui/core';

import Slide from '@material-ui/core/Slide';

//icons used
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Brightness2Icon from '@material-ui/icons/Brightness2';

//background image
import reset from '../../assets/reset.png';
import iiitsuratlogo from '../../assets/iiit_surat.png';
import iiitsuratlogodark from '../../assets/iiit_surat_dark.png';
import { useStyles } from './styles/PageStyles';
import axios from 'axios';
import { Server_url } from '../../backend/config';
import Alert from '@material-ui/lab/Alert';


export default function Login(props) {
    const token = useParams();
    //States/hooks

    const [newPassword, setPass] = useState('');
    const [confirmNewPassword, setconfirmPass] = useState('');
    const [fpass, setFpass] = useState(false);
    const [checked, setChecked] = useState(false);

    const [loading, setLoading] = useState(false);
    const [showpass, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const handleShowPass = () => {
        setShow((prev) => !prev);
    }


    const handleSave = () => {
        setLoading(true);

        axios.put(`${Server_url}/api/users/resetPassword/${token.token}`,
            {
                newPassword,
                confirmNewPassword
            }).then((res) => {
                setFpass(true);
                setLoading(true);
            }).catch((e) => {
                setError(e.response.data.error);
                setOpen(true);
                setLoading(false);
            })

    }


    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const classes = useStyles();
    return (
        <>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="error" onClose={handleClose} >
                    <b>{"Login Failed"}</b><br />
                    {error && error}
                </Alert>
            </Snackbar>
            <Grid container item direction="column" justify="center" alignItems="center" className={checked ? classes.root : classes.darkroot}>


                <Container className={checked ? classes.cont : classes.darkcont} align="center" direction="column">
                    <img className={classes.clglogo} src={checked ? iiitsuratlogodark : iiitsuratlogo} alt="logo" />
                    <Typography className={checked ? classes.heading : classes.darkheading}>

                        {fpass ? "SUCCESS" : "New Password"}

                    </Typography>

                    <Grid container direction="column" justify="center" className={checked ? classes.box : classes.darkbox}>
                        {fpass ? <Grid>
                            <img alt="reset" className={classes.sentimage} src={reset} />
                        </Grid> : <>
                            <TextField
                                variant="filled"
                                type={showpass ? "text" : "password"}
                                label="ENTER NEW PASSWORD"
                                className={checked ? classes.field : classes.darkfield}
                                fullWidth="true"
                                InputProps={{
                                    endAdornment: <IconButton style={{ color: !checked ? "#010101" : "#fff" }}
                                        onClick={handleShowPass}>
                                        {showpass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>,
                                    disableUnderline: true
                                }}
                                onChange={(e) => setPass(e.target.value)}
                                required
                            />
                            <TextField
                                variant="filled"
                                type={showpass ? "text" : "password"}
                                label="CONFIRM NEW PASSWORD"
                                className={checked ? classes.field : classes.darkfield}
                                fullWidth="true"
                                InputProps={{
                                    endAdornment: <IconButton style={{ color: !checked ? "#010101" : "#fff" }}
                                        onClick={handleShowPass}>
                                        {showpass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>,
                                    disableUnderline: true
                                }}

                                onChange={(e) => setconfirmPass(e.target.value)}
                                required
                            />
                        </>}

                        {fpass ? <div style={{ overflow: "hidden" }}>

                            <Typography variant="h6" className={checked ? classes.link : classes.darklink}>Password changed succesfully.</Typography>

                            <Slide in={true} direction="up" timeout={300}>
                                <Link to="/">
                                    <Button
                                        variant="contained"
                                        className={checked ? classes.button : classes.darkbutton}
                                        endIcon={<ArrowForwardIosIcon className={checked ? classes.buticon : classes.darkbuticon} style={{ fontSize: ".8em" }} />}
                                    >
                                        Login
                                </Button>
                                </Link>
                            </Slide>
                        </div> :
                            <>

                                <Button
                                    variant="contained"
                                    className={checked ? classes.button : classes.darkbutton}
                                    endIcon={fpass ? null : <ArrowForwardIosIcon className={checked ? classes.buticon : classes.darkbuticon} style={{ fontSize: ".8em" }} />}
                                    onClick={handleSave}
                                >

                                    {loading ? <CircularProgress style={{ color: !checked ? "#fff" : "#010101" }} size={24} /> : "Save"}
                                </Button>
                                <Link style={{
                                    color: "#B3B3D3"
                                }}
                                    to="/">Go Back</Link>

                            </>
                        }


                    </Grid>

                </Container>
                <FormControlLabel
                    control={<Switch
                        classes={{
                            root: classes.switchroot,
                            switchBase: classes.switchBase,
                            thumb: classes.thumb,
                            track: classes.track,
                            checked: classes.checked
                        }}
                        checked={checked}
                        onChange={handleChange}
                        checkedIcon={<Brightness2Icon fontSize="medium" />}
                    />}
                    label=""
                />
            </Grid>
        </>
    );
}
