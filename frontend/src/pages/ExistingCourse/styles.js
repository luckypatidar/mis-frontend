import { makeStyles, withTheme } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        background: "#292A3C",
        minHeight: '100vh',
        minWidth: '100%',
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
    messagebox: {
        // backgroundColor: '#202135',
        width: '100%',
        minHeight: "100vh",
        // height: "fit-content",
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 0,
    },
    tabcontain: {
        backgroundColor: "#E5E5E5",
        // color: '#ffff',
        padding: '10px',
        paddingLeft: "5px",
        paddingRight: "5px",
        borderRadius: "10px",
        width: "fit-content",
        marginBottom: "30px",
    },
    btns: {
        '&:hover': {
            backgroundColor: '#1EAEDA',
        },
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: '#1EAEDB',
    },
    nbtns: {
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: "white",
    },
    tablecont: {
        width: "100%",
    },

    heading: {
        color: "#fff",
        fontWeight: 550,
    },
    card: {
        alignContent: 'center',
        alignItems: "center",
        backgroundColor: '#525262',
        maxWidth: '14em',
        maxHeight: '15em',
        objectFit: 'cover',
        padding: "4px",
        marginRight: "4.2em",
        marginLeft: "4em",
        marginTop: "0.5em",
        marginBottom: "3.5em",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            alignContent: "center",
        },
    },
    btn: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        background: "#525262",
        boxShadow: "none",
        borderRadius: "50%",
        width: "3.5em",
        height: "3em",
        alignItems: "center"
        , marginTop: "24em"
        , marginRight: "3em"
    },


    ////dark theme
    darkroot: {
        backgroundColor: "rgba(205, 205, 255, 0.33)",
        color: "black",
        minHeight: '100vh',
        // display: 'flex',
        minWidth: '100%',
        paddingLeft: '270px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
            paddingBottom: '2em',
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '2em',
        },
    },
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