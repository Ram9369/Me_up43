import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-black/40 md:hidden">
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={onClose} />
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={onClose}
        className="mt-4 flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default MenuOverlay;
