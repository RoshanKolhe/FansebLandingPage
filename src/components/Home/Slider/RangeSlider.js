import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Slider.css';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range)

export default function RangeSlider() {
  const [counter, setCounter] = useState(5000);
  const [upperValue, setUpperValue] = useState(500000);
  const [lowerValue, setLowerValue] = useState(30);

  //Slider left side CSS value states
  // Maths behind is .. ((currentRailValue-initialRailValue)/totalDifferenceRailValue)*100 -> its generate the percentage value for the rail, which directly applied into left felid of CSS
  const [upperSlider, setUpperSlider] = useState(
    (upperValue - 500) * 0.00010005002,
  );
  const [lowerSlider, setLowerSlider] = useState((lowerValue - 10) * 1.111);

  function nFormatter(num, digits, rail = 0) {
    var lookup;
    if (rail === 0) {
      lookup = [
        {value: 1, symbol: ''},
        {value: 1e3, symbol: 'K'},
        {value: 1e5, symbol: 'L'},
        {value: 1e7, symbol: 'Cr'},
      ];
    } else if (rail === 1) {
      lookup = [
        {value: 1, symbol: ''},
        {value: 1e3, symbol: 'K'},
      ];
    }

    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  }

  function onUpperSliderChange(value) {
    setUpperValue(value);
  }
  function onLowerSliderChange(value) {
    setLowerValue(value);
  }

  useEffect(() => {
    setCounter(upperValue * lowerValue * 0.1);
    setUpperSlider((upperValue - 500) * 0.00010005002);
    setLowerSlider((lowerValue - 10) * 1.111);
  }, [upperValue, lowerValue]);

  return (
    <>
      <section className="slider">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title">
                <h2 className="title wow  animate__flipInY animate__animated">
                  Let’s hunt the{' '}
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
                  ?
                </h2>
                <p>
                  {' '}
                  Start hunting the treasure based on your follower count &
                  content sharing .{' '}
                </p>
              </div>
              <div className="sliderArea">
                <div className="slider-1">
                  <p>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '21px',
                        color: 'white',
                      }}
                    >
                      Pick your followers count.
                    </span>{' '}
                    ( Instagram ,facebook,twitter,youtube)
                  </p>

                  <div
                    className="animate__backInLeft"
                    style={{marginLeft: '-2%', marginRight: '2%'}}
                  >
                    <h6
                      style={{
                        fontSize: 18,
                        color: 'white',
                        padding: 0,
                        left: upperSlider + '%',
                        position: 'relative',
                      }}
                    >
                      {/* {upperValue <1000 ? upperValue : (upperValue/1000)+'K'} */}
                      {nFormatter(upperValue, 0, 1)}
                    </h6>
                  </div>

                  <Slider
                    onChange={onUpperSliderChange}
                    marks={{
                      500: `500`,
                      1000000: `1M`,
                    }}
                    min={500}
                    max={1000000}
                    defaultValue={[500000]}
                    tipFormatter={value => `$${value}`}
                    tipProps={{
                      display: true,
                      placement: 'top',
                      prefixCls: 'rc-slider-tooltip',
                    }}
                    railStyle={{
                      height: '2rem',
                    }}
                    handleStyle={{
                      background: '#FFFFFF',
                      border: '3px solid #3774FF',
                      borderRadius: 28,
                      width: 15,
                      height: 46,
                      boxShadow: '0 0 2px 0 rgb(0 0 0 / 90%)',
                    }}
                    trackStyle={{
                      height: '2rem',
                      background:
                        'linear-gradient(40deg, #0171ed 0%, #d001ff 100%)',
                    }}
                    dotStyle={{
                      display: 'none',
                    }}
                  />
                </div>

                <div className="slider-2">
                  <p>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '21px',
                        color: 'white',
                      }}
                    >
                      Pick your monthly posts
                    </span>{' '}
                    (Average content /month ?)
                  </p>
                  <div style={{marginLeft: '-2%', marginRight: '2%'}}>
                    <h6
                      style={{
                        fontSize: 18,
                        color: 'white',
                        padding: 0,
                        left: lowerSlider + '%',
                        position: 'relative',
                      }}
                    >
                      {lowerValue}
                    </h6>
                  </div>
                  <Slider
                    onChange={onLowerSliderChange}
                    marks={{
                      10: `10`,
                      100: `100`,
                    }}
                    min={10}
                    max={100}
                    defaultValue={[30]}
                    tipFormatter={value => {
                      // `$ ${value}`;
                    }}
                    tipProps={{
                      placement: 'top',
                      visible: true,
                    }}
                    railStyle={{
                      height: '2rem',
                    }}
                    handleStyle={{
                      background: '#FFFFFF',
                      border: '3px solid #3774FF',
                      borderRadius: 28,
                      width: 15,
                      height: 46,
                      boxShadow: '0 0 2px 0 rgb(0 0 0 / 90%)',
                    }}
                    trackStyle={{
                      height: '2rem',
                      background:
                        'linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%)',
                    }}
                    dotStyle={{
                      display: 'none',
                    }}
                  />
                </div>
              </div>
              <div className="slide_area_content">
                <h3 style={{fontSize: '32px', color: 'white'}}>
                  treasure could lie between{' '}
                  <span
                    style={{
                      fontWeight: '600',
                      background:
                        '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                  >
                    ₹ {nFormatter(counter, 0)}
                  </span>{' '}
                  and{' '}
                  <span
                    style={{
                      fontWeight: '600',
                      background:
                        '-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)',
                      webkitBackgroundClip: 'text',
                      webkitTextFillColor: 'transparent',
                    }}
                  >
                    ₹ {nFormatter(counter * 2, 0)} more
                  </span>{' '}
                </h3>
                <p style={{color: '#adb4c7'}}>
                  based on estimated purchase between 1% and 5% from your own
                  store.
                </p>
              </div>
              <div className="join-waitlist">
                <div className="link">
                  <span> http://fanseb.store/i/ </span>
                  <span className="link-second-part"> user@name </span>
                </div>
                <a href=" https://app.fanseb.com/admin/influencer-register">
                  <Button
                    variant="contained"
                    className="btn-2"
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
