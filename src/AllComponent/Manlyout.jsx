import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
