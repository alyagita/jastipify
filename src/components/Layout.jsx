import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is either '/checkout' or '/chat'
  const isSpecialPage = location.pathname === '/checkout' || location.pathname === '/chat';
  const isChatPage = location.pathname === '/chat';

  return (
    <div>
      {/* Only render Navbar if not on the checkout or chat page */}
      {!isSpecialPage && <Navbar />}

      <Outlet />

      {/* Only render Footer if not on the chat page */}
      {!isChatPage && <Footer />}
    </div>
  );
};

export default Layout;