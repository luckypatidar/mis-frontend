
import React, { useState, useEffect } from 'react'
import { Container, Button } from '@material-ui/core';
import OnGoingCourses from '../../components/CoursePage/OnGoingCourses';
import PastCourses from '../../components/CoursePage/PastCourses';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { fetchCourses } from '../../actions/Courses';
import { fetchProfile } from '../../actions/Profile';




export default function CoursePage({ checked }) {

    const [tab, settab] = useState(true)
    const [actbtn, setactbtn] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();
    const set1 = () => {
        setactbtn(1);
        settab(0);
    }
    const set2 = () => {
        setactbtn(0);
        settab(1);
    }
    useEffect(() => {
        dispatch(fetchCourses());
        // dispatch(fetchProfile("UI19EC49"));
    }, [])
    return (
        <>
            <Container className={checked ? classes.root : classes.darkroot} >
                <Container style={{ display: 'flex' }}>
                    <div>
                        <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '26px' }}>Courses</h2>
                        <Container className={classes.messagebox} >
                            <div className={classes.tabcontain} style={{ background: checked ? 'rgba(82, 82, 98, 0.29)' : '#fff' }}>
                                <Button className={actbtn ? classes.nbtns : classes.btns} variant="contained" onClick={set2} >Ongoing Courses</Button>
                                <Button className={actbtn ? classes.btns : classes.nbtns} variant="contained" onClick={set1}>Past Courses</Button>
                            </div>
                            <div className={classes.tablecont}>
                                {tab ? <><OnGoingCourses checked={checked} /></> : <><PastCourses checked={checked} /></>}
                            </div>
                        </Container>
                    </div>
                </Container>
            </Container>
        </>
    )
}
