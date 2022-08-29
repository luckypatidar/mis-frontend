import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    box: {
        backgroundColor: '#202135',
        width: '100%',
        height: '32vh',
        borderRadius: '16px',
    },
    heading: {
        color: "#fff",
        fontWeight: 500,
    },
    card: {
        width: '40%',
        marginTop: '5px',
        cursor: 'pointer',
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
}));