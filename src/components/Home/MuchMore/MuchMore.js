import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Galaxy from '../../Galaxy/Galaxy';
import './MuchMore.css';

export default function MuchMore() {
  return (
    <>
      <div style={{position: 'relative'}}>
        <section className="much-more">
          <Container>
            <Row>
              <Col md={12}>
                <div className="section-title1">
                  <h2 className="title">
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
                      treasure
                    </span>{' '}
                    you get.
                  </h2>
                </div>
              </Col>
              <div className="icon-grid animate__zoomIn wow animate__animated">
                <div className="avatar-card avatar-1">
                  <img
                    src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/together_with_digital_icons.png"
                    width={230}
                    alt="img"
                    style={{marginLeft: '90px'}}
                    className="mb-3 mt-5"
                  />
                  <p>
                    {'getting '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      treasure
                    </span>{' '}
                    by paid brand collabs
                  </p>
                </div>{' '}
                <div className="avatar-card avatar-2 animate__zoomIn wow animate__animated">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-working-on-laptop-while-seating-on-sofa-5622801-4694800.png"
                    width={280}
                    alt="img"
                  />
                  <p>
                    {'getting '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      treasure
                    </span>{' '}
                    by celebrity collabs
                  </p>
                </div>
                <div className="avatar-card avatar-3 pl-3 animate__zoomIn wow animate__animated">
                  <img
                    src="https://ouch-cdn2.icons8.com/w1_iq548AipAMAEcCVq8zsTqFbNY7oEnx3cLpHtj6so/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2MxYzcxMDk4LTE5/ZWEtNDNjMS1hMzRk/LWFlYzk4ODE1ZWQw/Zi5wbmc.png"
                    width={180}
                    alt="img"
                    className="ml-5"
                  />
                  <p>
                    refer friends for more{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      treasure
                    </span>{' '}
                  </p>
                </div>{' '}
                <div className="avatar-card avatar-4 animate__zoomIn wow animate__animated">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/male-video-blogger-5571171-4659673.png"
                    width={210}
                    alt="img"
                  />
                  <p>
                    create your own brand & explore{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      treasure
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
