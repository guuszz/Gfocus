import React, { ReactNode, memo } from 'react';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
}

const MainLayout = memo(function MainLayout({ children, showNavbar = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {showNavbar && <Navbar />}
      <main className={showNavbar ? 'pt-16' : ''}>
        {children}
      </main>
    </div>
  );
});

export default MainLayout; 