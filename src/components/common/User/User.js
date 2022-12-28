import React, { useState } from "react";
import styles from "./User.css";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import { HiUserCircle } from "react-icons/hi";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {ProfileDetails,SocialMedialLinks} from "./JoinWaitList";



const steps = [
    'PROFILE DETAILS', 
    'SOCIAL MEDIA LINKS'
  ];

const Login = () => {
    const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <>
        <Container
        style={{
            marginTop:10,

        }}
        >
        <Row
        style={{
            height:40,
        }}
        className="d-flex align-items-center"
        >
            <Col className="d-flex justify-content-start " >
                <h4 style={{fontWeight: 'bold',
                    fontSize:28,color: 'black'}} className={styles.logo_head}>FANSEB</h4>
            </Col>
            <Col className="d-flex justify-content-end">
                <Row className="text-center">
                    <HiUserCircle size={20} />
                    <h6 style={{fontWeight: 'bold',
                    fontSize:10,color: 'black',marginTop:5}} >Profile</h6>
                </Row>
            </Col>
        </Row>
        <hr
        style={{
            color: 'black',
            height: 1,
            marginLeft:"-20%",
            marginRight:"-20%",
        }}/>
        
        {/* Stepper */}
        <Row
        style={{
            marginTop:"5%",
            marginLeft:"30%",
            marginRight:"30%",
            width:"40%",
            height:40,
            padding:0,
            justifyContent:"center"
            }}>
            <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                //Here the code of next file
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
                
            ) : (
                <React.Fragment>
                <hr
                style={{
                    color: 'black',
                    height: 1,
                    marginTop:30,
                }}/>
                <h6
                style={{
                    fontWeight: 'bold',
                    fontSize:18,
                    color:'black',
                    marginTop:30,
                    marginLeft:"1%",
                }} 
                    sx={{ mt: 2, mb: 1 }}>
                    {(activeStep === 0) ? <><ProfileDetails/></> : <><SocialMedialLinks/></> }
                </h6>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                    style={{
                        width:100,
                        height:40,
                    }}
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    >
                    Pre Step
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                    style={{
                        width:100,
                        height:40,
                    }} 
                    onClick={handleNext}
                    >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </Box>
                </React.Fragment>
            )}
            </Box>
        </Row>
        </Container>
    </>
  );
};

export default Login;
