import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KBDeB75M-x5hAiUFJ4Kfg4vytmT1JLn9QfU1xKJtZBm2ePqvaOQiyCM&s=10";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Download", path: "/download" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-yellow-400/20 transition duration-300 group-hover:scale-105">
            <img
              src={logoImage}
              alt="Teen Patti Gold"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-lg font-extrabold leading-none sm:text-xl">
              ROYAL X
              <span className="text-yellow-400"> CASINO</span>
            </h1>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
              Free Download Now
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "bg-yellow-400 text-slate-950"
                    : "text-slate-300 hover:bg-white/5 hover:text-yellow-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <NavLink
            to="/download"
            className="inline-flex items-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-yellow-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20"
          >
            Explore
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white transition duration-300 hover:border-yellow-400/30 hover:text-yellow-400 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "bg-yellow-400 text-slate-950"
                      : "text-slate-300 hover:bg-white/5 hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Explore Button */}
          <NavLink
            to="/download"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition duration-300 hover:bg-yellow-300"
          >
            Explore
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Header;