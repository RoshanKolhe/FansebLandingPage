import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './influencer.css';
// import avatarImg from '../../../../src/images/EASY-PEASY.png';
import avatarImg from '../../../../src/images/easypeasy.gif';
import Galaxy from '../../Galaxy/Galaxy';

export default function Influencer() {
  return (
    <>
      <section className="wrapper">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <div className="avatar">
                {/* <video controls loop>
                  <source src={avatarImg} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <img src={avatarImg} className="img-fluid" width="800px" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
