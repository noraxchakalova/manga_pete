import React from 'react';
import Navbar from '../Nav.jsx';
import Footer from '../Footer';
import Portfolio1 from '../parts/Portfolio1';
import ArtisticJourney from '../parts/ArtisticJourney';

function Portfolio() {
  return (
    <>
      <Navbar />
      <Portfolio1 />
      <ArtisticJourney />
      <Footer />
    </>
  );
}

export default Portfolio;