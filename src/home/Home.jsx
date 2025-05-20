import React from 'react';
import Hero from "./Hero";
import Footer from '../components/Footer';
import Showcase from './Showcase';
import Whyus from './Whyus';
import Testy from './Testy'

function Home() {
  return (
    <div>
      <Hero />
      <Showcase />
      <Whyus />
      <Testy />
      <Footer  />
    </div>
  );
}

export default Home;