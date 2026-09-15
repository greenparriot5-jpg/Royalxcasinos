import { Link } from "react-router-dom";
import {
FaCrown,
FaDownload,
FaPlay,
FaShieldAlt,
FaBolt,
} from "react-icons/fa";

function HeroSection() {
const gameReferralLink =
"https://xrefer.cc?refer_id=101170453454";

const gameImage =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqfYH_OIo9NQkbkxCcnY901RV6ddx6PfIsqiRfgdx1cmF3ZdgfbG2Ass0&s=10";

return ( <section className="relative overflow-hidden bg-gray-200">


  {/* ================= BACKGROUND ================= */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute left-[-10%] top-[5%] h-[400px] w-[400px] rounded-full bg-yellow-400/20 blur-[120px]" />

    <div className="absolute bottom-[-10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-amber-400/20 blur-[130px]" />

    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[150px]" />

  </div>

  {/* ================= GRID PATTERN ================= */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  {/* ================= MAIN CONTENT ================= */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

    {/* ================= MOBILE HEADING ================= */}
    <div className="mb-8 text-center lg:hidden">

      <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl">

        Welcome to

        <span className="mt-2 block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Royal X Casino
        </span>

      </h1>

    </div>

    {/* ================= DESKTOP GRID ================= */}
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

      {/* ================= DESKTOP LEFT CONTENT ================= */}
      <div className="order-2 max-w-2xl lg:order-1">

        {/* Badge */}
        <div className="mb-6 hidden items-center gap-2 rounded-full border border-yellow-500/30 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 shadow-sm backdrop-blur-sm lg:inline-flex">

          <FaCrown className="text-sm" />

          Premium Gaming Experience

        </div>

        {/* Desktop Heading */}
        <h1 className="hidden text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:block lg:text-7xl">

          Welcome to

          <span className="mt-2 block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Royal X Casino
          </span>

        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:text-left">

          Step into a premium world of online entertainment with Royal X
          Casino. Discover exciting games, smooth gameplay, and an
          experience built for players who expect more.

        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

          {/* Download Button */}
          <a
            href={gameReferralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-7 py-4 text-sm font-extrabold text-gray-900 shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
          >

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <FaDownload className="relative transition-transform duration-300 group-hover:translate-y-0.5" />

            <span className="relative">
              Download Game
            </span>

          </a>

          {/* Explore Button */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white/70 px-7 py-4 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
          >

            <FaPlay className="text-xs" />

            Explore Royal X

          </Link>

        </div>

        {/* Trust Features */}
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Feature 1 */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-300/70 bg-white/60 p-3 shadow-sm backdrop-blur-sm">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-700">

              <FaShieldAlt className="text-sm" />

            </div>

            <div className="text-left">

              <p className="text-xs font-bold text-gray-900">
                Secure
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Platform
              </p>

            </div>

          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-300/70 bg-white/60 p-3 shadow-sm backdrop-blur-sm">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-700">

              <FaBolt className="text-sm" />

            </div>

            <div className="text-left">

              <p className="text-xs font-bold text-gray-900">
                Fast
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Experience
              </p>

            </div>

          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-300/70 bg-white/60 p-3 shadow-sm backdrop-blur-sm">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-700">

              <FaCrown className="text-sm" />

            </div>

            <div className="text-left">

              <p className="text-xs font-bold text-gray-900">
                Premium
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Gaming
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= GAME IMAGE ================= */}
      <div className="order-1 relative mx-auto w-full max-w-xl lg:order-2">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-[100px] sm:h-[450px] sm:w-[450px]" />

        {/* Image Link */}
        <a
          href={gameReferralLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Royal X Casino Game"
          className="group relative z-10 mx-auto block w-full max-w-[500px]"
        >

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-500/30 bg-white/70 p-3 shadow-2xl shadow-yellow-500/20 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/40 sm:p-4">

            {/* Image */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-100">

              <img
                src={gameImage}
                alt="Royal X Casino Game"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">

                <div className="flex translate-y-4 items-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-gray-900 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                  <FaDownload />

                  Download Game

                </div>

              </div>

            </div>

          </div>

        </a>

      </div>

      {/* ================= MOBILE CONTENT ================= */}
      <div className="order-3 text-center lg:hidden">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-yellow-700 shadow-sm backdrop-blur-sm">

          <FaCrown className="text-sm" />

          Premium Gaming Experience

        </div>

        {/* Description */}
        <p className="mx-auto max-w-xl text-base leading-8 text-gray-600 sm:text-lg">

          Step into a premium world of online entertainment with Royal X
          Casino. Discover exciting games, smooth gameplay, and an
          experience built for players who expect more.

        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

          {/* Download Button */}
          <a
            href={gameReferralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-7 py-4 text-sm font-extrabold text-gray-900 shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
          >

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <FaDownload className="relative transition-transform duration-300 group-hover:translate-y-0.5" />

            <span className="relative">
              Download Game
            </span>

          </a>

          {/* Explore Button */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white/70 px-7 py-4 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
          >

            <FaPlay className="text-xs" />

            Explore Royal X

          </Link>

        </div>

        {/* Mobile Trust Features */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Secure */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-300/70 bg-white/60 p-3 text-left shadow-sm backdrop-blur-sm">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-700">

              <FaShieldAlt className="text-sm" />

            </div>

            <div>

              <p className="text-xs font-bold text-gray-900">
                Secure
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Platform
              </p>

            </div>

          </div>

          {/* Fast */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-300/70 bg-white/60 p-3 text-left shadow-sm backdrop-blur-sm">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-700">

              <FaBolt className="text-sm" />

            </div>

            <div>

              <p className="text-xs font-bold text-gray-900">
                Fast
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Experience
              </p>

            </div>

          </div>

          {/* Premium */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-300/70 bg-white/60 p-3 text-left shadow-sm backdrop-blur-sm">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-700">

              <FaCrown className="text-sm" />

            </div>

            <div>

              <p className="text-xs font-bold text-gray-900">
                Premium
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                Gaming
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* ================= BOTTOM FADE ================= */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent" />

</section>


);
}

export default HeroSection;
