import React, {useEffect, useState} from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import './Counter.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Galaxy from '../../Galaxy/Galaxy';
import timer from '../../../images/timer.png';

export default function Counter() {
  const [innerWidth, setInnerWidth] = useState({innerWidth: window.innerWidth});
  const [focus, setFocus] = useState(false);

  const resize = () => {
    setInnerWidth({innerWidth: window.innerWidth});
  };
  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);
  return (
    <>
      <section className="counter-section ">
        <Container>
          <Row>
            <div className="creator-counter">
              <div className="text-content">
                <img src={timer} alt='timer'/>
                <div
                  style={{
                    fontSize: innerWidth.innerWidth > 600 ? '128px' : '64px',
                    fontWeight: '600',
                    paddingBottom: '5rem',
                  }}
                >
                  <CountUp
                    separator=","
                    start={focus ? 0 : null}
                    end={28384}
                    duration={2}
                    redraw={true}
                  >
                    {({countUpRef}) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={isVisible => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <a>+</a>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="secondary-text">
                  <p>
                    {' '}
                    creators are on the road to become{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      {' '}
                      creatorpreneurs
                    </span>
                  </p>
                  <p>
                    don't just be a creator, be a{' '}
                    <span
                      style={{
                        fontWeight: '600',
                        background:
                          '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                      }}
                    >
                      creatorpreneur
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-dock">
              <a href=" https://app.fanseb.com/admin/influencer-register">
                <Button
                  variant="contained"
                  className="btn-2"
                  style={{
                    marginRight: 20,
                    marginTop:'25px',
                    width: 190,
                    backgroundImage:
                      'linear-gradient(90deg, #0171ed 0%, #d001ff 100%)',
                  }}
                >
                  <span
                    style={{
                      fontWeight: '800',
                      color: '#fff',
                    }}
                  >
                    Join the Waitlist
                  </span>
                </Button>
              </a>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
