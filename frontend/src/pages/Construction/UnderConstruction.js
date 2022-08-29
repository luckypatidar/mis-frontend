import React, { useState } from 'react';
//material ui components
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import useStyles from './styles';

//components
import Sidebar from '../../components/Sidebar/Sidebar';
import construction from '../../assets/construction.svg';


function UnderConstruction({checked}) {

    const classes = useStyles();
    const [messageComponent, setMessageComponent] = useState(true);
    const [checkedforgot, setCheckedForgot] = useState(false);


    return (

        <>

            <div className={checked ? classes.root : classes.darkroot}>
               
                <div>
                    <div>
                        <Container className={classes.wrapper}>
                            <img src={construction} alt="Page under construction" className={classes.responsive} />
                            <Typography className={checked ?classes.footer:classes.darkfooter}>Page Under Construction</Typography>
                        </Container>
                    </div>
                </div>
            </div>
        </>


    )
}
export default UnderConstruction;
