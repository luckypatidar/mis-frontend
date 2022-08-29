import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';


//icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DraftsIcon from '@material-ui/icons/Drafts';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Brightness2Icon from '@material-ui/icons/Brightness2'
import DomainIcon from '@material-ui/icons/Domain';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useTheme, createMuiTheme } from '@material-ui/core/styles';
import useStyles from './styles';

import logo from "../../assets/Logo_dark.png"
import darklogo from "../../assets/iiit_surat.png"
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';
import { useHistory } from 'react-router';
import { appHistory } from '../../App';


//
import moment from 'moment';
import { assignCourseToStudent } from '../../actions/Courses';




export default function Sidebar(props) {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const checked = props.checked;
  const dispatch = useDispatch();
  const history = useHistory();
  const [selected,setSelected] = useState(0);
  // console.log(user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSelect = (index) =>{
    setSelected(index);
  }
  const handleSidebutton = (props) => {
    // props.setMessageComponent(true);
    // props.setCourses(false)
    // props.setAttendence(false);
    // props.setMarks(false);
  }
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    history.go(0);
  }

  const assignedCourse = {
    courseId: "60b0d8d93679be65749717ff",
    courseStudents: [
      {
        student: "60de77c43d8a150ac88220b2"
      },
    ]
  }

  //------------left drawer------//
  const drawer = (
    <div >

      <div className={checked ? classes.head : classes.darkhead}>
        <div>
          <img className={checked ? classes.img : classes.darkimg} src={checked ? logo : darklogo} />
        </div>
        <div className={checked ? classes.instituteName : classes.darkInstituteName}>
          Indian Institute of Information
          Technology, Surat
        </div>
      </div>

      <Divider className={checked ? classes.border : classes.darkborder} variant="middle" />

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ justifyContent: 'flex-end' }} >
          <List >
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <ListItem 
                    button
                    selected={selected==0} 
                    classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}
                    onClick={()=>handleSelect(0)}
              >
                <ListItemIcon>
                  <HomeIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                </ListItemIcon>
                <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Dashboard" />
              </ListItem>
            </Link>
            {user?.userType === "Student" ?
              <Link to={'/profile'} style={{ textDecoration: 'none' }}>
                <ListItem 
                      button
                      selected={selected==1}
                      onClick={()=>handleSelect(1)}
                      classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}
                >
                  <ListItemIcon>
                    <AccountCircleIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                  </ListItemIcon>
                  <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Profile" />
                </ListItem>
              </Link>
              : null
            }

            {user?.userType === "Student" ?
              <Link to={'/courses'} style={{ textDecoration: 'none' }}>
                <ListItem 
                      button
                      selected={selected==2}
                      onClick={()=>handleSelect(2)}
                      classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}
                >
                  <ListItemIcon>
                    <DraftsIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                  </ListItemIcon>
                  <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Courses" />
                </ListItem>
              </Link>
              : null
            }

            {user?.userType === "Faculty" ?
              <Link to={'/attendence'} style={{ textDecoration: 'none' }}>
                <ListItem 
                      button
                      selected={selected==3}
                      onClick={()=>handleSelect(3)}
                      classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}
                >
                  <ListItemIcon>
                    <InboxIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                  </ListItemIcon>
                  <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Attendence" />
                </ListItem>
              </Link>
              :
              null
            }

            {user?.userType === "Faculty" ?

              <ListItem 
                    button
                    selected={selected==4}
                    onClick={()=>handleSelect(4)}
                    classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}>
                <ListItemIcon>
                  <InboxIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                </ListItemIcon>
                <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Options" />
              </ListItem>

              :
              null
            }
            {
              user?.userType === "Admin" ?
                <Link to={'/newassign'} style={{ textDecoration: 'none' }}>
                  <ListItem 
                      button
                      selected={selected==5}
                      onClick={()=>handleSelect(5)}
                      classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}
                  >
                    <ListItemIcon>
                      <InboxIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                    </ListItemIcon>
                    <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="New Course" />
                  </ListItem>
                </Link>
                : null
            }
            {
              user?.userType === "Admin" ?
                <Link to={'/assign'} style={{ textDecoration: 'none' }}>
                  <ListItem 
                        button
                        selected={selected==6}
                        onClick={()=>handleSelect(6)}
                        classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}>
                    <ListItemIcon>
                      <InboxIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                    </ListItemIcon>
                    <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Existing Courses" />
                  </ListItem>
                </Link>
                : null
            }
            {
              user?.userType === "Student" ?
                <Link to={'/underconstruction'} style={{ textDecoration: 'none' }}>
                  <ListItem 
                        button
                        selected={selected==7}
                        onClick={()=>handleSelect(7)}
                        classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}>
                    <ListItemIcon>
                      <EventNoteIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                    </ListItemIcon>
                    <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Apply for certificate" />
                  </ListItem>
                </Link>
                : null
            }
            {
              user?.userType === "Student" ?
                <Link to={'/underconstruction'} style={{ textDecoration: 'none' }}>
                  <ListItem 
                        button
                        selected={selected==8}
                        onClick={()=>handleSelect(8)}
                        classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}>
                    <ListItemIcon>
                      <LibraryBooksIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                    </ListItemIcon>
                    <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Library" />
                  </ListItem>
                </Link>
                : null
            }
            {
              user?.userType === "Student" ?
                <Link to={'/underconstruction'} style={{ textDecoration: 'none' }}>
                  <ListItem
                        button
                        selected={selected==9}
                        onClick={()=>handleSelect(9)} 
                        classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}>
                    <ListItemIcon>
                      <AttachMoneyIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                    </ListItemIcon>
                    <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Fees" />
                  </ListItem>
                </Link>
                : null
            }
            {
              user?.userType === "Student" ?
                <Link to={'/underconstruction'} style={{ textDecoration: 'none' }}>
                  <ListItem button 
                  selected={selected==10}
                  onClick={()=>handleSelect(10)}
                  classes={{selected:checked ? classes.listitemroot:classes.listitemdarkroot}}>
                    <ListItemIcon>
                      <DomainIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                    </ListItemIcon>
                    <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Hostel" />
                  </ListItem>
                </Link>
                : null
            }
          </List>
        </div>


        <div style={{ justifyContent: 'flex-end', position: 'absolute', bottom: 0 }}

        >
          <List className={checked ? classes.none : classes.dark}>
            <Link to={'/message'} style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
                </ListItemIcon>
                <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Complaints/Suggestions" />
              </ListItem>
            </Link>

            {/* logout */}
            <ListItem button onClick={() => { handleLogout() }} >
              <ListItemIcon>
                <ExitToAppIcon style={{ fill: checked ? "#B3B3D3" : "grey" }} />
              </ListItemIcon>
              <ListItemText style={{color:checked ? "#B3B3D3" : "grey"}} primary="Logout" />
            </ListItem>
          </List>
        </div>
      </div>
    </div >
  );



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>

      <div className={checked ? classes.root : classes.darkroot}>

        <AppBar className={checked ? classes.appBar : classes.darkappBar}>

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={checked ? classes.menuButton : classes.darkmenuButton}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div className={checked ? classes.username : classes.darkUsername}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="left"

                >

                  <Typography style={{ marginTop: "1em" }} variant="h5" noWrap>
                    Hello {user?.uniqueID}
                  </Typography>

                  <Typography style={{ color: checked ? 'rgba(255,255,255,0.7)' : "#999999" }}>
                    {/* date here */}
                    {moment().format("Do MMM")}
                  </Typography>
                </Grid>
              </div>
              {/* dark -light mode toggle */}

              <div className={classes.iconContainer}>
                <Switch
                  checked={checked}
                  onChange={props.onChange}
                  name=""
                  classes={{
                    root: classes.switchroot,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked
                  }}
                  checkedIcon={<Brightness2Icon style={{ fontSize: 25 }} />}
                />
                {/* notification */}
                <NotificationsNoneIcon style={{ fontSize: 32, color: checked ? "#fff" : "#20213D" }} />
                {/* Avatar */}
                <Avatar>H</Avatar>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={checked ? classes.drawer : classes.darkdrawer} aria-label="mailbox folders">

          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: checked ? classes.drawerPaper : classes.darkdrawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: checked ? classes.drawerPaper : classes.darkdrawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={checked ? classes.content : classes.darkcontent}>
          <div className={checked ? classes.main : classes.darkmain} />
        </main>
      </div>

    </>
  );
}



// export default Sidebar;
