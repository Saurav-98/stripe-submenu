import React, { useState, useRef, useEffect } from 'react';
import { useGlobalStripe } from './context';

const Submenu = () => {
  const {
    submenuUp,
    location,
    page: { page, links },
  } = useGlobalStripe();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.bottom = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length === 4) {
      setColumns('col-4');
    }
  }, [location, links]);

  return (
    <aside
      className={`${submenuUp ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
