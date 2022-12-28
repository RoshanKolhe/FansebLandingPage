import React from 'react';
import Hero from './Hero/Hero';
import Footer from '../common/Footer/Footer';

import MuchMore from './MuchMore/MuchMore';

import RangeSlider from './Slider/RangeSlider';
// import Slider from "./Slider/Slider";
import Influencer from './Influencer/Influencer';
import Instagram from './Instagram/Instagram';
import Counter from './Counter/Counter';
import Galaxy from '../Galaxy/Galaxy';
export default function Home() {
  return (
    <>
      <Galaxy id="app" />
      <Hero />
      <Influencer />
      <RangeSlider />
      <MuchMore />
      <Instagram />
      <Counter />
      <Footer />
    </>
  );
}
