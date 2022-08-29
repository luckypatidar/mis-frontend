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
  table: {
    borderCollapse: "separate",
    borderSpacing: "0px 18px",
    width: "100%",
    color: 'white',
    border: 'none',
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
  container: {
    display: 'flex',
    backgroundColor: 'rgba(82, 82, 98, 0.29)',
    width: 'fit-content',
    padding: '0.4rem',
    borderRadius: '11px',
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
    width: '14em',
    height: '16.5em',
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