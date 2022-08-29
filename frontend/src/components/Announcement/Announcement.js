
import React, { useState, useEffect } from 'react'
import { Container, CircularProgress, } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import CarouselComponent from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnouncement, getAnnouncementByYear } from '../../actions/Announcement';
import {
    useWindowSize,
} from '@react-hook/window-size';

import Form from '../Form/Form';
import HashLoader from "react-spinners/HashLoader";




export default function Announcement({ checked }) {

    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [width, height] = useWindowSize();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { announcement, isLoading } = useSelector(state => state.announcement);

    // useEffect(() => {
    //     dispatch(getAnnouncement());
    // }, [])


    const handleCarousel = () => {
        if (width === 1536) {
            return 40;
        } else if (width >= 1280 && width <= 1295) {
            return 50;
        } else if (width < 1280 && width >= 1150) {
            return 35;
        } else if (width < 1150 && width >= 1026) {
            return 40;
        } else if (width < 1026 && width >= 940) {
            return 50;
        } else if (width < 940 && width >= 800) {
            return 60;
        } else if (width < 800 && width >= 783) {
            return 60;
        } else if (width < 783 && width >= 700) {
            return 80;
        } else if (width < 700 && width >= 650) {
            return 90;
        } else if (width < 650 && width >= 585) {
            return 100;
        } else if (width < 585 && width >= 518) {
            return 60;
        } else if (width < 518 && width >= 415) {
            return 80;
        } else if (width < 415 && width >= 350) {
            return 85;
        } else if (width < 350 && width > 298) {
            return 95;
        } else if (width <= 298) {
            return 100;
        } else {
            return 40;
        }
    }

    const item = {
        heading: "",
        content: "",
        year: 0,
        images: [],
        files: [],
    }

    return (
        <>
            <Container className={classes.root}>
                <h2 className={checked ? classes.heading : classes.darkheading}>Announcement</h2>
                <Container className={checked ? classes.box : classes.darkbox} container >
                    <Container className={classes.container}>
                        {isLoading ?

                            <Container className={classes.loading}>
                                <HashLoader color={checked ? "#ffffff" : "#202135"} loading={isLoading} size={50} />
                            </Container>

                            :
                            <div>
                                <div>
                                    <Carousel
                                        useKeyboardArrows={true}
                                        centerMode={true}
                                        centerSlidePercentage={handleCarousel()}
                                        showIndicators={false}
                                    >
                                        {announcement.announcements?.map((item, i) => (
                                            <CarouselComponent item={item} key={i} checked={checked} />
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        }
                    </Container>
                    {
                        user?.userType === "Admin" ?
                            <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
                                <Fab style={{ backgroundColor: "#1EAEDB", color: '#fff' }} aria-label="add" onClick={handleOpen}>
                                    <AddIcon />
                                </Fab>
                                <Form open={open} handleClose={handleClose} item={item} />
                            </div>
                            : null
                    }
                </Container>
            </Container>
        </>
    )
}
