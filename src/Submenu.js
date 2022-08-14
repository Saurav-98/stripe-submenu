import React, { useState, useRef, useEffect } from 'react';
import { useGlobalStripe } from './context';

const Submenu = () => {
  const { submenuUp, location } = useGlobalStripe();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.bottom = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${submenuUp ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      submenu
    </aside>
  );
};

export default Submenu;
