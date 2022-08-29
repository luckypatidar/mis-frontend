
import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, Typography, Container, Table, Button, TableContainer, TableCell, TableBody, TableHead, TableRow, Checkbox } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { assignCourseToStudent, createNewCourse } from '../../actions/Courses';
import { fetchProfile } from '../../actions/Profile';
import { BorderBottom } from '@material-ui/icons';



export default function AssignCourseToStudent({ checked }) {
    const classes = useStyles();
    const [disable, setDisable] = useState(false);
    const [openBranch, setOpenBranch] = useState(false);
    const [openSemester, setOpenSemester] = useState(false);
    const [openCourse, setOpenCourse] = useState(false);
    const [openSemesterType, setOpenSemesterType] = useState(false);
    const [openCourseYear, setOpenCourseYear] = useState(false);
    const [createCourse, setCreateCourse] = useState(false);
    const [courseCreated, setCourseCreated] = useState({ baseCourse: "0", courseYear: 0, semesterType: "0", branch: "0", semester: 0 })
    const [selectStudent, setSelectStudent] = useState([]);
    const [checkInputs, setCheckInputs] = useState(true);
    const [profile, setProfile] = useState([{}]);
    const [year, setYear] = useState();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);

    const newProfile = useSelector(state => state.profile);
    const { isLoading, newCourse, error } = useSelector(state => state.newCourse);

    console.log(error);

    useEffect(() => {

    }, [])


    const handleChangeSemester = (event) => {
        setCourseCreated({ ...courseCreated, semester: event.target.value })
        var value = parseInt(((event.target.value) + 1) / 2) + 16;

        setYear(value);
        setDisable(false);
    };
    const handleChangeCourse = (event) => {
        setCourseCreated({ ...courseCreated, baseCourse: event.target.value })
        setDisable(false);
    };
    const handleChangeBranch = (event) => {
        setCourseCreated({ ...courseCreated, branch: event.target.value })
        setDisable(false);
    };
    const handleChangeSemesterType = (event) => {
        setCourseCreated({ ...courseCreated, semesterType: event.target.value })
        setDisable(false);
    }
    const handleChangeCourseYear = (event) => {
        setCourseCreated({ ...courseCreated, courseYear: event.target.value });
        setDisable(false);
    }
    const handleClose1 = () => {
        setOpenSemester(false);
    };

    const handleOpen1 = () => {
        setOpenSemester(true);
    };
    const handleClose2 = () => {
        setOpenBranch(false);
    };

    const handleOpen2 = () => {
        setOpenBranch(true);
    };
    const handleClose3 = () => {
        setOpenCourse(false);
    };

    const handleOpen3 = () => {
        setOpenCourse(true);
    };

    const handleClose4 = () => {
        setOpenSemesterType(false);
    }

    const handleOpen4 = () => {
        setOpenSemesterType(true);
    }

    const handleClose5 = () => {
        setOpenCourseYear(false);
    }
    const handleOpen5 = () => {
        setOpenCourseYear(true);
    }

    const handleChange = (id) => {
        const value = id;
        setSelectStudent([...selectStudent, value]);
    }

    const createCourseNew = () => {
        setDisable(true);
        if (courseCreated.semester === 0 || courseCreated.courseYear === 0 || courseCreated.branch === "0" || courseCreated.baseCourse === "0" || courseCreated.semesterType === "0") {
            return;
        } else {
            setCheckInputs(false);
            var branch = courseCreated.branch.split('');
            var currentBranch;
            if (branch[0] === "E") {
                currentBranch = "EC";
            }
            if (branch[0] === "C") {
                currentBranch = "CO";
            }
            dispatch(createNewCourse(courseCreated));
            dispatch(fetchProfile(`UI${year}${currentBranch}`));
            setCreateCourse(true);
            setProfile(newProfile?.profile?.message);
            // console.log(error);
            // setDisable(false);
        }
    }

    const handleSaveStudent = () => {
        // const data = {
        //     courseId: newCreatedCourse.newCourse.message._id,
        //     courseStudents: selectStudent
        // }
        console.log(selectStudent);
        // console.log(newCreatedCourse.newCourse.message._id);
        // console.log(data);
        // dispatch(assignCourseToStudent(data));
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 0 }}>
                <div className={classes.container} style={{ background: checked ? 'rgba(82, 82, 98, 0.29)' : '#fff' }} >

                    <FormControl className={classes.formControl1}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openSemester}
                            onClose={handleClose1}
                            onOpen={handleOpen1}
                            value={courseCreated.semester}
                            onChange={handleChangeSemester}
                            className={classes.input}
                        >
                            <MenuItem value={0} disabled>
                                SEMESTER
                            </MenuItem>
                            <MenuItem value={1}>1st</MenuItem>
                            <MenuItem value={2}>2nd</MenuItem>
                            <MenuItem value={3}>3rd</MenuItem>
                            <MenuItem value={4}>4th</MenuItem>
                            <MenuItem value={5}>5th</MenuItem>
                            <MenuItem value={6}>6th</MenuItem>
                            <MenuItem value={7}>7th</MenuItem>
                            <MenuItem value={8}>8th</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl1}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openBranch}
                            onClose={handleClose2}
                            onOpen={handleOpen2}
                            value={courseCreated.branch}
                            onChange={handleChangeBranch}
                            className={classes.input}
                        >
                            <MenuItem value={0} disabled>
                                BRANCH
                            </MenuItem>
                            <MenuItem value="ECE">ECE</MenuItem>
                            <MenuItem value="CSE">CSE</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl1}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openSemesterType}
                            onClose={handleClose4}
                            onOpen={handleOpen4}
                            value={courseCreated.semesterType}
                            onChange={handleChangeSemesterType}
                            className={classes.input}
                        >
                            <MenuItem value={0} disabled>
                                SEMESTER TYPE
                            </MenuItem>
                            <MenuItem value={"Odd"}>ODD</MenuItem>
                            <MenuItem value={"Even"}>EVEN</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl1}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openCourseYear}
                            onClose={handleClose5}
                            onOpen={handleOpen5}
                            value={courseCreated.courseYear}
                            onChange={handleChangeCourseYear}
                            className={classes.input}
                        >
                            <MenuItem value={0} disabled>
                                COURSE YEAR
                            </MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl2}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openCourse}
                            onClose={handleClose3}
                            onOpen={handleOpen3}
                            value={courseCreated.baseCourse}
                            onChange={handleChangeCourse}
                            className={classes.input}
                        >
                            <MenuItem value={0} disabled>
                                COURSE
                            </MenuItem>
                            {courses?.courses?.message?.map((item) => (
                                <MenuItem value={item._id} >{item.name} - {item.courseType}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </div>
                <div>
                    <Button
                        className={classes.startBtn}
                        disabled={disable}
                        style={{
                            background: checkInputs ? 'transparent' : '#1EAEDB',
                            color: checked ? '#fff' : '#20213D'
                        }}
                        onClick={createCourseNew}
                    >Start</Button>
                </div>
            </div>
            {
                createCourse ?
                    !!error ?
                        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                            <Typography>
                                {error}
                            </Typography>
                        </Container>
                        :
                        <div className={classes.attendenceWrapper} style={{ background: checked ? '#202135' : '#fff' }}>
                            <div>
                                <div style={{ height: 400, width: '100%', overflow: 'auto' }} className={classes.scrollview}>
                                    <TableContainer>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tablehead}>
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
                                                    newProfile?.profile?.message?.map((item, i) => (
                                                        <TableRow key={item._id}>
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
                                </div>
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
                        </div>
                    :
                    null
            }
        </div >
    )
}
