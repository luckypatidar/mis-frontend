import React, { useEffect, useState} from "react";
import ReactDOM from 'react-dom';

import Styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik,ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import useWindowDimensions from './hooks';

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    number: yup
      .string('Enter required')
      .min(8, 'It should be a digit')
      .required(' required'),
  });
  const Occup = [
    {
      value: 'Service',
      label: 'Service',
    },
    {
      value: 'Farmer',
      label: 'Farmer',
    },
    {
      value: 'Business',
      label: 'Business',
    },
    {
      value: 'Government Employee',
      label: 'Government Employee',
    },
  ];

  const Blood = [
    {
      value:'A+',
      label:'A+',
    },
    {
      value:'A-',
      label:'A-',
    },
    {
      value:'B+',
      label:'B+',
    },
    {
      value:'B-',
      label:'B-',
    },
    
    {
      value:'AB+',
      label:'AB+',
    },
    {
      value:'AB-',
      label:'AB-',
    },
    {
      value:'O+',
      label:'O+',
    },
    {
      value:'O-',
      label:'O-',
    },

  ];
  const Admiss=[
    {
      value:'General',
      label:'General'
    },
    {
      value:'OBC',
      label:'OBC'
    },
    {
      value:'EWS',
      label:'EWS'
    },
    {
      value:'SC',
      label:'SC'
    },
    {
      value:'ST',
      label:'ST'
    }

  ]
 const  Nationality=[
  {
    value:'INDIAN',
    label:'INDIAN'
  },
  {
    value:'NRI',
    label:'NRI'
  },
  {
    value:'OTHER',
    label:'OTHER'
  }
 ]
 const StudentType=[
  {
    value:'Hosteller',
    label:'Hosteller'
  },
  {
    value:'Non-Hosteller',
    label:'Non-Hosteller'
  }
 ]
 const Religion=[
  {
    value:'Hindu',
    label:'Hindi'
  },
  {
    value:'Muslim',
    label:'Muslim'
  },
  {
    value:'Sikh',
    label:'Sikh'
  },
  {
    value:'Christian',
    label:'Christian'
  },
  {
    value:'Jain',
    label:'Jain'
  }
 ]
 const Marital=[
  {
    value:'Single',
    label:'Single'
  },
   {
     value:'Married',
     label:'Married'
   },
   

 ]
function StudentFrom({checked}) {
  

    const classes = Styles();

    const [Occupation, setOccupation] = React.useState('');
    const [blood,setBlood]=React.useState('');
    const [fieldValue,setFieldValue]=React.useState('');

    const handleChange = (event) => {
      setOccupation(event.target.value);
      
    };

    /////////////Image Input//////////////
    const [imgState, setImgState] = useState({
      path: "",
    });

  const [imageState, setImageState] = useState({
      digital_signature: "",
    });

    const [imgState1, setImgState1] = useState({
      path1: "",
    });

  const [imageState1, setImageState1] = useState({
      digital_signature1: "",
    });
  
  useEffect(() => {
      formik.setFieldValue("digital_signature", imageState?.digital_signature);
  }, [imageState?.digital_signature]);

  useEffect(() => {
    formik.setFieldValue("digital_signature1", imageState1?.digital_signature1);
}, [imageState1?.digital_signature1]);

  const handleFileChange = (e) => {
      setImageState({
          digital_signature: e.target.files[0],
      });
      setImgState({
          ...imgState,
          path: URL.createObjectURL(e.target.files[0]),
      });
  };
  const handleFileChange1 = (e) => {
    setImageState1({
        digital_signature1: e.target.files[0],
    });
    setImgState1({
        ...imgState1,
        path1: URL.createObjectURL(e.target.files[0]),
    });
};
/////////////////////////////////////////////////////
const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),

    fathername: yup
    .string('Enter your fathername')
    .required('Fathername is required'),

    mothername: yup
    .string('Enter your mothername')
    .required('Mothername is required'),

    fatheroccupation: yup
    .string('Enter your fatheroccupation')
    .required('fatheroccupation is required'),

    email: yup
    .string('Enter your email')
    .email('Invalid Email')
    .required('Email is required'),

  
    bloodgrp: yup
    .string('Enter your bloodgrp')
    .required('bloodgrp is required'),

    enrollno: yup
    .string('Enter your enrollno')
    .required('enrollno is required'),

    fatherno: yup
    .string('Enter your fatherno')
    .required('fatherno is required'),

    motherno: yup
    .string('Enter your motherno')
    .required('motherno is required'),

    admissioncategory: yup
    .string('Enter your admissioncategory')
    .required('admissioncategory is required'),

    studentmobile: yup
    .string('Enter your studentmobile')
    .required('studentmobile is required'),

    marital: yup
    .string('Enter your marital')
    .required('marital is required'),

    religion: yup
    .string('Enter your religion')
    .required('religion is required'),

    studenttype: yup
    .string('Enter your studenttype')
    .required('studenttype is required'),

    nationality: yup
    .string('Enter your nationality')
    .required('nationality is required'),

    signator_name: yup
    .string('Enter your signator_name')
    .required('signator_name is required'),

    digital_signature: yup
    .string('Enter your digital_signature')
    .required('digital_signature is required'),

    paddress: yup
    .string('Enter your paddress')
    .required('paddress is required'),

    city: yup
    .string('Enter your city')
    .required('city is required'),

    state: yup
    .string('Enter your state')
    .required('state is required'),

    country: yup
    .string('Enter your country')
    .required('country is required'),

    pincode: yup
    .string('Enter your pincode')
    .required('pincode is required'),

    corcity: yup
    .string('Enter your corcity')
    .required('corcity is required'),

    corstate: yup
    .string('Enter your corstate')
    .required('corstate is required'),

    corcountry: yup
    .string('Enter your corcountry')
    .required('corcountry is required'),

    corpincode: yup
    .string('Enter your corpincode')
    .required('corpincode is required'),

    mobileno: yup
    .string('Enter your mobileno')
    .required('mobileno is required'),

    dateadm: yup
    .string('Enter your dateadm')
    .required('dateadm is required'),

    steligibilty: yup
    .string('Enter your Stateelgibility')
    .required('Stateelgibility is required'),

    admissionbatch: yup
    .string('Enter your admissionbatch')
    .required('Admissionbatch is required'),

    degree: yup
    .string('Enter your degree')
    .required('Degree is required'),

    branch: yup
    .string('Enter your branch')
    .required('branch is required'),

    jeeapplicationid: yup
    .string('Enter your jeeapplicationid')
    .required('jeeapplicationid is required'),

    instituteadmissionno: yup
    .string('Enter your instituteadmissionno')
    .required('instituteadmissionno is required'),

    semester: yup
    .string('Enter your semester')
    .required('semester is required'),





 
});
////////form initial states////////////////¸
    const formik = useFormik({
        initialValues: {
          name: '',
          fathername:'',
          mothername:'',
          fatheroccupation:'',
          email:'',
          bloodgrp:'',

          enrollno: '',
          fatherno:'',
          motherno:'',
          admissioncategory:'',
          studentmobile:'',
          marital:'',

          religion:'',
          studenttype:'',
          nationality:'',
         
          signator_name: "",
          digital_signature: "",
          // 2nd
          paddress:'',
          city:'',
          state:'',
          country:'',
          pincode:'',

          corcity:'',
          corstate:'',
          corcountry:'',
          corpincode:'',
          mobileno:'',

          // 3rd
          dateadm:'',
          steligibilty:'',
          admissionbatch:'',
          degree:'',
          branch:'',
          jeeapplicationid:'',
          instituteadmissionno:'',
          semester:''



        },
       validationSchema: validationSchema,
       

        onSubmit: (values) => {
            console.log(JSON.stringify(values));
          alert(JSON.stringify(values, null, 2));
        },
      });

      const { height, width } = useWindowDimensions();

      const [flow,setFlow]=React.useState('row');
      var wid ={width}
       var col="column"
      //  useEffect(() => {
      //   {  if(wid.width< 1000){
      //     //alert(wid)
         
      //     setFlow({col})
      //     //console.log(wid.width)
      //      // return(setFlow({col}));
      //     }}
       
      // },[wid])
     //  var soso=flow
const fnc =()=>{
  //alert(wid)
  
}
      
  
   
    
     
    return (
        <Container className={classes.root}>

          <form className={classes.main} onSubmit={formik.handleSubmit}>
              <div className={classes.darkbox}>
               <div>
              <h2 style={{fontFamily:"sans-serif" ,fontWeight:"500"}}> 
              < ChevronRightIcon /> General
              </h2>
              {/* {fnc("column")} */}
       
        <Grid container
          //xs={12}
          
         direction={flow}
         className={classes.grid}
       // justify="space-evenly"
        // alignItems="flex-start"
         >

        <Grid container
         direction="row"
         xs={8}
         >

          
        <Grid item  style={{ marginLeft:"3em",marginRight:"5.5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Name</InputLabel>
              <TextField
        
              id="name"
              name="name"
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10,color:"white"}}
              //fmultiline
              rows={1}
              value={formik.values.names}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
         
            />
         

      </Grid>

      <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Enrollment Number</InputLabel>
              <TextField
        
              id="enrollno"
              name="enrollno"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.enrollno}
              onChange={formik.handleChange}
              error={formik.touched.enrollno && Boolean(formik.errors.enrollno)}
          helperText={formik.touched.enrollno && formik.errors.enrollno}
            />
      </Grid>


      <Grid item  style={{ marginLeft:"3em",marginRight:"5.5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Father's Name</InputLabel>
              <TextField
        
              id="fathername"
              name="fathername"
            
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.fathername}
              onChange={formik.handleChange}
              error={formik.touched.fathername && Boolean(formik.errors.fathername)}
            helperText={formik.touched.fathername && formik.errors.fathername}
            />
      </Grid>

      <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Father's Number</InputLabel>
              <TextField
        
              id="fatherno"
              name="fatherno"
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.fatherno}
              onChange={formik.handleChange}
              error={formik.touched.fatherno && Boolean(formik.errors.fatherno)}
          helperText={formik.touched.fatherno && formik.errors.fatherno}
            />
      </Grid>


      <Grid item  style={{ marginLeft:"3em",marginRight:"5.5em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Mother's Name</InputLabel>
              <TextField
        
              id="mothername"
              name="mothername"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.mothername}
              onChange={formik.handleChange}
              error={formik.touched.mothername && Boolean(formik.errors.mothername)}
          helperText={formik.touched.mothername && formik.errors.mothername}
            />
      </Grid>

      <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em"}}>
              <InputLabel  style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}}> Father's Occupation</InputLabel>
              <TextField
        
              id="fatheroccupation"
              name="fatheroccupation"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
             style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.fatheroccupation}
              error={formik.touched.fatheroccupation && Boolean(formik.errors.fatheroccupation)}
              helperText={formik.touched.fatheroccupation && formik.errors.fatheroccupation}
              onInput={(event) => {
                setOccupation(event.target.value)
               
             }}
              onChange={formik.handleChange}
             // value={Occupation}
              select
            >
            {Occup.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
      </Grid>

      <Grid item  style={{ marginLeft:"3em",marginRight:"5.5em",marginBottom:"1.5em"}}>
              <InputLabel  style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}}>Student's Email</InputLabel>
              <TextField
        
              id="email"
              name="email"
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              
              rows={1}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
      </Grid>

      <Grid item  style={{ marginLeft:"3em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}}>Blood
              Group</InputLabel>
              <TextField
        
              id="bloodgrp"
              name="bloodgrp"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:1,paddingLeft:12}}
              value={formik.values.bloodgrp}
              onChange={formik.handleChange}
              error={formik.touched.bloodgrp && Boolean(formik.errors.bloodgrp)}
              helperText={formik.touched.bloodgrp && formik.errors.bloodgrp}
              select
            >
               {Blood.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            
      </Grid>
     
     
      <Grid item  style={{ marginLeft:"3em",marginRight:"5.5em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Mother's Number</InputLabel>
              <TextField
        
              id="motherno"
              name="motherno"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10,color:"white"}}
              value={formik.values.motherno}
              onChange={formik.handleChange}
              error={formik.touched.motherno && Boolean(formik.errors.motherno)}
              helperText={formik.touched.motherno && formik.errors.motherno}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em"}}>
              <InputLabel  style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}}>Admission Category</InputLabel>
              <TextField
        
              id="admissioncategory"
              name="admissioncategory"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,paddingTop:1,paddingLeft:15}}
              value={formik.values.admissioncategory}
              onChange={formik.handleChange}
              error={formik.touched.admissioncategory && Boolean(formik.errors.admissioncategory)}
              helperText={formik.touched.admissioncategory && formik.errors.admissioncategory}
              select
            >
              {Admiss.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
      </Grid>

      <Grid item  style={{ marginLeft:"3em",marginRight:"5.5em",marginBottom:"1.5em"}}>
              <InputLabel  style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}}>Student's Mobile</InputLabel>
              <TextField
        
              id="studentmobile"
              name="studentmobile"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.studentmobile}
              onChange={formik.handleChange}
              error={formik.touched.studentmobile && Boolean(formik.errors.studentmobile)}
              helperText={formik.touched.studentmobile && formik.errors.studentmobile}
            />
      </Grid>

      <Grid item  style={{ marginLeft:"3em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}}>Marital Status</InputLabel>
              <TextField
              id="marital"
              name="marital"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.marital}
              onChange={formik.handleChange}
              error={formik.touched.marital && Boolean(formik.errors.marital)}
              helperText={formik.touched.marital && formik.errors.marital}
              select
            >
                {Marital.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
              </TextField>
      </Grid>

          </Grid>

       {/* col2 */}
      {/* <Grid container 
       direction="column"
       xs={4}
       > */}



                   
      <Grid container direction="column" xs={4}>
       {/* Profile Image */}
      <Grid   item
      >

          <Grid item  >
          <InputLabel  style={{paddingLeft:"0.3em",marginLeft:"3.5em",color:"white",fontSize:"1em"}}>Profile Photo</InputLabel>

                <img
            className={classes.profileimg}
            src={imgState1?.path1}
            id="preview-image"
            alt=""
      />
            <input
        type="file"
        accept="image/*"
        name="digital_signature1" 
        style={{marginLeft:"3.5em"}}
        onChange={handleFileChange1}
      />
        
          </Grid>
 

         
      <Grid item  style={{ marginLeft:"3em",marginBottom:"1em",marginTop:"0.8em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Religion</InputLabel>
              <TextField
        
              id="religion"
              name="religion"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.religion}
              onChange={formik.handleChange}
              error={formik.touched.religion && Boolean(formik.errors.religion)}
              helperText={formik.touched.religion && formik.errors.religion}
              select
              >
                  {Religion.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
              </TextField>
       
            
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginBottom:"1em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Student Type</InputLabel>
              <TextField
        
              id="studenttype"
              name="studenttype"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.studenttype}
              onChange={formik.handleChange}
              error={formik.touched.studenttype && Boolean(formik.errors.studenttype)}
              helperText={formik.touched.studenttype && formik.errors.studenttype}
              select
            >
                {StudentType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
      </Grid>

      <Grid item  style={{ marginLeft:"3em",marginTop:"0.7em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Nationality</InputLabel>
              <TextField
        
              id="nationality"
              name="nationality"
              
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.nationality}
              onChange={formik.handleChange}
              error={formik.touched.nationality && Boolean(formik.errors.nationality)}
              helperText={formik.touched.nationality && formik.errors.nationality}
              select
            >
                {Nationality.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
      </Grid>
     

</Grid>
                  
                  {/* Signature photo */}
       
       </Grid>
       <Grid container
        direction="row">
            <img
      className={classes.signimg}
      src={imgState?.path}
      id="preview-image"
      alt=""
 />
       <input
  type="file"
  accept="image/*"
  name="digital_signature" 
  style={{marginTop:"1.8em",marginLeft:"1em"}}
  onChange={handleFileChange}
/>
  
       </Grid>

        </Grid>
    
      
        </div>
        </div>

        {/* address   box 2*/}

        <div className={classes.darkbox2}>
        <h2 style={{fontFamily:"sans-serif" ,fontWeight:"500"}}> < ChevronRightIcon  /> Address and Contact Details</h2>

        <InputLabel style={{paddingBottom:"0.5em",marginTop:"2em",fontSize:"20px",color:"white",marginLeft:"3em"}} > Permanent Address</InputLabel>
        <FormControl fullWidth className={classes.margin}>
          <FilledInput
           
              id="paddress"
              name="paddress"
              InputProps={{ disableUnderline: true }}
              style={{ padding:10,paddingLeft:10,width:"70%",color:"white",background:"#303146",borderRadius:"10px",marginBottom:"1em",marginLeft:"3em"}}
              multiline
              rows={3}
              defaultValue="Address"
    
              value={formik.values.paddress}
              onChange={formik.handleChange}
              error={formik.touched.paddress && Boolean(formik.errors.paddress)}
              helperText={formik.touched.paddress && formik.errors.paddress}
              variant="filled"
              
           
          />
        </FormControl>

                  <Grid container
                  direction="row"
                  xs={8}
                  >
  
  <Grid item  style={{ marginLeft:"3em",marginRight:"7em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >City</InputLabel>
              <TextField
        
              id="city"
              name="city"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
      </Grid>

    <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >State</InputLabel>
              <TextField
        
              id="state"
              name="state"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
      </Grid>
      
      <Grid item  style={{ marginLeft:"3em",marginRight:"7em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white",fontSize:"1em"}} >Country</InputLabel>
              <TextField
        
              id="country"
              name="country"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
      </Grid>

    <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >Pin Code</InputLabel>
              <TextField
        
              id="pincode"
              name="pincode"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.pincode}
              onChange={formik.handleChange}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
      </Grid>
                  </Grid>
        
        
        <InputLabel style={{paddingBottom:"0.5em",marginTop:"1em",fontSize:"20px",color:"white",marginLeft:"2em"}} >Address of correspondence</InputLabel>
        <FormControl fullWidth className={classes.margin}>
          <FilledInput
           
              id="paddress"
              name="paddress"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
             style={{ padding:10,paddingLeft:10,width:"70%",color:"white",background:"#303146",borderRadius:"10px",marginBottom:"1em",marginLeft:"3em"}}
              multiline
              rows={3}
              defaultValue="Address"
    
              value={formik.values.paddress}
              onChange={formik.handleChange}
              error={formik.touched.paddress && Boolean(formik.errors.paddress)}
              helperText={formik.touched.paddress && formik.errors.paddress}
              variant="filled"
              
           
          />
        </FormControl>
       
              
              
              
            
        <Grid container
                  direction="row"
                  xs={8}
                  >
  
  <Grid item  style={{ marginLeft:"3em",marginRight:"7em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >City</InputLabel>
              <TextField
        
              id="corcity"
              name="corcity"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.corcity}
              onChange={formik.handleChange}
              error={formik.touched.corcity && Boolean(formik.errors.corcity)}
              helperText={formik.touched.corcity && formik.errors.corcity}
            />
      </Grid>

    <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >State</InputLabel>
              <TextField
        
              id="corstate"
              name="corstate"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.corstate}
              onChange={formik.handleChange}
              error={formik.touched.corstate && Boolean(formik.errors.corstate)}
              helperText={formik.touched.corstate && formik.errors.corstate}
            />
      </Grid>
      
      <Grid item  style={{ marginLeft:"3em",marginRight:"7em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >Country</InputLabel>
              <TextField
        
              id="corcountry"
              name="corcountry"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.corcountry}
              onChange={formik.handleChange}
              error={formik.touched.corcountry && Boolean(formik.errors.corcountry)}
              helperText={formik.touched.corcountry && formik.errors.corcountry}
            />
      </Grid>

    <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >Pin Code</InputLabel>
              <TextField
        
              id="corpincode"
              name="corpincode"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.corpincode}
              onChange={formik.handleChange}
              error={formik.touched.corpincode && Boolean(formik.errors.corpincode)}
              helperText={formik.touched.corpincode && formik.errors.corpincode}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >Mother's Name</InputLabel>
              <TextField
        
              id="mothername"
              name="mothername"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.mothername}
              onChange={formik.handleChange}
              error={formik.touched.mothername && Boolean(formik.errors.mothername)}
              helperText={formik.touched.mothername && formik.errors.mothername}
            />
      </Grid>
                  </Grid>

          
          </div>

{/* 3rd box */}

<div className={classes.darkbox2}>
       
        

          <h2 style={{fontFamily:"sans-serif" ,fontWeight:"500"}}> < ChevronRightIcon  /> Admission Details</h2>
          <Grid container
         direction="row"
     
         >
        <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white"}} >Date of Admission</InputLabel>
              <TextField
              id="dateadm"
              name="dateadm"
              type="date"
             
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10,color:"white"}}
              value={formik.values.dateadm}
              onChange={formik.handleChange}
              error={formik.touched.dateadm && Boolean(formik.errors.dateadm)}
              helperText={formik.touched.dateadm && formik.errors.dateadm}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white"}} >State Eligibilty</InputLabel>
              <TextField
        
              id="steligibilty"
              name="steligibilty"
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.steligibilty}
              onChange={formik.handleChange}
              error={formik.touched.steligibilty && Boolean(formik.errors.steligibilty)}
              helperText={formik.touched.steligibilty && formik.errors.steligibilty}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >Admission Batch</InputLabel>
              <TextField
        
              id="admissionbatch"
              name="admissionbatch"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.admissionbatch}
              onChange={formik.handleChange}
              error={formik.touched.admissionbatch && Boolean(formik.errors.admissionbatch)}
              helperText={formik.touched.admissionbatch && formik.errors.admissionbatch}
            />
      </Grid>


      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white"}} >Degree</InputLabel>
              <TextField
        
              id="degree"
              name="degree"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10,color:"white"}}
              value={formik.values.degree}
              onChange={formik.handleChange}
              error={formik.touched.degree && Boolean(formik.errors.degree)}
              helperText={formik.touched.degree && formik.errors.degree}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white"}} >Branch</InputLabel>
              <TextField
        
              id="branch"
              name="branch"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.branch}
              onChange={formik.handleChange}
              error={formik.touched.branch && Boolean(formik.errors.branch)}
              helperText={formik.touched.branch && formik.errors.branch}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1.5em",paddingTop:"0.5em"}}>
              <InputLabel style={{paddingBottom:"0.4em",paddingLeft:"0.3em",color:"white"}} >JEE Application Id</InputLabel>
              <TextField
        
              id="jeeapplicationid"
              name="jeeapplicationid"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.jeeapplicationid}
              onChange={formik.handleChange}
              error={formik.touched.jeeapplicationid && Boolean(formik.errors.jeeapplicationid)}
              helperText={formik.touched.jeeapplicationid && formik.errors.jeeapplicationid}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white"}} >Semester</InputLabel>
              <TextField
        
              id="semester"
              name="semester"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10,color:"white"}}
              value={formik.values.semester}
              onChange={formik.handleChange}
              error={formik.touched.semester && Boolean(formik.errors.semester)}
              helperText={formik.touched.semester && formik.errors.semester}
            />
      </Grid>
      <Grid item  style={{ marginLeft:"3em",marginRight:"5em",marginBottom:"1.5em"}}>
              <InputLabel style={{paddingBottom:"0.5em",paddingLeft:"0.3em",color:"white"}} >Institute Admission No.</InputLabel>
              <TextField
        
              id="instituteadmissionno"
              name="instituteadmissionno"
              multiline
              rows={1}
              InputProps={{ disableUnderline: true }}
              style={{ height: 36,padding:2,paddingLeft:10}}
              value={formik.values.instituteadmissionno}
              onChange={formik.handleChange}
              error={formik.touched.instituteadmissionno && Boolean(formik.errors.instituteadmissionno)}
              helperText={formik.touched.instituteadmissionno && formik.errors.instituteadmissionno}
            />
      </Grid>
     

          </Grid>

          </div>

          {/*Save button */}
          <Button 
          style={{}}
           color="primary"
            variant="contained" 
             type="submit"
             >
          Save
        </Button>

        </form>
        </Container>
    )
}

export default StudentFrom
