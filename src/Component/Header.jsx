import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCrown,
  FaDownload,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FaInfoCircle />,
    },
    {
      name: "Blog",
      path: "/blog",
      icon: <FaBlog />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelope />,
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-slate-950/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            {/* Crown Logo */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/40 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-lg shadow-yellow-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/40">
              <div className="absolute inset-1 rounded-lg border border-white/20" />

              <FaCrown className="relative text-xl text-slate-950 drop-shadow-sm" />
            </div>

            {/* Brand Name */}
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black uppercase tracking-[0.18em] text-white sm:text-2xl">
                Royal
                <span className="text-yellow-400"> X</span>
              </span>

              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-500 sm:text-xs">
                Casino
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-yellow-400"
                  }`
                }
              >
                <span className="text-xs transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </span>

                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-yellow-400 transition-all duration-300 group-hover:w-1/2`}
                />
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP DOWNLOAD BUTTON ================= */}
          <div className="hidden lg:block">
            <Link
              to="/download"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-500/30"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <FaDownload className="relative text-xs transition-transform duration-300 group-hover:translate-y-0.5" />

              <span className="relative">Download App</span>
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-white/5 text-xl text-yellow-400 transition-all duration-300 hover:bg-yellow-400/10 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="space-y-2 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-yellow-400"
                  }`
                }
              >
                <span className="text-sm">{link.icon}</span>
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Download */}
            <Link
              to="/download"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-yellow-500/30"
            >
              <FaDownload className="text-xs" />
              Download App
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;