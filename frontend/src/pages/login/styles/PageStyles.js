import { makeStyles } from '@material-ui/core/styles';
import Login_bg from '../../../assets/login_bg.png';
import bg from '../../../assets/bg.png';

import { yellow } from '@material-ui/core/colors';


export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Login_bg})`,
        height: "100vh",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "#fff",
        overflow: 'auto',
        [theme.breakpoints.down("xs")]: {
            height: "110vh"
        }
    },
    box: {
        background: "#23243C",
        borderRadius: "1em",
        overflow: 'auto',
        // padding: "2em",
        padding: "2em",
        marginTop: "1em",
        justify: 'flex-start',
        width: "40%",
        overflow: "hidden",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
        // height: "22em",
        [theme.breakpoints.down("sm")]: {
            width: "50%",
            // height: "24em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "90%",
            // height: "24em",
            padding: "1em"
        },


    },
    field: {
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
        background: "#434459",
        borderRadius: `.8em`,
        color: "#fff",
        [theme.breakpoints.down("xs")]: {
            "& .MuiInputLabel-filled": {
                fontSize: ".8em"
            },
        }

    },
    button: {
        background: "#fff",
        borderRadius: "2em",
        width: "10em",
        height: "3.5em",
        alignSelf: "center",
        margin: "1.2em",
        fontWeight: "600",
        fontSize: "16px"
    },
    link: {
        padding: "2em 0em 0em 0em",
    },
    buticon: {
        background: "#1EAEDB",
        borderRadius: "50%",
        padding: ".2em",
        color: "#fff"
    },
    heading: {
        marginBotton: "20em",
        fontSize: "3.5em",
        [theme.breakpoints.down("xs")]: {
            fontSize: "2.5em"
        }
    },
    cont: {
        width: "100%",
        height: "fit-content",
        overflow: "auto",
    },
    fpass: {
        fontSize: "1em",
        color: "rgba(179, 179, 211, 1)",
        cursor: "pointer",
        flex: "1 1 auto",
        textDecoration: "underline",
    },
    fcontent: {
        margin: "1em 0em",
        textAlign: "start",
        color: "rgba(255, 255, 255, 0.9)",
        fontSize: "1.1em"
    },
    sentimage: {
        maxWidth: "70%",
        [theme.breakpoints.down("xs")]: {
            margin: "1em 0em"
        },
    },
    errorimage: {
        maxWidth: "50%",
        [theme.breakpoints.down("xs")]: {
            margin: "1em 0em 0em 0em"
        },
    },
    error: {
        color: '#fff',
        textAlign: 'flex-start',
        paddingLeft: '0.5rem'
    },
    /// light theme
    darkroot: {
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "#fff",
        [theme.breakpoints.down("xs")]: {
            height: "110vh"
        },
    },
    darkbox: {

        background: "#FFFFFF",
        borderRadius: "1em",
        padding: "2em",
        marginTop: "1em",
        justify: 'flex-start',
        width: "40%",
        overflow: "hidden",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
        // height: "22em",
        [theme.breakpoints.down("sm")]: {
            width: "50%",
            // height: "24em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "90%",
            // height: "24em",
            padding: "1em"
        },


    },
    darkfield: {
        "& .MuiFilledInput-root .MuiFilledInput-notchedOutline": {
            color: "#fff"
        },
        "& .MuiInputLabel-filled": {
            color: "rgba(27, 27, 27, 0.3)"
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
                borderRadius: `.8em`,
            },
            color: "#010101",
            background: "transparent"
        },
        margin: "0.7em 0em",
        background: "rgba(237, 237, 237, 1)",
        borderRadius: `.8em`,
        color: "#fff",
        [theme.breakpoints.down("xs")]: {
            "& .MuiInputLabel-filled": {
                fontSize: ".8em"
            },
        }

    },
    darkbutton: {
        background: "rgba(87, 87, 126, 1)",
        borderRadius: "2em",
        width: "10em",
        height: "3.5em",
        alignSelf: "center",
        margin: "1.2em",
        fontWeight: "600",
        fontSize: "16px",
        color: "#fff"
    },
    darklink: {
        padding: "2em 0em 0em 0em",
        color: "#010101"
    },
    darkbuticon: {
        background: "#fff",
        borderRadius: "50%",
        padding: ".2em",
        color: "rgba(87, 87, 126, 1)"
    },
    darkheading: {
        marginBotton: "20em",
        fontSize: "3.5em",
        color: '#000',
        [theme.breakpoints.down("xs")]: {
            fontSize: "2.5em"
        }
    }
    ,
    darkcont: {
        width: "100%",
    },
    darkfpass: {
        fontSize: "1em",
        color: "#B3B3D3",
        cursor: "pointer",
        flex: "1 1 auto",
        textDecoration: "underline"
    },
    darkfcontent: {
        margin: "1em 0em",
        textAlign: "start",
        color: "rgba(0,0,0,0.9)",
        fontSize: "1.1em"
    },
    darksentimage: {
        maxWidth: "90%",
        [theme.breakpoints.down("xs")]: {
            marginTop: "1em"
        },
    },
    darkerror: {
        paddingLeft: "0.5em",
        color: 'red'
    },
    clglogo: {
        maxWidth: "8em"
    },
    switchroot: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        color: "#fff",
        "&$checked": {
            color: yellow[500],
            transform: 'translateX(16px)',
        },
        "&$checked + $track": {
            backgroundColor: "#23243C"
        },
        "$track": {
            backgroundColor: "#23243C"
        }
    },
    thumb: {
        width: 24,
        height: 24,
    },
    checked: {},
    track: {
        borderRadius: 26 / 2,
    },
    colorPrimary: {
        color: "#fff"
    }
}));