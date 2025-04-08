
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import Header from './Header';
import { Menu } from 'lucide-react';
import './styles/Dashboard.css';
import './styles/App.css';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const location = useLocation();

  // Listen for screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 425;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false); // ensure sidebar is off for mobile
      }
    };

    handleResize(); // trigger once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const routeTitles = {
    '/': 'Dashboard',
    '/sales': 'Sales',
    '/salons': 'Salons',
    '/clients': 'Clients',
    '/catalog': 'Catalog',
    '/calendar': 'Calendar',
    '/bookings': 'Bookings',
    '/teams': 'Teams',
    '/settings': 'Settings',
  };

  const pageTitle = routeTitles[location.pathname];

  return (
    <div className="app">
      {/* Show toggle button on desktop only */}
      {!isMobile && (
        <button
          className={`toggle-button ${!isSidebarOpen ? 'left-collapsed' : ''}`}
          onClick={toggleSidebar}
        >
          <Menu />
        </button>
      )}

      {/* Sidebar for desktop */}
      {!isMobile && <Sidebar isOpen={isSidebarOpen} />}

      {/* Mobile Menu only on mobile */}
      {isMobile && <MobileMenu />}

      <div
        className={`main-content ${
          !isMobile && isSidebarOpen ? 'with-sidebar' : 'no-sidebar'
        }`}
      >
        <header className="header">
          <div className="header-container">
            <div className="header-content">
              <h1 className="header-title">{pageTitle}</h1>
              <Header />
            </div>
          </div>
        </header>

        <main className="main-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
