import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white' : 'text-slate-400';

  return (
    <button onClick={selectTab} className="group">
      <p
        className={`mr-3 font-semibold transition group-hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="mt-2 mr-3 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
      ></motion.div>
    </button>
  );
};

export default TabButton;
