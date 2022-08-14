import React, { useState, useContext } from 'react';
import sublinks from './data';

const StripeContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarUp, setSidebarUp] = useState(false);
  const [submenuUp, setSubmenuUp] = useState(false);

  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setSidebarUp(true);
  };

  const closeSidebar = () => {
    setSidebarUp(false);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setSubmenuUp(true);
  };

  const closeSubmenu = () => {
    setSubmenuUp(false);
  };
  return (
    <StripeContext.Provider
      value={{
        sidebarUp,
        submenuUp,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};

export const useGlobalStripe = () => {
  return useContext(StripeContext);
};
