import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-white border-transparent bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20'
    : 'text-slate-300 border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 ';
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`${buttonStyles} cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition sm:px-6 sm:py-3 sm:text-base`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
