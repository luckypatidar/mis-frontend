import React, { useState } from 'react'
import { Card, Typography, Button, Grow, Slide, Popover, CardMedia } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deleteAnnouncement } from '../../actions/Announcement';
import Form from '../Form/Form';
import logo from '../../assets/iiit_surat.png';
import styles from './styles';


export default function CarouselComponent({ item, checked }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [active, setActive] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleToggle = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenModal(false);
    };

    const removeAnnouncement = () => {
        const data = {
            announcementId: item._id,
        }
        dispatch(deleteAnnouncement(data));
        setAnchorEl(null);
    }

    const editAnnouncement = () => {
        setOpenModal(true);
        setAnchorEl(null);
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const user = JSON.parse(localStorage.getItem("profile"));
    const handleClick = () => {
        setActive((prev) => !prev);
    }

    const backgroundUrl = item?.images[0]?.split(" ")[0];
    const fileUrl = item?.files[0]?.split(" ")[0];
    // console.log(fileUrl);
    return (
        <div>
            <Card className={active ? classes.cardroot : classes.card2root} style={{
                backgroundImage: item.images[0] == [""] ? checked ? `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${logo})` : `url(${logo})` : checked ? `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${backgroundUrl})` : `url(${backgroundUrl})`,
                boxShadow: !checked ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : '',
            }} >

                <Grow in style={{ transitionDelay: '100ms' }}>
                    <div className={active ? classes.wrapper : classes.wrapper2}
                        style={{ background: checked ? 'linear-gradient(180.59deg, rgba(0, 0, 0, 0) 0.51%, #000000 118.35%)' : 'linear-gradient(180.59deg, rgba(0, 0, 0, 0.4) 0.51%, #000000 118.35%)' }}
                    >
                        {
                            user.userType == "Admin" ?
                                <div>
                                    <Button style={{ position: 'absolute', top: '-120%', right: '0', color: 'white', marginRight: "0" }} onClick={handleToggle}>
                                        <MoreVertIcon />
                                    </Button>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <div className={classes.popover}>
                                            <div style={{ backgroundColor: 'transparent' }}>
                                                <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', }} className={classes.editdiv} onClick={editAnnouncement}>
                                                    <EditIcon style={{ fontSize: '18px', paddingRight: '2px' }} />
                                                    <Typography style={{ fontSize: '12px' }}>Edit</Typography>
                                                </Button>
                                            </div>
                                            <div style={{ borderBottom: '1px dotted #fff' }} />
                                            <div >
                                                <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', }} className={classes.deletediv} onClick={removeAnnouncement}>
                                                    <DeleteIcon style={{ fontSize: '18px', paddingRight: '2px' }} />
                                                    <Typography style={{ fontSize: '12px' }}>Delete</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </Popover>
                                </div>
                                : null
                        }
                        <div className={active ? "" : classes.wrapper3}>
                            <div>
                                <Slide direction="up" in={true}>
                                    <div className={active ? classes.infoContainer : classes.infoContainer2}>
                                        <div className={active ? '' : classes.wrapperdiv}>
                                            <div >
                                                <Typography variant="h6" component="h1" className={active ? classes.heading1 : classes.heading2}
                                                >
                                                    {item.heading}
                                                </Typography>
                                                <Typography className={active ? classes.content : classes.content2} variant="body1">
                                                    {item.content == "" ? "content" : item.content}
                                                </Typography>
                                            </div>
                                            <div style={{ display: active ? "none" : "block" }} className={classes.linkdiv}>
                                                {item.files[0] == [""]
                                                    ? null
                                                    :
                                                    <Button style={{ backgroundColor: '#1EAEDB', padding: '0.2em 0.5em 0.2em 0.5em' }} variant="contained" href="#text-buttons">
                                                        <a href={fileUrl} className={classes.downloadlink} target="_blank"> Download</a>
                                                    </Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                            <div className={active ? classes.btnContainer : classes.btnContainer2}>
                                <Typography style={{ fontSize: "12px", fontWeight: '500' }}>
                                    {active ? moment(item.createdAt).fromNow() : moment(item.createdAt).format('ll')}
                                </Typography>
                                <Button size="small" color="primary" className={active ? classes.btn : classes.btn2}
                                    onClick={handleClick} >
                                    {active ? "View" : "Close"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Grow>

            </Card>
            {
                <div>
                    <Form open={openModal} handleClose={handleClose} item={item} />
                </div>
            }
        </div >
    )
}
