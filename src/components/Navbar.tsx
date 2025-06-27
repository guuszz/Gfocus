import React, { memo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Link, useLocation } from 'react-router-dom';

const Navbar = memo(function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/image.png" alt="GFOCUS" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.nav.home}
                </Link>
                <Link
                  to="/resources"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/resources'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.nav.features}
                </Link>
                <Link
                  to="/pricing"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/pricing'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.nav.pricing}
                </Link>
                <Link
                  to="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/about'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.nav.about}
                </Link>
                <Link
                  to="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/contact'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;