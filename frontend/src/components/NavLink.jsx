const NavLink = ({ href, title, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white sm:text-base"
    >
      {title}
    </a>
  );
};

export default NavLink;
