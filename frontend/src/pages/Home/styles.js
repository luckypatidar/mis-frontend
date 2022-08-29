import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        background: "#292A3C",
        minHeight: '90vh',
        color: 'white',
        paddingLeft: '270px',
        // paddingBottom: '2em',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
            paddingBottom: '2em',
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '2em',
        },
    },
    container: {
        display: 'flex',
        // paddingBottom: '1.8rem',
        // height: '100%',
        // paddingBottom: '4vh',
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: 'column',
        },
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            flexDirection: 'column',
        },
    },
    firstbox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: '100vh',
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: 'column',
            width: '100%'
        },
    },
    secondbox: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: 'column',
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: 'column',
            width: '100%'
        },
    },
    thirdbox: {
        display: 'flex',
        // height: '100vh',
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: 'column',
            width: '100%'
        },
    },
    ///dark
    darkroot: {
        backgroundColor: "rgba(205, 205, 255, 0.33)",
        color: "black",
        minHeight: '100vh',
        // display: 'flex',
        color: 'white',
        paddingLeft: '270px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
            paddingBottom: '2em',
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '2em',
        },
    },
}))