import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Galaxy from '../../Galaxy/Galaxy';
import {useScrollHandler} from '../Instagram/Instagram';
import './MuchMore.css';

export default function MuchMore() {
  const scroll = useScrollHandler();
  console.log('scroll', scroll);
  return (
    <>
      <div style={{position: 'relative'}}>
        <section className="much-more">
          <Container>
            <Row>
              <Col md={12}>
                <div className="section-title1">
                  <h2 className="title" style={{color: '#fff'}}>
                    but that’s not all. there’s so much <br />{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      more
                    </span>{' '}
                    you get.
                  </h2>
                </div>
              </Col>
              <div className="icon-grid animate__zoomIn wow animate__animated">
                <div className="avatar-card avatar-1">
                  <div class="circle">
                    {scroll >= 1900 ? (
                      <img
                        src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/together_with_digital_icons.png"
                        width={230}
                        alt="img"
                        style={{marginLeft: '90px'}}
                        className={
                          scroll >= 1900
                            ? 'animateImage mb-3 mt-5'
                            : 'mb-3 mt-5'
                        }
                      />
                    ) : null}
                  </div>

                  <p>
                    {' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      more
                    </span>{' '}
                    paid brand collabs
                  </p>
                </div>{' '}
                <div className="avatar-card avatar-2 animate__zoomIn wow animate__animated">
                  <div class="circle">
                    {scroll >= 1900 ? (
                      <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-working-on-laptop-while-seating-on-sofa-5622801-4694800.png"
                        width={280}
                        alt="img"
                        className={scroll >= 1900 ? 'animateImage' : ''}
                      />
                    ) : null}
                  </div>

                  <p>
                    {' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      more
                    </span>{' '}
                    celebrity collabs
                  </p>
                </div>
                <div className="avatar-card avatar-3 pl-3 animate__zoomIn wow animate__animated">
                  <div class="circle">
                    {scroll >= 2333 ? (
                      <img
                        src="https://ouch-cdn2.icons8.com/w1_iq548AipAMAEcCVq8zsTqFbNY7oEnx3cLpHtj6so/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2MxYzcxMDk4LTE5/ZWEtNDNjMS1hMzRk/LWFlYzk4ODE1ZWQw/Zi5wbmc.png"
                        width={130}
                        alt="img"
                        className={
                          scroll >= 2333 ? 'animateImage ml-5' : 'ml-5'
                        }
                        style={{marginLeft: '42px'}}
                      />
                    ) : null}
                  </div>

                  <p>
                    refer friends for{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      more
                    </span>{' '}
                    returns
                  </p>
                </div>{' '}
                <div className="avatar-card avatar-4 animate__zoomIn wow animate__animated">
                  <div class="circle">
                    {scroll >= 2333 ? (
                      <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/male-video-blogger-5571171-4659673.png"
                        width={180}
                        alt="img"
                        className={scroll >= 2333 ? 'animateImage' : ''}
                      />
                    ) : null}
                  </div>

                  <p>
                    launch your own brand &{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      more
                    </span>
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
