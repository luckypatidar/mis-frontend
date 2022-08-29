import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
    },
    box: {
        backgroundColor: 'rgba(32, 33, 53, 1)',
        width: '100%',
        height: '28vh',
        borderRadius: '16px',
        [theme.breakpoints.down('md')]: {
            height: '20.5em'
        },
    },
    heading: {
        color: "#fff",
        fontWeight: 500,
    },

    ////dark theme
    darkheading: {
        color: "#20213D",
        fontWeight: 500,
    },
    darkbox: {
        backgroundColor: '#fff',
        width: '100%',
        height: '25.8vh',
        borderRadius: '16px',
        [theme.breakpoints.down('md')]: {
            height: '20.5em'
        },
    }
}));