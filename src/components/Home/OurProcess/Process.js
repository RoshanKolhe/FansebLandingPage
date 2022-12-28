import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import wow from "wowjs";
// import Image from "next/image";
import styles from "./process.module.css";
// import Img1 from "../../images/Lp/submit.svg";
// import Img2 from "../../images/Lp/link.svg";
// import Img3 from "../../images/Lp/smart-contracts.svg";
// import Img4 from "../../images/Lp/p-flag.svg";
// import Img5 from "../../images/Lp/pointer-2.svg";
// import ar1 from "../../images/Lp/arrow-1.svg";
// import ar2 from "../../images/Lp/arrow-3.svg";
// import ar3 from "../../images/Lp/arrow-4.svg";
// import ar4 from "../../images/Lp/arrow-5.svg";
// import { useRouter } from "next/router";


import Card1_img from "../../../../src/images/process/image1.svg"
import ar1 from "../../../../src/images/process/ar1.svg"
import ar2 from "../../../../src/images/process/ar2.svg"
import ar3 from "../../../../src/images/process/ar3.svg"

export default function Process({
  processHeading = "creators & entrepreneurs as investors who think this is a smashing idea.",
  firstCardContent = "Create",
  last_arrow_image_hide,
  getStartedLink = "/add-project",
}) {
  // const router = useRouter();
  // function navigateToAddProject() {
  //   router.push(getStartedLink);
  // }

  return (
    <>
      <div className={styles.process_sec} >
        <Container>
          <h2 className={styles.head}>{processHeading}</h2>
          <Row className={`${styles.row} justify-content-center`}>
            <Col md={12}>
              <Row>
              <Col lg={1} md={1} sm={12} xs={12} style={{textAlign:"center", margin:"20px auto"}}>
              <span style={{fontSize:"42px",fontWeight:"500"}}>1.</span>
              </Col>
                <Col lg={5} md={5} sm={12} xs={12}>
             
               
                  <div className={`${styles.cards} wow animate__animated animate__fadeInLeft`} >
                  
                    <div className={styles.content}>
                      <div className={styles.img}>
                        {/* <Image src={Img1} alt="" /> */}
                        <img src={Card1_img} width="82" height="93" alt="" />
                      </div>
                      <div className={styles.card_content}>
                        <h5 className={styles.card_head}>{firstCardContent}</h5>
                        <p>
                        sign up & create your own store in under 30 seconds
                        </p>
                      </div>
                    </div>
                  </div>
                
                  <div className={styles.mob}>
                    <div className={styles.mob_ar3}>
                      {/* <Image src={ar3} alt="" /> */}
                      {/* <img src={ar2} width="22" height="90" alt="" /> */}
                    </div>
                  </div>
                </Col>
                {/* <Col lg={2} md={2} sm={12} xs={12}>
                  <div className={styles.ar1}>
                    <Image src={ar1} alt="" />
                    <img src={ar1} width="145" height="25" alt="" />
                  </div>
                </Col> */}
                <Col lg={1} md={1} sm={12} xs={12} style={{textAlign:"center", margin:"20px auto"}}>
              <span style={{fontSize:"42px",fontWeight:"500"}}>2.</span>
              </Col>
              
                <Col lg={5} md={5} sm={12} xs={12}>
                  <div className={`${styles.cards} wow animate__animated animate__fadeInRight animate__delay-1s`}>
                    <div className={styles.content}>
                      <div className={styles.img2}>
                        {/* <Image src={Img2} alt="" /> */}
                        <img src={Card1_img} width="82" height="93" alt="" />
                      </div>
                      <div className={styles.card_content}>
                        <h5 className={styles.card_head}>
                        Curate
                        </h5>
                        <p>
                        curate collections, add your favourite products or simply make your content shop-able.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ar3}>
                    {/* <Image src={ar3} alt="" /> */}
                    {/* <img src={ar2} width="22" height="99" alt="" /> */}
                  </div>
                  <div className={styles.mob_ar3}>
                    {/* <Image src={ar3} alt="" /> */}
                    {/* <img src={ar2} width="22" height="90" alt="" /> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className={`${styles.row} justify-content-center`}>
            <Col md={12}>
              <Row>
              <Col lg={1} md={1} sm={12} xs={12} style={{textAlign:"center", margin:"20px auto"}}>
              <span style={{fontSize:"42px",fontWeight:"500"}}>3.</span>
              </Col>
                <Col lg={5} md={5} sm={12} xs={12}>
               
                  <div className={`${styles.cards} wow animate__animated animate__fadeInLeft animate__delay-2s`}>
                    <div className={styles.content}>
                      <div className={styles.img}>
                        {/* <Image src={Img3} alt="" /> */}
                        <img src={Card1_img} width="82" height="93" alt="" />
                      </div>
                      <div className={styles.card_content}>
                      <h5 className={styles.card_head}>
                        Share
                        </h5>
                        <p>
                        share your store link, collections & your product recommendations across all your social media channels.
                        </p>
                     
                        
                      </div>
                    </div>
                  </div>
                  <div className={styles.ar3}>
                    {/* <Image src={ar3} alt="" /> */}
                    
                  </div>
                  <div className={styles.mob_ar3}>
                    {/* <Image src={ar3} alt="" /> */}
                    {/* <img src={ar2} width="22" height="90" alt="" /> */}
                  </div>
                </Col>
                {/* <Col lg={2} md={2} sm={12} xs={12}>
                  <div className={styles.ar1}>
                    <Image src={ar2} alt="" />
                    <img src={ar3} width="145" height="22" alt="" />
                  </div>
                </Col> */}
                <Col lg={1} md={1} sm={12} xs={12} style={{textAlign:"center", margin:"20px auto"}}>
              <span style={{fontSize:"42px",fontWeight:"500"}}>4.</span>
              </Col>
                <Col lg={5} md={5} sm={12} xs={12}>
                  <div className={`${styles.cards} wow animate__animated animate__fadeInRight animate__delay-3s`}>
                    <div className={styles.content}>
                      <div className={styles.img}>
                        {/* <Image src={Img4} alt="" /> */}
                        <img src={Card1_img} width="82" height="93" alt="" />
                      </div>
                      <div className={styles.card_content}>
                      <h5 className={styles.card_head}>
                        earning!
                        </h5>
                        <p>
                        earn real money every time someone buys anything from your store.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mob_ar3}>
                    {/* <Image src={ar3} alt="" /> */}
                  </div>
                </Col>
               
              </Row>
            </Col>
          </Row>

          {/* <Row className={`${styles.row} justify-content-center`}>
            <Col md={9}>
              <Row className="d-flex align-items-center">
                <Col lg={5} md={5} sm={12} xs={12}>
                  <div className={styles.cards}>
                    <div className={styles.content}>
                      <div className={styles.img5}>
                        <Image src={Img5} alt="" />
                        <img src={Card1_img} width="82" height="93" alt="" />
                      </div>
                      <div className={styles.card_content}>
                        <h5 className={styles.card_head}>
                          Track every step of the process
                        </h5>
                        <p>
                          The project starts in the next 24 hours and you can
                          track it with the help of our dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mob_ar3}>
                    <Image src={ar3} alt="" />
                  </div>
                </Col>

                <Col lg={5} md={5} sm={12} xs={12}>
                  <div>
                    <div className={styles.ar4}>
                      {!last_arrow_image_hide && <Image src={ar4} alt="" />}
                    </div>
                  </div>
                </Col>
                <Col lg={2} md={2} sm={12} xs={12}>
                  <div className={styles.button} >
                    {" "}
                    Get Started
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}
