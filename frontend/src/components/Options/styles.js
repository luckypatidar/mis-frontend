import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {

    },
    box: {
        backgroundColor: 'rgba(32, 33, 53, 1)',
        width: '100%',
        height: '32vh',
        borderRadius: '16px',
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
        height: '30vh',
        borderRadius: '16px',
    }
}))