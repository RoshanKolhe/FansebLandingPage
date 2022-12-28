import React, { useState } from "react";
import styles from "./User.css";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import { HiUserCircle } from "react-icons/hi";



const Login = () => {
    
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
            <Row
            className="text-center"
            style={{
                justifyContent: 'center',
                height:'auto', 
                padding:'auto'
            }}> 
                <div 
                style={{
                    justifyContent: 'center',
                    height:'auto',
                    marginTop:70, 
                }}> 
                    <img width="140" height="180"src={require('./inReviewPanda.jpeg')} alt="inReview" />
                </div>
                
                <h5 style={{
                    marginTop:30, 
                    ontWeight: 'bold',
                    fontSize:22,
                    color: 'black'
                    }}> We have received your request to become a creatorpreneur</h5>
                <h6 style={{
                    marginTop:30, 
                    fontSize:16,
                    }}> Your request is being reviewed by our team and you will hear from us soon.</h6>
                <Button style={{
                    marginTop:30, 
                    }}> Status: In Review
                </Button>
            </Row>
        </Container>
    </>
  );
};

export default Login;
