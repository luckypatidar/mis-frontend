import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import {
    TextField,
    Button,
    Typography,
    Paper,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Modal,
    Backdrop,
    Zoom
} from '@material-ui/core';

import useStyles from './styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { createAnnouncement, updateAnnouncement } from '../../actions/Announcement';
import { useDispatch } from 'react-redux';
// import { google } from 'googleapis';



export default function Form({ open, handleClose, item }) {
    // const { google } = require('googleapis');
    const classes = useStyles();
    const dispatch = useDispatch();
    const [announcementData, setAnnouncementData] = useState({ heading: item.heading, content: item.content, year: item.year, images: item.images, files: item.files });
    const [imageObject, setImageObject] = useState(true);
    const [error, setError] = useState("");
    const [imageError, setImageError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(announcementData);
        try {
            if (item.heading != "") {
                // const public_id = item.images[0].split(" ")[1];
                // const url = `https://api.cloudinary.com/v1_1/iiit-surat/destroy`;
                // const response = await axios({
                //     method: 'DELETE',
                //     url: url,
                //     data: {
                //         'file': public_id,
                //         // 'destroy_preset': 'z1yhovm3',
                //     }
                // })
                // console.log(response);
                const updatedAnnouncement = {
                    announcementId: item._id,
                    updatedAnnouncement: announcementData,
                }
                dispatch(updateAnnouncement(updatedAnnouncement));
            } else {
                dispatch(createAnnouncement(announcementData));
            }
        } catch (error) {
            console.log(error);
        }

    }

    // const fileValidation = (e) => {
    //     setImageObject(true);
    //     const files = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = async (imageBase64url) => {
    //         const url = `https://api.cloudinary.com/v1_1/iiit-surat/upload`;
    //         const response = await axios({
    //             method: 'POST',
    //             url: url,
    //             data: {
    //                 'file': imageBase64url.target.result,
    //                 'upload_preset': 'qdm5qj0z',
    //             }
    //         })
    //         console.log(imageBase64url);
    //         console.log(response.data);
    //         setAnnouncementData({ ...announcementData, files: [`${response.data.url} ${response.data.public_id}`] });
    //         setImageObject(false);
    //     }
    //     reader.readAsDataURL(files);

    //     // const fsize = files.size;
    //     // const filetemp = Math.round((fsize / 1024));

    //     // if (filetemp >= 50) {
    //     //     setError("File too big, please select a file less than 50kb size");
    //     // } else {
    //     //     setError("");
    //     // }
    // }

    const imageValidation = (e) => {
        const files = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(files);
        const fsize = files.size;
        const filetemp = Math.round((fsize / 1024));
        if (filetemp >= 4096) {
            setImageError("size exceeded");
            return;
        }
        reader.onloadend = async (imageBase64url) => {
            const url = `https://api.cloudinary.com/v1_1/iiit-surat/upload`;
            const response = await axios({
                method: 'POST',
                url: url,
                data: {
                    'file': imageBase64url.target.result,
                    'upload_preset': 'z1yhovm3',
                }
            })
            console.log(imageBase64url);
            console.log(response.data);
            setAnnouncementData({ ...announcementData, images: [`${response.data.secure_url} ${response.data.public_id}`] });
            setImageObject(false);
        }
        setImageError("");
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={open} style={{ transitionDelay: open ? '500ms' : '0ms' }}>
                <Paper className={classes.paper} elevation={6}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h6" bold>{item.heading != '' ? "Edit an Announcement" : "Create an Announcement"}</Typography>
                        <TextField name="heading" variant="outlined" label="Heading" fullWidth
                            value={announcementData.heading}
                            onChange={(e) => {
                                setAnnouncementData({ ...announcementData, heading: e.target.value })
                            }}
                        />
                        <TextField name="content" variant="outlined" label="Content" fullWidth multiline rows={4}
                            value={announcementData.content}
                            onChange={(e) => {
                                setAnnouncementData({ ...announcementData, content: e.target.value })
                            }}
                        />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={announcementData.year}
                                    onChange={(e) => {
                                        setAnnouncementData({ ...announcementData, year: e.target.value })
                                    }}
                                    label="Year"
                                    style={{ width: '100%' }}
                                >
                                    <MenuItem value={0}>
                                        <em>All</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1st </MenuItem>
                                    <MenuItem value={2}>2nd</MenuItem>
                                    <MenuItem value={3}>3rd</MenuItem>
                                    <MenuItem value={4}>4th</MenuItem>
                                </Select>
                            </FormControl>
                            <div>

                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={imageValidation}
                                />

                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        component="span"
                                        size="medium"
                                        className={classes.button}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        {!!imageError ? <h1 style={{ fontSize: '10px', color: 'red' }}>Size Exceeded</h1> : "Image"}
                                    </Button>
                                </label>
                            </div>
                        </div>

                        <TextField name="file" variant="outlined" label="Please provide Gdrive url of file" fullWidth
                            style={{ marginTop: '1rem', marginBottom: '1rem' }}
                            value={announcementData.files[0]}
                            onChange={(e) => {
                                setAnnouncementData({ ...announcementData, files: [e.target.value] })
                            }}
                        />
                        {/* <p style={{ color: "red", fontSize: "12px" }}>{error}</p> */}


                        <Button
                            className={classes.buttonSubmit}
                            variant="contained"
                            style={{ backgroundColor: "#1EAEDB", color: '#fff' }}
                            size="large" type="submit"
                            fullWidth
                            disabled={item.heading !== '' ? false : imageObject ? true : false}
                        >Submit</Button>

                    </form>
                </Paper>
            </Zoom>
        </Modal>
    )
}
