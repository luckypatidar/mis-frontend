import { makeStyles, withTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    background: "#292A3C",
    // marginRight:"0em",
    marginLeft:"0em",
    minHeight: '100vh',
    minWidth:"100vw",
    color: 'white',
    padding: '1em 5em 1em 18em',
    // paddingBottom: '2em',
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingBottom: '2em',
    },
    [theme.breakpoints.down('md')]: {
        paddingBottom: '2em',
    },
},
    main: {
      
      '& .MuiInputBase-input':{
        color: "white"
      },
        "& .MuiToggleButton-root.Mui-selected": {
            background:"linear-gradient(to right bottom, #52B2E7, #B5BAFD)",
            color:"white"
        },
        '& .MuiTextField-root': {
        
          width: "13em",
          
          //height:"45",
          //display: 'flex',
      
        backgroundColor:"#303146",
        borderRadius:"10px"
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: "#303146",
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: "#303146",
        },
        '& .MuiInput-underline:hover': {
          borderBottomColor: 'green',
        },
        '& .MuiFormHelperText-root':{

        }

        
    },
   grid:{
    [theme.breakpoints.down('sm')]: {
      direction:"column",
    },

   },

    heading: {
        color: "#fff",
        fontWeight: 550,
    },
    

    ////dark theme
    darkheading: {
        color: "#20213D",
        fontWeight: 500,
    },
    darkbox: {
      padding:"1em",
        backgroundColor: "#202135",
        width: '100%',
        height: '110%',
        borderRadius: '16px',
    },
    darkbox2: {
      // paddingLeft:"5px",
      // paddingTop:"10px",
      // paddingBottom:"10px",
      padding:"1em",
        backgroundColor: "#202135",
        width: '100%',
        height: '110%',
        borderRadius: '16px',
        marginTop:'2em',
    },
    signimg:{
      height:"2.5em",
      width:"10em",
      marginLeft:"3em",
      marginTop:"1em",
    },
    profileimg:{
      marginTop:"0.5em",
      marginBottom:"1em",
      marginLeft:"3em",
      height:"12em",
      width:"10em"
    }
}));