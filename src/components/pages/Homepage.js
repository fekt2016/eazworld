import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import RateCard from '../RateCard';
import Service from '../Service';
import Steps from '../Steps';

const Homepage = () => {
  return (
    <>
    <Header  />
    <main>
    <Service  />
    <RateCard  />
    <Steps  />
    <Footer  />
    </main>
    </>
  )
}

export default Homepage