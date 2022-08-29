import { makeStyles } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';


const drawerWidth = 270;
export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '100%',
        backgroundColor: "#292A3C",
        height: "fit-content",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // overflowX: 'hidden',
        color: "#fff",
        "& .MuiAppBar-colorPrimary": {
            backgroundColor: "#292A3C"
        },

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    listitemroot:{
        borderRight:"4px solid #fff",
    },
    listitemdarkroot:{
        borderRight:"4px solid #010101",
    },
    appBar: {
        paddingBottom: "1em",
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            //height:"100px",
            marginLeft: drawerWidth,
            background: 'transparent',
            boxShadow: 'none',
            backgroundColor: "#292A3C",
            minHeight: "80px",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,

        backgroundColor: "rgba(32, 33, 53, 1)",

        "& .MuiListItemText-root": {
            color: "#B3B3D3"
        },



        "& .MuiPaper-root": {
            color: "#fff"
        },

    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: "1em",
        alignItems: 'center',
        width: '19%',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
    },
    content: {
        width: '100%',
        height: '100%',
    },
    head: {
        marginTop: "3em",
        marginBottom: "1.5em",
        marginLeft: "1em",
        marginRight: "em",
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between'
    },
    username: {

    },
    image: {
        width: "1.5em",
        height: "1.5em",
    },
    img: {
        width: '61px',
        height: '80px',
        marginRight: '1rem'
    },
    border: {
        backgroundColor: "rgba(255, 255, 255, 0.16);",
        height: "1.7px"
    },
    instituteName: {
        fontSize: "17px",
        fontWeight: '400',
        paddingRight: '1em',
    },
    /////responsive main component

    main: {
        height: "90px"
    },
    ////////////////////////////////dark 
    darkroot: {
        display: 'flex',
        // backgroundColor: "rgb(205, 205, 255)",
        height: "fit-content",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // color: "#fff",
        "& .MuiAppBar-colorPrimary": {
            [theme.breakpoints.down('sm')]: {
                backgroundColor: "#f0f0ff"
            },
        },

    },
    darkdrawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    darkappBar: {
        paddingBottom: "1em",
        background: "#f0f0ff",
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            // background: 'transparent',
            boxShadow: 'none',
            minHeight: "80px",
            [theme.breakpoints.down('md')]: {
                backgroundColor: "#f0f0ff",
            }
        },
    },
    darkmenuButton: {
        marginRight: theme.spacing(2),
        color: "#010101",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    darktoolbar: theme.mixins.toolbar,

    darkdrawerPaper: {
        width: drawerWidth,

        backgroundColor: "#FFF",

        "& .MuiListItemText-root": {
            // color: "rgb(205, 205, 255)"
        },



        "& .MuiPaper-root": {
            // color: "#fff"
        },

    },
    darkcontent: {
        width: '100%',
        height: '100%',
    },
    darkUsername: {
        color: "#202135",
    },
    darkhead: {
        marginTop: "3em",
        marginBottom: "1.5em",
        marginLeft: "1em",
        marginRight: "em",
        color: '#FFFF',
        display: 'flex',
        justifyContent: 'space-between'
    },
    darkimage: {
        width: "1.5em",
        height: "1.5em",
    },
    darkimg: {
        width: '61px',
        height: '80px',
        marginRight: '1rem'
    },
    darkborder: {
        backgroundColor: "rgba(1, 1, 1, 0.16)",
        height: "1.7px"
    },
    /////responsive main component

    darkmain: {
        height: "90px"
    },
    darkInstituteName: {
        color: '#000',
        fontSize: "17px",
        fontWeight: '400',
        paddingRight: '1em',
    },
    institute: {//change 
        color: '#fff',
    },


    ///// switch
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
            backgroundColor: "rgba(15, 16, 43, 1)"
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