import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, Container, CardMedia, Typography, CardContent } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PuffLoader from "react-spinners/PuffLoader";
import i1 from '../../assets/Printed circuit board-bro 1.png';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../actions/Courses';
import { fetchProfile } from '../../actions/Profile';
import moment from 'moment';

export default function OnGoingCourses({ checked, setCourseId, setMarks }) {
    const classes = useStyles();
    const { isLoading, courses } = useSelector(state => state.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
    }, [])

    console.log(courses);
    // const getSemesterOfUser = () => {
    //     const userID = JSON.parse(localStorage.getItem('profile')).uniqueID;
    //     const year = `${userID.split('')[2]}${userID.split('')[3]}`;
    //     const currentYear = moment().format("YY");
    //     const studentYear = currentYear - year;
    //     const currentMonth = new Date().getMonth() + 1;

    //     console.log(currentMonth);
    // }

    // getSemesterOfUser();

    return (

        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 'initial' }}>

            <Grid container>
                {isLoading ?
                    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <PuffLoader color={checked ? "#ffffff" : "#202135"} loading={isLoading} size={60} />
                    </Container> :
                    courses?.courses?.semesters?.map((semester) => semester.courses?.map(value => (
                        <Grid>
                            <Link to={`/courses/${value._id}`} style={{ textDecoration: 'none' }}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <Container>
                                            <CardMedia
                                                component="img"
                                                // height="10px"
                                                image={i1}
                                                style={{ maxWidth: '10em', maxHight: '10em', margin: 'auto' }}
                                            />
                                        </Container>
                                        <CardContent >
                                            <Typography gutterBottom style={{ fontSize: "18px", color: "white", textAlign: 'center' }} component="h2">
                                                {value?.course?.baseCourse?.name}
                                            </Typography>
                                            <Typography variant="body2" style={{ fontSize: "12px", color: "white", textAlign: 'center' }} component="p">
                                                {`${value?.course?.baseCourse.code} ${value?.course?.baseCourse.courseType}`}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    )))
                }
            </Grid>
        </div>
    )
}
