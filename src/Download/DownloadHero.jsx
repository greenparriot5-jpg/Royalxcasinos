import {
  FaDownload,
  FaMobileAlt,
  FaShieldAlt,
  FaBolt,
  FaCrown,
  FaGamepad,
  FaCheckCircle,
} from "react-icons/fa";

function DownloadHero() {
  const gameReferralLink = "https://xrefer.cc?refer_id=101173217883";

  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqfYH_OIo9NQkbkxCcnY901RV6ddx6PfIsqiRfgdx1cmF3ZdgfbG2Ass0&s=10";

  return (
    <section className="relative overflow-hidden bg-gray-200">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-yellow-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-amber-400/20 blur-[130px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        {/* Top Image */}
        <div className="relative mx-auto mb-8 w-full max-w-5xl">
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-[100px]" />

          <a
            href={gameReferralLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Royal X Casino"
            className="group relative z-10 block w-full"
          >
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/70 p-2 shadow-2xl shadow-yellow-500/20 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/40 sm:rounded-3xl sm:p-3">
              <div className="relative h-[220px] overflow-hidden rounded-xl bg-gray-100 sm:h-[270px] md:h-[320px] lg:h-[360px] sm:rounded-2xl">
                <img
                  src={gameImage}
                  alt="Royal X Casino"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                  <div className="flex translate-y-4 items-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-gray-900 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <FaDownload />
                    Download Royal X
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-yellow-700 shadow-sm backdrop-blur-sm">
            <FaCrown />
            Royal X Casino Download
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Download Royal X
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Casino App
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Access Royal X Casino from your compatible mobile device and explore
            a convenient gaming platform designed for easy navigation. Use the
            download option to access the platform and discover the available
            gaming experience.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={gameReferralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-8 py-4 text-sm font-extrabold text-gray-900 shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <FaDownload className="relative" />
              <span className="relative">Download App</span>
            </a>

            <a
              href={gameReferralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white/80 px-8 py-4 text-sm font-bold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
            >
              <FaGamepad />
              Access Platform
            </a>
          </div>

          {/* Information Cards */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-700">
                <FaMobileAlt />
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-gray-900">
                Mobile Access
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500">
                Explore Royal X through a convenient experience on compatible
                mobile devices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-700">
                <FaShieldAlt />
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-gray-900">
                Account Safety
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500">
                Keep your account information private and use trusted access
                methods when visiting the platform.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-700">
                <FaBolt />
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-gray-900">
                Easy Navigation
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500">
                A simple layout helps users move between the available sections
                and gaming options more comfortably.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200 to-transparent" />
    </section>
  );
}

export default DownloadHero;
