import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Galaxy from "../../Galaxy/Galaxy";

export default function Counter() {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <section className="counter-section ">
        <Container>
          <Row>
            <div className="creator-counter">
              {/* {[...Array(35)].map((item) => (
                <div className="grid-matrix-div"></div>
              ))} */}
              <div className="text-content">
                <img src="https://www.hypd.store/img/timer.5d0aaf0c.png" />
                <div className="creator-count">
                  {/* <CountUp separator="," delay={2} end={51000} /> */}
                  <CountUp
                    separator=","
                    start={focus ? 0 : null}
                    end={28384}
                    duration={2}
                    redraw={true}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
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
                    {" "}
                    creators are on the road to become{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        background:
                          "-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)",
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent",
                      }}
                    >
                      {" "}
                      creatorpreneurs
                    </span>
                  </p>
                  <p>
                    don't just be a creator, be a{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        background:
                          "-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)",
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent",
                      }}
                    >
                      creatorpreneur
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-dock">
              <button className="btn btn-2">Join the Waitlist</button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
