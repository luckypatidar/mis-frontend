import { makeStyles } from '@material-ui/core';

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
        backgroundColor: '#202135',
        width: '54vw',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem 2.3rem 2rem',
    },
    messagetextbox: {
        "& .MuiFilledInput-root .MuiFilledInput-notchedOutline": {
            color: "#fff"
        },
        "& .MuiInputLabel-filled": {
            color: "rgba(255, 255, 255, 0.3)"
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
                borderRadius: `.8em`,
            },
            '& helpertext': {
                color: "red"
            },
            color: "#fff",
            background: "transparent"
        },
        margin: "0.7em 0em",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: `.8em`,
        border: "1px solid #FFFFFF",
        color: "#fff",
        [theme.breakpoints.down("xs")]: {
            "& .MuiInputLabel-filled": {
                fontSize: ".8em"
            },
        }
    },
    radiobuttons: {
        flexDirection: "row",
        padding: "15px",
        color: "#fff",
    },
    buttoncontainer: {
        width: "100%",
        display: "flex",
    },
    sendbutton: {
        marginLeft: "auto",
        marginRight: "20px",
        backgroundColor: "#1087ff",
        color: "white",
        marginTop: "20px"

    },

    ///dark
    darkroot: {
        backgroundColor: "rgba(205, 205, 255, 0.33)",
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
    darkmessagebox: {
        backgroundColor: '#fff',
        width: '53vw',
        // height: '73.5vh',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem 2.3rem 2rem',
    },
    darkmessagetextbox: {
        "& .MuiFilledInput-root .MuiFilledInput-notchedOutline": {
            color: "#fff"
        },
        "& .MuiInputLabel-filled": {
            color: "rgba(1,1,1, 0.4)"
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
                borderRadius: `.8em`,
            },
            '& helpertext': {
                color: "red"
            },
            color: "#010101",
        },
        margin: "0.7em 0em",
        background: "rgba(218, 218, 218, 0.1)",
        borderRadius: `.8em`,
        border: "1px solid rgba(32, 33, 61, 1)",
        color: "#010101",
        [theme.breakpoints.down("xs")]: {
            "& .MuiInputLabel-filled": {
                fontSize: ".8em"
            },
        },
    },
    darkradiobuttons: {
        flexDirection: "row",
        padding: "15px",
        color: "#20213D",
    },
    darkbuttoncontainer: {
        width: "100%",
        display: "flex",
    },
    darksendbutton: {
        marginLeft: "auto",
        marginRight: "20px",
        backgroundColor: "#1087ff",
        color: "#fff",
        marginTop: "20px"

    },
}));