
import React, { useState, useEffect } from 'react';
import { Container, FormControl, Select, MenuItem, Table, Button, TableContainer, TableCell, TableBody, TableHead, TableRow, Checkbox, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { assignCourseToStudent, fetchAllExistedCourse, fetchCourseStudent } from '../../actions/Courses';
import { fetchProfile } from '../../actions/Profile';
import { BorderBottom } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";


export default function CourseDetail({ checked }) {
    const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, newCourse, enrolledStudent } = useSelector(state => state.newCourse);
    const [courseName, setCourseName] = useState("");
    const [selectedStudents, setSelectedStudents] = useState([]);
    const { profile } = useSelector(state => state.profile);
    console.log(profile);


    useEffect(() => {
        dispatch(fetchAllExistedCourse());
        dispatch(fetchCourseStudent(id));
        dispatch(fetchProfile("UI19EC"));
    }, [])
    // console.log(enrolledStudent);
    const handleChange = (id) => {
        const value = id;
        setSelectedStudents([...selectedStudents, value]);
    }
    const handleSaveStudent = () => {
        const data = {
            courseId: id,
            courseStudents: selectedStudents,
        }
        console.log(data);
        dispatch(assignCourseToStudent(data));
        // window.location.reload();
    }
    return (
        <Container className={checked ? classes.root : classes.darkroot} >
            <Container style={{ display: 'flex' }}>
                <div>
                    <h2 style={{ color: checked ? "#fff" : "#20213D", fontWeight: '500', fontSize: '26px' }}>{isLoading ? "....." : `Courses >> ${newCourse?.courses?.filter((item) => item?._id === id)?.[0]?.baseCourse?.name}`}</h2>
                    <Container style={{ padding: 0, minWidth: '76vw' }}>
                        <div>
                            {
                                isLoading ?
                                    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                                        <CircleLoader color={checked ? "#ffffff" : "#202135"} loading={isLoading} size={50} />
                                    </Container> :
                                    <>
                                        <Container>
                                            <Typography variant="h6">Already Enrolled Student</Typography>
                                        </Container>
                                        <TableContainer>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell className={classes.tablehead} style={{ width: '50px' }}>
                                                            <Checkbox
                                                                // defaultChecked

                                                                color="primary"

                                                            />
                                                        </TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Index</TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Roll Number</TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Name</TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Semester</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        enrolledStudent?.map((item, i) => (
                                                            <TableRow key={item?._id}>
                                                                <TableCell className={classes.tabledata}>
                                                                    <Checkbox
                                                                        // defaultChecked
                                                                        color="primary"
                                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                        labelStyle={{ color: 'white' }}
                                                                        style={{ paddingLeft: "0.8rem" }}
                                                                        onChange={() => handleChange(item.typeReference)}
                                                                    />
                                                                </TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>{i + 1}</TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>{item.uniqueID}</TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>{`${item.name.firstname} ${item.name.middlename}`}</TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>5th</TableCell>
                                                            </TableRow>
                                                        ))
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <Container>
                                            <Typography variant="h6">Remaining Student</Typography>
                                        </Container>
                                        <TableContainer>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell className={classes.tablehead} style={{ width: '50px' }}>
                                                            <Checkbox
                                                                // defaultChecked

                                                                color="primary"

                                                            />
                                                        </TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Index</TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Roll Number</TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Name</TableCell>
                                                        <TableCell align="center" className={classes.tablehead} style={{ color: checked ? '#fff' : '#000' }}>Semester</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        profile?.message?.map((item, i) => (
                                                            <TableRow key={item?._id}>
                                                                <TableCell className={classes.tabledata}>
                                                                    <Checkbox
                                                                        // defaultChecked
                                                                        color="primary"
                                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                        labelStyle={{ color: 'white' }}
                                                                        style={{ paddingLeft: "0.8rem" }}
                                                                        onChange={() => handleChange(item.typeReference)}
                                                                    />
                                                                </TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>{i + 1}</TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>{item.uniqueID}</TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>{`${item.name.firstname} ${item.name.middlename}`}</TableCell>
                                                                <TableCell align="center" className={classes.tabledata} style={{ color: checked ? '#fff' : '#000' }}>5th</TableCell>
                                                            </TableRow>
                                                        ))
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </>
                            }
                        </div>
                    </Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '96%', paddingBottom: '2rem', paddingTop: '0.5rem' }} >
                        <div></div>
                        <div>
                            <Button className={classes.startBtn} style={{ marginRight: '2rem', color: checked ? '#fff' : '#20213D' }}>Export</Button>
                            <Button className={classes.startBtn} style={{ background: '#1EAEDB' }}
                                onClick={handleSaveStudent}
                            >Save</Button>
                        </div>
                    </div>
                </div>

            </Container>
        </Container>
    )
}
