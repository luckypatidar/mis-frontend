import { makeStyles } from '@material-ui/core';
import { BorderBottom } from '@material-ui/icons';

export default makeStyles((theme) => ({
    root: {
        color: "#202135",
    },

    scrollview: {
        '&::-webkit-scrollbar': {
            width: '8px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: "#202135",
            borderRadius: "50px",
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(102, 118, 129, 0.15)',
            // outline: '1px solid slategrey'
            borderRadius: '20px'
        }
    },
    table: {
        borderCollapse: "separate",
        borderSpacing: "0px 18px",
        width: "100%",
        color: 'white',
        border: 'none',
    },
    tablecont: {
        width: "100%",
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
    messagebox: {
        // backgroundColor: '#202135',
        width: '100%',
        minHeight: "75vh",
        height: "fit-content",
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 0,
    },
    tablehead: {
        padding: '6px',
        fontSize: '20px',
        fontWeight: 500,
        // color: 'white',
        borderBottom: '1px solid rgba(102, 118, 129, 0.15)'
    },
    tabledata: {
        // color: '#fff',
        fontSize: '16px',
        borderBottom: '1px solid rgba(102, 118, 129, 0.15)',
        padding: 0,
        // backgroundColor: "#E5E5E5",
    },
    tablerow: {
        marginTop: "10px",
        // backgroundColor: "#525262",
        color: '#ffff',
        borderRadius: "15px",
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
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 95,
        color: '#fff',
        marginRight: '1rem',
    },
    formControl1: {
        margin: theme.spacing(1),
        minWidth: 95,
        color: '#fff',
        marginRight: '1rem',
    },
    formControl2: {
        margin: theme.spacing(1),
        minWidth: 100,
        color: '#fff',
        marginRight: '1rem',
    },
    startBtn: {
        border: '#1EAEDB solid 2px',
        borderRadius: '5px',
        padding: '0.5rem 2rem 0.5rem 2rem',
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
    },
    inputDate: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        fontWeight: '600',
        padding: '4px 10px 4px 10px',
        width: '8.5rem',
        margin: 0,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        fontWeight: '600',
        padding: '4px 10px 4px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    formControlP: {
        margin: theme.spacing(0.1),
        width: 100,
        color: '#fff',
        // marginRight: '1rem',
    },
    inputP: {
        backgroundColor: 'rgba(24, 128, 56, 0.08)',
        border: ' 1px solid #188038',
        boxSizing: 'border-box',
        borderRadius: '6px',
        color: '#fff',
    },
    inputR: {
        backgroundColor: 'rgba(24, 128, 56, 0.08)',
        border: ' 1px solid #188038',
        boxSizing: 'border-box',
        borderRadius: '6px',
        color: '#fff',
    },
    container: {
        display: 'flex',
        backgroundColor: 'rgba(82, 82, 98, 0.29)',
        width: 'fit-content',
        padding: '0.4rem',
        borderRadius: '11px',
    },
    attendenceWrapper: {
        // background: "#2F2F42",
        // backgroundColor: '#202135',
        width: '100%',
        borderRadius: '0.8rem',
        marginTop: '2rem',
        paddingLeft: '1rem',
        marginBottom: '2rem',
    },

    ///dark
    darkroot: {
        color: "#202135"
    },
    darkmessagebox: {
        // backgroundColor: '#ffff',
        width: '100%',
        minHeight: "75vh",
        height: "fit-content",
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem 2.3rem 2rem',
    },
    darktablehead: {
        // backgroundColor: "#202135",
        color: '#ffff',
        padding: '6px',
        fontSize: '17px',
        fontWeight: 500,
    },
    darktabledata: {
        // backgroundColor: "#525262",
        color: '#ffff',
        fontSize: '16px',
        // padding: '8px',
    },
    darktablerow: {
        marginTop: "10px",
        // backgroundColor: "#525262",
        color: '#ffff',
    },
    darktabcontain: {
        backgroundColor: "#525262",
        // color: '#ffff',
        padding: '10px',
        paddingLeft: "5px",
        paddingRight: "5px",
        borderRadius: "10px",
        width: "fit-content",
        marginBottom: "30px",
    },
}));