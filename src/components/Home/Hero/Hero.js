import React, {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './hero.css';

export default function Hero() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/services');
  }
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            <a href="#">
              <img
                src="/assets/images/logo/fanseb.png"
                height="100px"
                width="100px"
                alt=""
              />
            </a>
          </div>
          <div className="btn_wrapper">
            <a
              className="banner-one__btn thm-btn"
              style={{textDecoration: 'underline'}}
              href="https://app.fanseb.com/login"
            >
              Track your order
            </a>
          </div>
        </nav>
      </div>
      <section class="banner-one" id="banner">
        <div className="drop-ripple">
          <div className="drop-ripple-wrapper-1">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-2">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-3">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-4">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-5">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-6">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-7">
            <span className="ripple-animation "></span>
          </div>
          <div className="drop-ripple-wrapper-8">
            <span className="ripple-animation "></span>
          </div>
        </div>
        <div class="container">
          <div class="banner-one__content hero-content">
            <h3 class="banner-one__title animate__animated animate__fadeInUp">
              Become Rich
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
                $
              </span>{' '}
              <br />
              By being a <br />{' '}
              <span
                style={{
                  fontWeight: '600',
                  background:
                    '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                  webkitBackgroundClip: 'text',
                  webkitTextFillColor: 'transparent',
                }}
              >
                Creatorprenuer{' '}
              </span>{' '}
              with us.
            </h3>
            <p
              class="banner-one__text"
              style={{
                color: '#adb4c7',
                fontFamily: 'Gilroy-Medium',
                fontWeight: 600,
              }}
            >
              make your own store, make your content shop-able,
              <br />
              collect your money from all the purchases done, <b>Oo-la-laah</b>!
            </p>
            <a href=" https://app.fanseb.com/admin/influencer-register">
              <Button
                variant="contained"
                className="banner-one__btn thm-btn"
                style={{
                  marginRight: 20,
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

            <Button
              variant="contained"
              className="banner-one__btn thm-btn"
              style={{
                marginRight: 20,
                width: 190,
                backgroundImage:
                  'linear-gradient(90deg, #0171ed 0%, #d001ff 100%)',
              }}
              onClick={handleClick}
            >
              <span
                style={{
                  fontWeight: '800',
                  color: '#fff',
                }}
              >
                Our Services
              </span>
            </Button>
          </div>
          {/* </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
