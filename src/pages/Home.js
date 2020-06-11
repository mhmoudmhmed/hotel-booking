import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeaturedRoom from '../Components/FeautredRoom';

function Home() {
  return(
    <>
      <Hero>
        <Banner
          title='Luxurious Rooms'
          subtitle="deluxe rooms starting at $299"
        >
          <Link to='/rooms/' className='btn-primary'>See More</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
};

export default Home;
