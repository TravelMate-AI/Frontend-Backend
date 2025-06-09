import React from 'react';
import Header from './components/custom/Header';
import Footer from './components/custom/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

// bg-gradient-to-br from-slate-50 via-blue-100 to-blue-900