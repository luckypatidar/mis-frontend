import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, Container, CardMedia, Typography, CardContent } from '@material-ui/core';
import i1 from '../../assets/Printed circuit board-bro 1.png';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllExistedCourse } from '../../actions/Courses';
import CircleLoader from "react-spinners/CircleLoader";


export default function ExistedCourse({ checked }) {
    const classes = useStyles();
    const { isLoading, newCourse } = useSelector(state => state.newCourse);
    const dispatch = useDispatch();
    // console.log(newCourse.courses);

    useEffect(() => {
        dispatch(fetchAllExistedCourse());
    }, [])
    // console.log(courseData.map(item => item.map(value => value.baseCourse.name)));
    return (

        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 'initial' }}>

            <Grid container>
                {
                    isLoading ?
                        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75vw', height: '70vh' }}>
                            <CircleLoader color={checked ? "#ffffff" : "#202135"} loading={isLoading} size={50} />
                        </Container>
                        :
                        newCourse?.courses?.filter((value) => value?.baseCourse?.courseType === "Theory")?.map((item) => (
                            <Grid key={item?._id}>
                                <Link to={`/assign/${item._id}`} style={{ textDecoration: 'none' }}>
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
                                                    {item?.baseCourse?.name}
                                                </Typography>
                                                <Typography variant="body2" style={{ fontSize: "12px", color: "white", textAlign: 'center' }} component="p">
                                                    {`${item?.baseCourse?.code} (${item?.baseCourse?.courseType})`}
                                                </Typography>
                                                <Typography variant="body2" style={{ fontSize: "12px", color: "white", textAlign: 'center' }} component="p">
                                                    {`${item?.branch} (${item?.batchType}) ${item?.degree}`}
                                                </Typography>
                                                <Typography variant="body2" style={{ fontSize: "12px", color: "white", textAlign: 'center' }} component="p">
                                                    {`${item.courseYear} (${item.semesterType})`}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
            </Grid>
        </div>
    )
}
