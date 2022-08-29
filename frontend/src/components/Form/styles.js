
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // paper: {
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    // },
    paper: {
        padding: theme.spacing(2),
        width: '35%',
        [theme.breakpoints.down("md")]: {
            width: '30%'
        },
        [theme.breakpoints.down("sm")]: {
            width: '45%'
        },
        [theme.breakpoints.down("xs")]: {
            width: '80%'
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        // width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '45%',
    },
    button: {
        fontSize: '18px',
        fontWeight: '500',
        marginRight: 8,
        background: 'linear-gradient(86.7deg, #4DB2E6 0%, #B9BAFE 100%)',
        color: '#fff',
        [theme.breakpoints.down("xs")]: {
            fontSize: '14px',
            width: '80%'
        },
    },
    input: {
        display: 'none',
    },
}));
