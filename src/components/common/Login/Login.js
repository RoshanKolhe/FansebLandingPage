import React, { useState } from "react";
import styles from "./Login.module.css";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import CloseButton from "react-bootstrap/CloseButton";

import {
  mobileLoginAsyncThunk,
  verifyOtpAsyncThunk,
} from "../../../store/slices/auth/auth.slice";
import { useNavigate } from "react-router-dom";

let SignupSchema = yup.object().shape({
  phone: yup.number().required("Number is required"),
  // .test(
  //   "len",
  //   "Phone number should be 10 digits long",
  //   (val) => val?.length === 10
  // ),
});
const Login = () => {
  //const [showModal, setShowModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(false);
  const [timmer, setTimmer] = useState(30);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const decTimer = () => setTimmer((state) => state - 1);

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        phone: "",
      },
      onSubmit: (values) => {
        // console.log("submit");
        dispatch(
          mobileLoginAsyncThunk({
            mobile_number: values.phone,
          })
        )
          .unwrap()
          .then((res) => {
            setInterval(allowResend, 30000);
            setShowModal(true);
          })
          .catch((err) => console.log(err));
      },
      validationSchema: SignupSchema,
    });

  console.log(otp);
  const handleOtpChange = (otp) => {
    setOtp((state) => otp);
  };

  const verifyOtpHandler = (e) => {
    console.log(otp);
    dispatch(
      verifyOtpAsyncThunk({
        mobile_number: values.phone,
        otp,
      })
    )
      .unwrap()
      .then((res) => navigate("/allproduct"))
      .catch((err) => console.log(err));
  };

  const resendOtpHandler = (e) => {
    dispatch(mobileLoginAsyncThunk({ mobile_number: values.phone }))
      .unwrap()
      .then((res) => {
        setResend(false);
        setInterval(allowResend, 30000);
      })
      .catch((err) => console.log(err));
  };
  const allowResend = () => {
    setResend(true);
  };

  console.log(errors);
  const closeButtonHandler = (e) => {
    setShowModal(false);
  };
  // if (showModal)
  //   return (
  //     <Modal.Dialog>
  //       <Modal.Header>
  //         <Modal.Title>Modal title</Modal.Title>
  //       </Modal.Header>

  //       <Modal.Body>
  //         <div style={{ width: "300px" }}>
  //           <OtpInput
  //             value={otp}
  //             onChange={handleOtpChange}
  //             numInputs={6}
  //             separator={<span>-</span>}
  //           />
  //         </div>
  //       </Modal.Body>

  //       <Modal.Footer>
  //         <div style={{ width: "30%" }}>
  //           <Button variant="secondary" onClick={closeButtonHandler}>
  //             Close
  //           </Button>
  //         </div>
  //         <div
  //           style={{
  //             width: "67%",
  //             display: "flex",
  //             justifyContent: "flex-end",
  //           }}
  //         >
  //           <Button variant="primary" onClick={verifyOtpHandler}>
  //             Verify
  //           </Button>
  //           <Button
  //             variant={resend ? "primary" : "secondary"}
  //             disabled={!resend}
  //             onClick={resendOtpHandler}
  //           >
  //             Resend
  //           </Button>
  //         </div>
  //       </Modal.Footer>
  //     </Modal.Dialog>
  //   );
  return (
    <>
      <div>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <h4 style={{fontWeight: 'bold',
                        fontSize:28,color: 'black'}}>FANSEB</h4>
                <h2 className={styles.login_head}>
                  Welcome to <br /> FANSEB Store
                </h2>
                <p className={styles.login_para}>
                  Don't just watch, now shop from <br /> snackable videos
                </p>
                <h4>Log in to continue</h4>
                <form onSubmit={handleSubmit}>
                  <div className={styles.right_footer}>
                    <div className={styles.right_footer_container}>
                      <div className={styles.inp}>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          value={values.phone}
                          onBlur={handleBlur}
                          className={styles.phone_no_input}
                        />
                      </div>

                      <div className={styles.btn}>
                        <Button type="submit">
                          <FaArrowRight />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </form>
              </div>
            </Container>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className={styles.sec_col}>
              <img
                src={require('./mobileLogin.webp')}
                height="800px"
                alt=""
              />
            </div>
          </Col>
        </Row>
        {showModal && (
          <Row
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%,-50%)",
          // }}
          >
            <div className="container">
              <Modal show={showModal} className={styles.customModal} size="sm">
                <div>
                  <CloseButton
                    onClick={closeButtonHandler}
                    style={{
                      float: "right",
                      paddingTop: "28px",
                      paddingRight: "30px",
                    }}
                  />
                </div>
                <Modal.Body className={styles.otp_modal}>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yS6uqHQFtdAvabEBrWVrw1L1tNgWv9VAGQ&usqp=CAU"
                      alt=""
                      width={100}
                    />
                    <h5 className={styles.modal_title}>ENTER OTP 30 SECS</h5>
                    <p className={styles.modal_subtitle}>
                      Enter the 6-digit OTP received on your phone
                    </p>
                  </div>
                  <div className={styles.inputSize}>
                    <OtpInput
                      value={otp}
                      onChange={handleOtpChange}
                      numInputs={6}
                      separator={<span>-</span>}
                      containerStyle={{ justifyContent: "center" }}
                    />
                  </div>

                  <div>
                    {/* <p className={styles.resend_timer}>Resend OTP in:</p>
                    <p className={styles.timer}>1:03</p> */}

                    <p className={styles.otp_resend}>
                      {" "}
                      <i
                        className="fa fa-arrow-rotate-right me-2 "
                        aria-hidden="true"
                      ></i>{" "}
                      Resend
                    </p>
                  </div>
                </Modal.Body>

                <Modal.Footer style={{ justifyContent: "flex-end" }}>
                  {/* <div>
                    <Button
                      variant="secondary"
                      onClick={closeButtonHandler}
                      size="sm"
                    >
                      Close
                    </Button>
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="primary"
                      onClick={verifyOtpHandler}
                      size="sm"
                      className="me-2"
                    >
                      Verify Otp
                    </Button>
                    {/* <Button
                      variant={resend ? "primary" : "secondary"}
                      disabled={!resend}
                      onClick={resendOtpHandler}
                      size="sm"
                    >
                      Resend
                    </Button> */}
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
          </Row>
        )}
      </div>
    </>
  );
};

export default Login;
