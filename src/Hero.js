import React from 'react';
import { useGlobalStripe } from './context';
import phoneImg from './images/phone.svg';

const Hero = () => {
  const { closeSubmenu } = useGlobalStripe();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone-img" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
