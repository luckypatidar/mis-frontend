import React, { useState } from 'react'
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Snackbar, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import { Server_url } from '../../backend/config';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import Calender from '../../components/Calender/Calender';
import Today from '../../components/Today/Today';


export default function Messagebox({ checked, userInfo }) {

    const [subject, setSub] = useState(null);
    const [msgtype, setMsgType] = useState(null);
    const [body, setBody] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const classes = useStyles();



    const handleSend = async () => {
        setLoading(true);
        //   console.log(userInfo)
        if (subject === null || body === null || msgtype === null) {
            setError("Please fill all fields!!!");
            setOpen(true);
            setLoading(false);
            return;
        }
        await axios.post(`${Server_url}/api/contact`,
            {
                subject,
                messageType: msgtype,
                body
            },
            {
                headers: {
                    Authorization: "Bearer " + userInfo.token,
                },
            }).then((res) => {
                setError(null);
                setOpen(true);
                setLoading(false);
                setSub(null);
                setMsgType(null);
                setBody(null);
                // console.log(res);
            }).catch((e) => {
                setOpen(true);
                setError(e.response.data.error);
            })
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity={error ? "error" : "success"} onClose={handleClose} >
                    <b>{error ? error : "Sent"}</b><br />
                </Alert>
            </Snackbar>


            <Container className={checked ? classes.root : classes.darkroot}>
                <Container style={{ display: 'flex', width: "100%" }}>
                    <div>
                        <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '26px' }}>Compose your message</h2>
                        <Container className={checked ? classes.messagebox : classes.darkmessagebox}>
                            <FormControl component="fieldset">

                                <FormLabel component="legend" style={{ color: checked ? "#fff" : "#20213D" }}>Select message type</FormLabel>

                                <RadioGroup className={checked ? classes.radiobuttons : classes.darkradiobuttons} aria-label="type" name="type1" value={msgtype} onChange={(e) => setMsgType(e.target.value)}>
                                    <FormControlLabel className={checked ? classes.radbtns : classes.darkradbtns} value="complaint" control={<Radio color="primary" borderColor="primary" />} label="Complaint" />
                                    <FormControlLabel value="suggestion" control={<Radio color="primary" />} label="Suggestion" />
                                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                variant="filled"
                                value={subject}
                                className={checked ? classes.messagetextbox : classes.darkmessagetextbox}
                                label="Subject"
                                InputProps={{ disableUnderline: true }}
                                onChange={(e) => setSub(e.target.value)}
                            >
                            </TextField>
                            <TextField className={checked ? classes.messagetextbox : classes.darkmessagetextbox} multiline rows={12}
                                value={body}
                                variant="filled"
                                placeholder="Type your message here"
                                InputLabelProps={{ style: { color: checked ? 'rgba(255, 255, 255, 0.56)' : "rgba(32, 33, 61, 0.5)" } }}
                                InputProps={{ disableUnderline: true }}
                                onChange={(e) => setBody(e.target.value)}
                            />
                            <div className={checked ? classes.buttoncontainer : classes.darkbuttoncontainer}><Button
                                className={checked ? classes.sendbutton : classes.darksendbutton} variant='contained' onClick={handleSend} >{loading ? <CircularProgress style={{ color: "#fff" }} size={24} /> : "SEND"}</Button></div>
                        </Container>
                    </div>
                    <div>
                        <Today checked={checked} />
                        <Calender checked={checked} />
                    </div>
                </Container>
            </Container>
        </>
    )
}