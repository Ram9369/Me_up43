import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    
    title: 'Home',
    path: '#hero',
  },
  {

    title: 'About',
    path: '#about',
  },
  {
    title: 'Education',
    path: '#education',
  },
    {
    title: 'Skills',
    path: '#skills',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <a
          href="/"
          className="flex items-center gap-3 text-xl font-semibold text-white md:text-2xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold">
            RPM
          </span>
          <span className="font-"> Ram_Dev</span>
        </a>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              aria-label="Open menu"
              className="flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close menu"
              className="flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="hidden md:block md:w-auto">
          <ul className="flex items-center gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}

            <li className="ml-2">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02]"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
