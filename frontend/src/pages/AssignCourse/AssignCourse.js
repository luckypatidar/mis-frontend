import React, { useState, useEffect } from 'react'
import { Container, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';
import AssignCourseToFaculty from '../../components/AssignCourse/AssignCourseToFaculty';
import AssignCourseToStudent from '../../components/AssignCourse/AssignCourseToStudent';
import { useDispatch } from 'react-redux';
import { assignCourseToStudent, fetchAllBaseCourses } from '../../actions/Courses.js';
import { fetchProfile } from '../../actions/Profile';

export default function AssignCourse({ checked }) {
    const [tab, settab] = useState(true)
    const [actbtn, setactbtn] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();

    const data = {
        courseId: '60b0d6a13679be65749717f5',
        courseStudents: [
            {
                student: '60de77c43d8a150ac88220b1',
            }
        ]
    }
    useEffect(() => {
        dispatch(fetchAllBaseCourses());
    }, [])
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
                    <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '26px' }}>Assign Course</h2>
                    <Container className={classes.messagebox} >
                        <div className={classes.tabcontain} style={{ background: checked ? 'rgba(82, 82, 98, 0.29)' : '#fff' }}>
                            <Button className={actbtn ? classes.nbtns : classes.btns} variant="contained" onClick={set2} >Faculty</Button>
                            <Button className={actbtn ? classes.btns : classes.nbtns} variant="contained" onClick={set1}>Student</Button>
                        </div>
                        <div className={classes.tablecont}>
                            {tab ? <><AssignCourseToFaculty checked={checked} /></> : <><AssignCourseToStudent checked={checked} /></>}
                        </div>
                    </Container>
                </div>
            </Container>
        </Container>
    )
}
