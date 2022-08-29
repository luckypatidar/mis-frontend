import React, { useState } from 'react';
import { Server_url } from '../../backend/config';

//material ui components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Container, CircularProgress } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

//icons used
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ErrorIcon from '@material-ui/icons/Error';

//background image
import Success from '../../assets/reset_success.png';
import Error from '../../assets/error_img.png';
import iiitsuratlogo from '../../assets/iiit_surat.png';
import iiitsuratlogodark from '../../assets/iiit_surat_dark.png';
import { useStyles } from './styles/PageStyles';


import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';
import { Redirect, useHistory } from 'react-router';
import axios from 'axios';


export default function Login() {

    //States/hooks
    const [email, setEmail] = useState('');
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const [showpass, setShow] = useState(false);
    const [fpass, setFpass] = useState(false);
    const [send, setSend] = useState(false);
    const [checked, setChecked] = useState(true);
    const [sendfail, setSendfail] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [checkedforgot, setCheckedForgot] = useState(false);
    const [fielderror, setFieldError] = useState('');
    const [open, setOpen] = useState(false);
    const [errormsg, setErrormsg] = useState('');
    const [fade, setFade] = useState(checked);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const history = useHistory();

    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;


    const dispatch = useDispatch();

    const handleShowPass = () => {
        showpass ? setShow(false) : setShow(true);
    }

    const handleForgot = () => {
        fpass ? setFpass(false) : setFpass(true);
        setSend(false);
        setSendfail(false);
    }

    const handleLogin = () => {

        if (username === "" && password === "") {
            setFieldError("! Please enter username or password");
            return;
        }

        dispatch(signin(username, password));
        if (error) {
            setOpen(true);
            console.log(error);
        }
        if (userInfo) {
            setOpen(true);
        }

        // login action should be triggered from here.
    }
    const handleSendLink = () => {
        console.log("Check for reset")
        setLoading2(true);
        axios.post(`${Server_url}/api/users/resetLink`,

            {
                email
            }).then((res) => {
                setLoading2(false);
                setSend(true);
            }).catch((e) => {
                setLoading2(false);
                setSendfail(true);
                if (e.response) {
                    console.log(e.response.data);
                    setErrormsg(e.response.data.error);
                }
            })
    }

    const handleChange = () => {
        setChecked((prev) => !prev);
        if (checked == true) {
            setFade(checked);
        } else {
            setFade(!checked);
        }
    };


    const classes = useStyles();
    return (
        <>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity={error ? "error" : ""} onClose={handleClose} style={{ align: 'center' }} >
                    <b>{error ? "Login Failed" : ""}</b><br />
                    {error ? error : ""}
                </Alert>
            </Snackbar>
            {
                <Grid container item direction="column" justify="center" alignItems="center" className={checked ? classes.root : classes.darkroot} >

                    <Container className={checked ? classes.cont : classes.darkcont} align="center" direction="column" >
                        <Fade in={fade} timeout={600}>
                            <img className={classes.clglogo} src={checked ? iiitsuratlogodark : iiitsuratlogo} alt="logo" />
                        </Fade>
                        <Fade in={fade} timeout={600}>
                            <Typography className={checked ? classes.heading : classes.darkheading}>

                                {fpass ? "Reset Password" : "MIS LOGIN"}

                            </Typography>
                        </Fade>

                        <Fade in={fade} timeout={600}>
                            <Grid container direction="column" justify="center" className={checked ? classes.box : classes.darkbox}>
                                {send || sendfail ? <Grid alignItems="center">{send ? <img alt="Success" className={classes.sentimage} src={Success} /> : <img alt="Success" className={classes.errorimage} src={Error} />}</Grid> : <>

                                    {fpass ? <Slide in={true} direction="up" timeout={300}>
                                        <Typography className={checked ? classes.fcontent : classes.darkfcontent}>
                                            Please enter your username or email address to
                                            get the link to reset your password.
                                        </Typography>
                                    </Slide> :
                                        <TextField
                                            variant="filled"
                                            label="USER NAME"
                                            className={checked ? classes.field : classes.darkfield}
                                            fullWidth="true"
                                            InputProps={{ disableUnderline: true }}
                                            onChange={(e) => {
                                                setUser(e.target.value)
                                                setFieldError("");
                                            }}
                                        />
                                    }

                                    {!fpass ?
                                        <TextField
                                            variant="filled"
                                            label="PASSWORD"
                                            className={checked ? classes.field : classes.darkfield}
                                            type={showpass ? "text" : "password"}
                                            onChange={(e) => {
                                                setPass(e.target.value)
                                                setFieldError("");
                                            }}
                                            InputProps={{
                                                endAdornment: <IconButton style={{ color: checked ? "#fff" : "#010101" }}
                                                    onClick={handleShowPass}>
                                                    {showpass ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>,
                                                disableUnderline: true
                                            }}
                                        />
                                        :
                                        <Slide in={true} direction="up" mountOnEnter unmountOnExit timeout={300}>
                                            <TextField
                                                variant="filled"
                                                label="ENTER USERNAME OR EMAIL"
                                                className={checked ? classes.field : classes.darkfield}
                                                fullWidth="true"
                                                InputProps={{ disableUnderline: true }}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Slide>
                                    }
                                </>
                                }

                                {
                                    !!fielderror && (
                                        <>
                                            <div style={{ display: 'flex' }}>
                                                <ErrorIcon style={{ fill: 'red' }} />
                                                <Typography className={checked ? classes.error : classes.darkerror}>{fielderror}</Typography>
                                            </div>
                                        </>
                                    )
                                }

                                {send || sendfail ? <Typography variant="h6" className={classes.link}>{sendfail ? errormsg : "Link Sent"}</Typography> : <Button
                                    variant="contained"
                                    className={checked ? classes.button : classes.darkbutton}
                                    endIcon={fpass ? null : <ArrowForwardIosIcon className={checked ? classes.buticon : classes.darkbuticon} style={{ fontSize: ".8em" }} />}
                                    onClick={fpass ? handleSendLink : handleLogin}
                                >
                                    {fpass ? <>{loading2 ? <CircularProgress style={{ color: "#000" }} size={24} /> : "Send Link"}</> : <>{loading ? <CircularProgress style={{ color: "#000" }} size={24} /> : "Log in"}</>}

                                </Button>}
                                <Typography className={checked ? classes.fpass : classes.darkfpass} onClick={handleForgot}>
                                    {fpass ? "Go Back" : "Forgotten Password?"}
                                </Typography>

                            </Grid>
                        </Fade>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={checked} onChange={handleChange}
                                    classes={{
                                        root: classes.switchroot,
                                        switchBase: classes.switchBase,
                                        thumb: classes.thumb,
                                        track: classes.track,
                                        checked: classes.checked
                                    }}
                                    checkedIcon={<Brightness2Icon fontSize="medium" />}
                                />
                            }
                            label=""
                        />
                    </Container>
                </Grid>
            }

            {userInfo && <Redirect to="/" />}
        </>
    );
}
