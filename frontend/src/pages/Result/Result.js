import React, { useState } from 'react'
import { Container, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';
import MarkAttendence from '../../components/Attendence/MarkAttendence';
import ViewAttendence from '../../components/Attendence/ViewAttendence.js';

export default function Attendence({ checked }) {
    const [tab, settab] = useState(true)
    const [actbtn, setactbtn] = useState(false)
    const classes = useStyles();
    const set1 = () => {
        setactbtn(1);
        settab(0);
    }
    const set2 = () => {
        setactbtn(0);
        settab(1);
    }
    return (
        <Container className={checked ? classes.root : classes.darkroot}>
            <Container style={{ display: 'flex' }}>
                <div>
                    <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '26px' }}>Attendence</h2>
                    <Container className={classes.messagebox} >
                        <div className={classes.tabcontain} style={{ background: checked ? 'rgba(82, 82, 98, 0.29)' : '#fff' }}>
                            <Button className={actbtn ? classes.nbtns : classes.btns} variant="contained" onClick={set2} >Mark Attendence</Button>
                            <Button className={actbtn ? classes.btns : classes.nbtns} variant="contained" onClick={set1}>View Attendence</Button>
                        </div>
                        <div className={classes.tablecont}>
                            {tab ? <><MarkAttendence checked={checked} /></> : <><ViewAttendence checked={checked} /></>}
                        </div>
                    </Container>
                </div>
            </Container>
        </Container>
    )
}
