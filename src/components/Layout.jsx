import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is either '/checkout' or '/chat'
  const isSpecialPage = location.pathname === '/Checkout' || location.pathname === '/Chat';

  return (
    <div>
      {/* Only render Navbar if not on the checkout or chat page */}
      {!isSpecialPage && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;