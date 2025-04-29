import React from 'react';
import Navbar from '../Nav.jsx';
import Hero from '../parts/Hero';
import MeetTheArtist from '../parts/MeetTheArtist';
import OurWorks from '../parts/OurWorks';
import Explore from '../parts/Explore';
import FindMe from '../parts/FindMe';
import Review from '../parts/Review';
import Footer from '../Footer';
function Homepage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <MeetTheArtist/>
      <OurWorks/>
      <Explore/>
      <FindMe/>
      <Review/>
      <Footer/>
    </>
  );
}

export default Homepage;