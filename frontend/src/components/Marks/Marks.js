import React, { useState, useEffect } from 'react'
import { Container, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Quixexam from './Quixexam';
import Termexam from './Termexam';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourses } from '../../actions/Courses';


function Marks({ checked }) {
    const [tab, settab] = useState(true)
    const [actbtn, setactbtn] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();
    const set1 = () => {
        setactbtn(1);
        settab(0);
    }
    const set2 = () => {
        setactbtn(0);
        settab(1);
    }

    // console.log(id);
    const { isLoading, courses } = useSelector(state => state.courses);
    const [courseDetail, setCourseDetail] = useState();

    const courseDetailInfo = () => {
        var filteredCourse = (courses?.courses?.semesters?.map(semester => semester.courses?.filter((item) => item._id === id)))
        var temp = (filteredCourse[0]);
        setCourseDetail(temp[0]);
    }

    useEffect(() => {
        courseDetailInfo();
    }, [])


    return (
        <div className={checked ? classes.root : classes.darkroot}>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '100%' }}>
                        <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '400', fontSize: '20px' }}>{`Courses > ${courseDetail?.course?.baseCourse?.name} `}</h2>
                        <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '24px' }}>Marks</h2>
                        <Container className={checked ? classes.messagebox : classes.darkmessagebox}>
                            <div className={!checked ? classes.tabcontain : classes.darktabcontain}>
                                <Button className={actbtn ? classes.nbtns : classes.btns} variant="contained" onClick={set2} >Quizes</Button>
                                <Button className={actbtn ? classes.btns : classes.nbtns} variant="contained" onClick={set1}>Midsem/Endsem</Button>
                            </div>
                            <div className={classes.tablecont}>
                                {tab ? <><Quixexam checked={checked} /></> : <><Termexam checked={checked} /></>}
                            </div>
                        </Container>
                    </div>
                    <div style={{ width: '50%' }}>
                        <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '26px' }}>Attendance</h2>
                        <Container style={{ width: "350px" }} className={checked ? classes.messagebox : classes.darkmessagebox}>
                            <div className={!checked ? classes.attdnpercent : classes.darkattdnpercent} >
                                <PieChart
                                    data={[
                                        { title: 'Absentees', value: 10, color: '#1EAEDB' },
                                        { title: 'Attendees', value: 4, color: '#525262' },
                                    ]}
                                    style={{
                                        marginTop: -50,
                                        fontFamily:
                                            '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                        fontSize: '6px',
                                    }}
                                    radius={30}
                                    lineWidth={60}
                                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                    animate
                                    label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                                    labelStyle={{
                                        fill: '#fff',
                                        opacity: 0.75,
                                        pointerEvents: 'none',
                                    }}

                                />
                                last updated 2 days ago
                            </div>
                            <div className={!checked ? classes.atndboxcontain : classes.darkatndboxcontain}>
                                <div className={!checked ? classes.attndcontain : classes.darkattndcontain}>
                                    <div className={checked ? classes.atdbox : classes.darkatdbox} style={{ textAlign: "center", fontSize: "16px" }} >54 <p>Total lectures</p></div>
                                    <div className={checked ? classes.atdbox : classes.darkatdbox} style={{ textAlign: "center", fontSize: "16px" }} >34 <p>Present</p></div>
                                    <div className={checked ? classes.atdbox : classes.darkatdbox} style={{ textAlign: "center", fontSize: "16px" }} >9 <p>Absent</p></div>
                                    <div className={checked ? classes.atdbox : classes.darkatdbox} style={{ textAlign: "center", fontSize: "16px" }} >4 <p>Mass Bunk</p></div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default Marks
