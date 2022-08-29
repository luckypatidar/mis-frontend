import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Table, Button } from '@material-ui/core';
import useStyles from './styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';


export default function MarkAttendence({ checked }) {
    const classes = useStyles();
    const [date, setDate] = useState(0);
    const [semester, setSemester] = useState(0);
    const [course, setCourse] = useState(0);
    const [openDate, setOpenDate] = React.useState(false);
    const [openSemester, setOpenSemester] = React.useState(false);
    const [openCourse, setOpenCourse] = React.useState(false);
    const [present, setPresent] = useState(false);
    const [selectedDate, setSelectedDate] = React.useState(moment().format());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };
    const handleChangeSemester = (event) => {
        setSemester(event.target.value);
    };
    const handleChangeCourse = (event) => {
        setCourse(event.target.value);
    };

    const handleClose1 = () => {
        setOpenDate(false);
    };

    const handleOpen1 = () => {
        setOpenDate(true);
    };
    const handleClose2 = () => {
        setOpenSemester(false);
    };

    const handleOpen2 = () => {
        setOpenSemester(true);
    };
    const handleClose3 = () => {
        setOpenCourse(false);
    };

    const handleOpen3 = () => {
        setOpenCourse(true);
    };
    const handleClose = () => {
        setOpenDate(false);
    };

    const handleOpen = () => {
        setOpenDate(true);
    };
    const handlePresent = (e) => {
        setPresent(e.target.value);
    }
    return (
        <div >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 0 }}>
                <div className={classes.container} style={{ background: checked ? 'rgba(82, 82, 98, 0.29)' : '#fff' }}>
                    <FormControl className={classes.formControl}>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                // label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                className={classes.inputDate}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <FormControl className={classes.formControl1}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openSemester}
                            onClose={handleClose2}
                            onOpen={handleOpen2}
                            value={semester}
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
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl2}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openCourse}
                            onClose={handleClose3}
                            onOpen={handleOpen3}
                            value={course}
                            onChange={handleChangeCourse}
                            className={classes.input}
                        >
                            <MenuItem value={0} disabled>
                                COURSE
                            </MenuItem>
                            <MenuItem value={10}>FCP</MenuItem>
                            <MenuItem value={20}>SS</MenuItem>
                            <MenuItem value={30}>DLD</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <Button className={classes.startBtn} style={{ background: 'transparent', color: checked ? '#fff' : '#20213D' }}>Start</Button>
                </div>
            </div>
            <div className={classes.attendenceWrapper} style={{ background: checked ? '#202135' : '#fff' }}>
                <div className={classes.scrollview}>
                    <div
                    >
                        <table className={classes.table}>
                            <tr >
                                <td className={classes.tablehead} style={{ color: checked ? '#fff' : '#20213D' }} align="center">No.</td>
                                <td className={classes.tablehead} style={{ color: checked ? '#fff' : '#20213D' }} align="center">Roll Number</td>
                                <td className={classes.tablehead} style={{ color: checked ? '#fff' : '#20213D' }} align="center">Name</td>
                                <td className={classes.tablehead} style={{ color: checked ? '#fff' : '#20213D' }} align="center">Present/Absent</td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr className={classes.tablerow} >
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>1.</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>UI19EC49</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>Shubham Patidar</td>
                                <td className={classes.tabledata} align="center" style={{ color: checked ? '#fff' : '#20213D' }}>
                                    <FormControl className={classes.formControlP}>
                                        <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            // open={present}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={present}
                                            // onChange={handlePresent}
                                            className={classes.inputP}
                                            style={{ color: checked ? '#fff' : '#000' }}
                                        >
                                            <MenuItem value={10}>P</MenuItem>
                                            <MenuItem value={20}>A</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '88%', paddingBottom: '2rem', paddingTop: '0.5rem' }} >
                        <div></div>
                        <div>
                            <Button className={classes.startBtn} style={{ marginRight: '2rem', color: checked ? '#fff' : '#20213D' }}>Export</Button>
                            <Button className={classes.startBtn} style={{ background: '#1EAEDB' }}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
