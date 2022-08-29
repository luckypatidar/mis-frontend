import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        background: "#292A3C",
        minHeight: '100vh',
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
    wrapper: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 600,
    },
    responsive: {
        height: '500px',
    },
    footer: {
        fontSize: '36px',
        fontWeight: 500,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
        },
    },
    ///dark
    darkroot: {
        backgroundColor: "rgba(205, 205, 255, 0.33)",
        color: "black",
        minHeight: '100vh',
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