import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <span className="text-lg font-semibold">Ram_Dev</span>
        <p className="text-sm text-slate-400">
          Built with React, Tailwind, and motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
