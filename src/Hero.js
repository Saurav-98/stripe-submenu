import React from 'react';
import { useGlobalStripe } from './context';
import phoneImg from './images/phone.svg';

const Hero = () => {
  const data = useGlobalStripe();
  console.log(data);
  return <h2>hero component</h2>;
};

export default Hero;
