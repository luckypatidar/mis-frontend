import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        background: "#292A3C",
        minHeight: '100vh',
        // minWidth: '100%',
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
    table: {
        borderCollapse: "separate",
        borderSpacing: "0px 18px",
        width: "100%",

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
        backgroundColor: '#202135',
        width: '100%',
        minHeight: "70vh",
        height: "fit-content",
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem 2.3rem 2rem',
    },

    tablehead: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        // border: "1px solid #FFFFFF",
        borderRadius: '8px',
        color: 'black',
        boxSizing: 'border-box',
        padding: '15px',

    },
    tabledata: {
        color: 'black',
        padding: '15px',
        backgroundColor: "#E5E5E5",
    },
    tablerow: {
        marginTop: "10px",
        backgroundColor: "#525262",
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
    atndboxcontain: {
        backgroundColor: "#E5E5E5",
        padding: "10px",
        borderRadius: "10px",
    },
    attndcontain: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "auto",
        gridGap: "1rem",
        paddingTop: "20px",
        backgroundColor: "#E5E5E5",
    },
    atdbox: {
        backgroundColor: "#484859",
        borderRadius: "10px",
        padding: "15px 10px",
    },
    attdnpercent: {
        textAlign: "center",
        padding: "0px",
    },

    ///dark
    darkroot: {
        backgroundColor: "rgba(205, 205, 255, 0.33)",
        color: "black",
        minHeight: '100vh',
        // minWidth: '100%',
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
        backgroundColor: '#ffff',
        width: '100%',
        minHeight: "75vh",
        height: "fit-content",
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem 2.3rem 2rem',
    },
    darktablehead: {
        backgroundColor: "#202135",
        color: '#ffff',
        padding: '15px',
    },
    darktabledata: {
        backgroundColor: "#525262",
        color: '#ffff',
        padding: '15px',
    },
    darktablerow: {
        marginTop: "10px",
        backgroundColor: "#525262",
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
    darkatndboxcontain: {
        backgroundColor: "#525262",
        color: '#ffff',
        padding: "10px",
        borderRadius: "10px",
    },
    darkattndcontain: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "auto",
        gridGap: "1rem",
        paddingTop: "20px",
    },
    darkatdbox: {
        backgroundColor: "#ffff",
        borderRadius: "10px",
        padding: "15px 10px",
    },
    darkattdnpercent: {
        textAlign: "center",
        padding: "0px",
        color: "#ffff",
    },
}));