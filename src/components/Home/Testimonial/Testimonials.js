import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Thumbs } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Thumbs } from "swiper";
import BlockTitle from "./block-title";
import mapImage from "../../../images/map-1-1.png";
import blockTitleCircle from "../../../images/round-circle-1-6.png";
import testimonialImage1 from "../../../images/testi-1-1.jpg";
import testimonialImage2 from "../../../images/testi-1-2.jpg";
import testimonialImage3 from "../../../images/testi-1-3.jpg";
import testimonialImage4 from "../../../images/testi-1-4.jpg";
import testimonialImage5 from "../../../images/testi-1-5.jpg";
import testimonialImage6 from "../../../images/testi-1-6.jpg";
import "./testimonial.css";
import SwiperCore, {
  Virtual,
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    title: "Delila Rayam",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://opins-gatsby.vercel.app/static/testi-1-1-ce43669d596b619c01009586a6cb7484.jpg",
  },
  {
    title: "Evelyn Holt",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://opins-gatsby.vercel.app/static/testi-1-1-ce43669d596b619c01009586a6cb7484.jpg",
  },
  {
    title: "Edward Higgins",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://opins-gatsby.vercel.app/static/testi-1-1-ce43669d596b619c01009586a6cb7484.jpg",
  },
  {
    title: "Timothy Estrada",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://opins-gatsby.vercel.app/static/testi-1-1-ce43669d596b619c01009586a6cb7484.jpg",
  },
  {
    title: "Jesse Lyons",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://opins-gatsby.vercel.app/static/testi-1-1-ce43669d596b619c01009586a6cb7484.jpg",
  },
  {
    title: "Mabelle Boone",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://opins-gatsby.vercel.app/static/testi-1-1-ce43669d596b619c01009586a6cb7484.jpg",
  },
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const testimonialsCarouselOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1800,
    autoplay: {
      delay: 1000,
    },
  };
  const testimonialsThumOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 2800,
    },
  };
  return (
    <section className="testimonials-style-one" id="testimonials">
      <img src={mapImage} alt="Awesome alter Text" className="map-img" />
      <Container>
        <Row>
          <Col lg={6} className="testimonal_flex">
            <div className="my-auto">
              <div id="testimonials-slider-pager">
                <div className="testimonials-slider-pager-one">
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <span key={index} className="pager-item">
                      <img src={image} alt="Awesome alter Text" />
                    </span>
                  ))}
                </div>
                <Swiper
                  {...testimonialsThumOption}
                  className="testimonials-slider-pager-two"
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs]}
                >
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="Awesome alter Text" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <BlockTitle
              textAlign="left"
              image={blockTitleCircle}
              title={`What’s our clients are \n saying.`}
            />

            <Swiper
              {...testimonialsCarouselOption}
              className="slider testimonials-slider"
              autoplay={true}
              // onSwiper={setThumbsSwiper}
            >
              {TESTIMONIALS_DATA.map(({ title, content }, index) => (
                <SwiperSlide
                  key={`testimonials-card-${index}`}
                  className="slide-item"
                >
                  <div className="single-testi-one">
                    <p>{content}</p>
                    <h3>{title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
