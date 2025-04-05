import React from 'react';
import Hero from "../components/Hero"
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';
import Whyus from '../components/Whyus';
import Testy from '../components/Testy'

function Home() {
  return (
    <div>
      <Hero />
      <Showcase />
      <Whyus />
      <Testy />
      <Footer />
    </div>
  );
}

export default Home;