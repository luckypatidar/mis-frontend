import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import useStyles from './style';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import { fetchCourses } from '../../actions/Courses';



export default function Courses({ checked }) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { isLoading, courses } = useSelector(state => state.courses);
    // const [courseData, setCourseData] = useState();

    // useEffect(() => {
    //     dispatch(fetchCourses());
    // }, []);




    return (
        <>
            <Container className={classes.root} >
                <h2 className={checked ? classes.heading : classes.darkheading}>Courses</h2>

                <Grid container className={checked ? classes.box : classes.darkbox}>
                    {isLoading ?

                        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <BeatLoader color={checked ? "#ffffff" : "#202135"} loading={isLoading} size={15} />
                        </Container> :

                        courses?.courses?.semesters?.map((semester) => semester.courses?.map(value =>
                            <Grid item className={classes.card} xs={4}>
                                <Link to={`/courses/${value?._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '10px' }}>
                                        <div style={{ backgroundColor: checked ? 'rgba(255, 255, 255, 0.04)' : "#20213D", padding: '12px', borderRadius: '10px', width: '30%', margin: 'auto' }}>
                                            <LibraryBooksIcon />
                                        </div>
                                        <p style={{ color: checked ? "#fff" : "#20213D", fontSize: '10px' }}> {value?.course?.baseCourse?.name}</p>
                                    </div>
                                </Link>
                            </Grid>

                        ))
                    }
                </Grid>

            </Container>
        </>
    )
}

{/* <Grid item className={classes.card} xs={4}>
                                <Link to={`/courses/${data?._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '10px' }}>
                                        <div style={{ backgroundColor: checked ? 'rgba(255, 255, 255, 0.04)' : "#20213D", padding: '12px', borderRadius: '10px', width: '30%', margin: 'auto' }}>
                                            <LibraryBooksIcon />
                                            {console.log(item.course?.baseCourse)}
                                        </div>
                                        <p style={{ color: checked ? "#fff" : "#20213D", fontSize: '10px' }}> {item?.course?.baseCourse?.name}</p>
                                    </div>
                                </Link>
                            </Grid> */}