import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Component } from 'react';
//material ui components
import useStyles from './styles';

//components
import Announcement from '../../components/Announcement/Announcement';
import Courses from '../../components/Courses/Courses';
import Options from '../../components/Options/Options';
import Today from '../../components/Today/Today';
import Calender from '../../components/Calender/Calender';
import Sidebar from '../../components/Sidebar/Sidebar';
import Message from '../../components/Message/Message';
// import CoursePage from '../../components/CoursePage/CoursePage';
// import Attendence from '../../components/Attendence/Attendence';
// import Marks from '../../components/Marks/Marks';

//// actions
import { getAnnouncement } from '../../actions/Announcement';
import { fetchCourses } from '../../actions/Courses';

import StudentForm from '../../components/StudentForm/StudentFrom';


function Home({ checked }) {

    const classes = useStyles();

    const [messageComponent, setMessageComponent] = useState(true);
    const [courses, setCourses] = useState(false);
    const [attendence, setAttendence] = useState(false);
    const [marks, setMarks] = useState(false);
    const [courseId, setCourseId] = useState("");

    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    console.log(userInfo.token);

    useEffect(() => {
        dispatch(getAnnouncement())
        dispatch(fetchCourses())
    }, [])


    return (

        <>

            <div className={checked ? classes.root : classes.darkroot}>

                <div className={classes.container}>

                    {/* <StudentForm /> */}
                    {/* <StudentForm/> */}
                    <div className={classes.firstbox}>
                        {messageComponent
                            ? <div>
                                <Announcement checked={checked} />
                                <div className={classes.thirdbox}>
                                    <Courses checked={checked} />
                                    <Options checked={checked} />
                                </div>
                            </div>
                            : <Message checked={checked} userInfo={userInfo} />
                        }
                    </div>
                    <div className={classes.secondbox}>
                        <Today checked={checked} />
                        <Calender checked={checked} />
                    </div>

                </div>


            </div>
        </>


    )
}
export default Home;
