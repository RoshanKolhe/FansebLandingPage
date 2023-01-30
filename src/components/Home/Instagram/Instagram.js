import {noConflict} from 'lodash';
import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Galaxy from '../../Galaxy/Galaxy';
import one from '../../../images/1.jpeg';
import two from '../../../images/2.jpeg';
import three from '../../../images/3.jpeg';
import four from '../../../images/4.jpeg';

import './instagram.css';
import {Grid} from '@material-ui/core';

const data = [
  {
    title: '01',
    subtitle: 'create',
    text: 'sign up & create your own store in under 30 seconds',
    img: two,
  },
  {
    title: '02',
    subtitle: 'curate',
    text: 'curate collections, add your favourite products or simply make your content shop-able',
    img: three,
  },
  {
    title: '03',
    subtitle: 'share',
    text: 'share your store link, collections & your product recommendations across all your social media channels.',
    img: one,
  },
  {
    title: '04',
    subtitle: 'earning!',
    text: 'earn real money every time someone buys anything from your store',
    img: four,
  },
];

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const body = document.querySelector('body');
    const onScroll = event => {
      const scrollCheck = body.scrollTop > 3000;
      setScroll(body.scrollTop);
    };

    body.addEventListener('scroll', onScroll);
    return () => {
      body.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

export default function Instagram() {
  const scroll = useScrollHandler();

  const [innerWidth, setInnerWidth] = useState({innerWidth: window.innerWidth});
  const resize = () => {
    setInnerWidth({innerWidth: window.innerWidth});
  };
  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

  return (
    <>
      <section className="instagram">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title1">
                <h2 className="title" style={{color: '#fff'}}>
                  as easy as setting up an instagram account. only {''}
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
                  rewarding
                </h2>
              </div>
            </Col>
          </Row>
          <div className="screen-wrapper">
            {innerWidth.innerWidth > 600 ? (
              <>
                <div
                  className="info-section-wrapper"
                  style={{color: scroll ? 'red' : 'green'}}
                >
                  {data.map(datas => (
                    <div className="mobile-info-container">
                      <div className="mobile-info title-animation">
                        <div
                          className="index"
                          style={{background: 'rgb(151, 86, 215)'}}
                        >
                          {datas.title}
                        </div>
                        <div className="mobile-info-name">{datas.subtitle}</div>
                        <div className="mobile-info-description">
                          {datas.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mock-screen">
                  <div className="mobile">
                    <div className="mobile-background">
                      <img
                        src={two}
                        className="mock-screen-img"
                        alt=""
                        style={
                          scroll > 2500 && scroll < 4000
                            ? {display: 'block'}
                            : {display: 'none'}
                        }
                      />
                      <img
                        src={three}
                        className="mock-screen-img"
                        alt=""
                        style={
                          scroll >= 4000 && scroll < 4501
                            ? {display: 'block'}
                            : {display: 'none'}
                        }
                      />
                      <img
                        src={one}
                        className="mock-screen-img"
                        alt=""
                        style={
                          scroll >= 4501 && scroll < 5100
                            ? {display: 'block'}
                            : {display: 'none'}
                        }
                      />
                      <img
                        src={four}
                        className="mock-screen-img"
                        alt=""
                        style={
                          scroll >= 5100
                            ? {display: 'block'}
                            : {display: 'none'}
                        }
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Grid container direction="column">
                  <Grid item>
                    {data.map(datas => (
                      <>
                        <div
                          className="mobile-info title-animation"
                          style={{alignItems: 'center'}}
                        >
                          <div
                            className="index"
                            style={{
                              background: 'rgb(151, 86, 215)',
                              marginTop: '10px',
                            }}
                          >
                            {datas.title}
                          </div>
                          <div className="mobile-info-name">
                            {datas.subtitle}
                          </div>
                          <div
                            className="mobile-info-description"
                            style={{textAlign: 'center'}}
                          >
                            {datas.text}
                          </div>
                        </div>
                        <div class="mockup">
                          <img src={datas.img} alt="mockup" />
                        </div>
                      </>
                    ))}
                  </Grid>
                </Grid>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
