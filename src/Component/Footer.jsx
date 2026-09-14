import { Link } from "react-router-dom";
import {
  FaCrown,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaArrowUp,
  FaShieldAlt,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-slate-950 text-gray-300">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= TOP FOOTER ================= */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/40 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-lg shadow-yellow-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-yellow-500/40">
                <div className="absolute inset-1 rounded-lg border border-white/20" />

                <FaCrown className="relative text-xl text-slate-950" />
              </div>

              {/* Brand */}
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

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Experience the thrill of premium online gaming with Royal X
              Casino. Enjoy a modern gaming experience, exciting games, and
              a platform designed for entertainment.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaTwitter className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaYoutube className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaTelegramPlane className="text-sm" />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-4" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-4" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-4" />
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/download"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-4" />
                  Download App
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-4" />
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= INFORMATION ================= */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Information
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  Responsible Gaming
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-400"
                >
                  Support Center
                </a>
              </li>

            </ul>
          </div>

          {/* ================= WHY ROYAL X ================= */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Why Royal X
            </h3>

            <div className="space-y-4">

              {/* Security */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-yellow-500/20 bg-yellow-400/5 text-yellow-400">
                  <FaShieldAlt />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Secure Platform
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Built with security and reliability in mind.
                  </p>
                </div>
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-yellow-500/20 bg-yellow-400/5 text-yellow-400">
                  <FaLock />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Private & Protected
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your experience matters to us.
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-yellow-500/20 bg-yellow-400/5 text-yellow-400">
                  <FaHeadset />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Player Support
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    We're here when you need assistance.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">

          <p className="text-center text-xs text-gray-500 md:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-400">
              Royal X Casino
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5 text-xs text-gray-500">

            <span className="transition-colors hover:text-gray-300">
              Premium Gaming
            </span>

            <span className="h-1 w-1 rounded-full bg-yellow-500/50" />

            <span className="transition-colors hover:text-gray-300">
              Secure Experience
            </span>

          </div>

          {/* Back To Top */}
          <button
            type="button"
            onClick={handleScrollTop}
            className="group flex items-center justify-center gap-2 self-center rounded-lg border border-yellow-500/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-gray-400 transition-all duration-300 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400 md:self-auto"
          >
            <span>Back to top</span>

            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>

        </div>
      </div>
    </footer>
  );
}

export default Footer;