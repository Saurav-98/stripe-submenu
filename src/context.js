import React, { useState, useContext } from 'react';
import sublinks from './data';

const StripeContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarUp, setSidebarUp] = useState(false);
  const [submenuUp, setSubmenuUp] = useState(true);

  const openSidebar = () => {
    setSidebarUp(true);
  };

  const closeSidebar = () => {
    setSidebarUp(false);
  };

  const openSubmenu = () => {
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
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};

export const useGlobalStripe = () => {
  return useContext(StripeContext);
};
