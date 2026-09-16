
import { NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-3 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <NavLink
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-yellow-400/20">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=423,fit=crop/GzGCUdbK9FmSgxVP/1000061453-JRjh62ktJ17rkYuh.webp"
                  alt="Royal X Casino"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-extrabold">
                  Royal X
                  <span className="text-yellow-400"> Casino</span>
                </h2>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Online Casino Game
                </p>
              </div>
            </NavLink>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Royal X Casino is an online gaming platform focused on providing
              an easy and accessible casino-style gaming experience. Players
              can explore the website, learn about the game, find useful
              information, read gaming content, and access the download page
              through a simple and user-friendly interface.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <NavLink
                  to="/"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/download"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Download
                </NavLink>
              </li>

            </ul>

          </div>

          {/* Information */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Information
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Game Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Game Features
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Gaming Guide
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  General Information
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} Royal X Casino. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:gap-5 sm:text-sm">

            <a
              href="#"
              className="transition duration-300 hover:text-yellow-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-yellow-400"
            >
              Terms & Conditions
            </a>

            <NavLink
              to="/contact"
              className="transition duration-300 hover:text-yellow-400"
            >
              Contact
            </NavLink>

          </div>

        </div>

        {/* Back To Top */}
        <div className="mt-5 flex justify-center sm:justify-end">

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
            aria-label="Back to top"
          >
            Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

