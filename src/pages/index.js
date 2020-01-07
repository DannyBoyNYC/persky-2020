import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Video from '../components/video/video';
import StickyRoll from '../components/home/sticky-roll';
import Spring from '../components/home/spring';
import SideBySide from '../components/side-by-side';
import MiniHero from '../components/mini-hero';
// follow the leads for additional uneeded components
// import Carousel from '../components/carousel/carousel';

import SpringCarousel from '../components/carousel/spring-carousel'

const Home = () => {
  return (
    <Layout page="home" >
      <Hero page="home" />
      <Video />
      <StickyRoll />
      {/* <Spring />   */}
      <SpringCarousel />
      <SideBySide type="millenial" />
      <MiniHero page="home" />
      <SideBySide type="client-list" />
    </Layout>
  );
};

export default Home;
