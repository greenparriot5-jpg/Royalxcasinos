import { Link } from "react-router-dom";

function HeroSection() {
  const gameReferralLink =
    "https://xrefer.cc?refer_id=101173217883";

  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqfYH_OIo9NQkbkxCcnY901RV6ddx6PfIsqiRfgdx1cmF3ZdgfbG2Ass0&s=10";

  const downloadGame = () => {
    window.location.href = gameReferralLink;
  };

  return (
    <section
      aria-labelledby="royal-x-home-title"
      className="relative overflow-hidden bg-gray-200"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[5%] h-[400px] w-[400px] rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-amber-400/20 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[150px]" />
      </div>

      {/* GRID */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="order-2 max-w-2xl lg:order-1">
            <div className="mb-6 inline-flex rounded-full border border-yellow-500/30 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 shadow-sm backdrop-blur-sm">
              Royal X Casino 777 Gaming Platform
            </div>

            {/* Main H1 */}
            <h1
              id="royal-x-home-title"
              className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Royal X Casino 777
              <span className="mt-2 block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Online Gaming Platform
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:text-left">
              Explore Royal X Casino 777 and learn about its gaming
              features, mobile access, account options, download guidance,
              promotions, and general online gaming information.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={downloadGame}
                type="button"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-7 py-4 text-sm font-extrabold text-gray-900 shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
                aria-label="Access Royal X Casino 777"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  Access Royal X Casino
                </span>
              </button>

              <Link
                to="/about/"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-7 py-4 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
              >
                About Royal X Casino
              </Link>
            </div>

            {/* Trust Features */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-300/70 bg-white/60 p-3 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-bold text-gray-900">
                  Easy Access
                </p>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Platform Information
                </p>
              </div>

              <div className="rounded-xl border border-gray-300/70 bg-white/60 p-3 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-bold text-gray-900">
                  Mobile Friendly
                </p>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Responsive Experience
                </p>
              </div>

              <div className="rounded-xl border border-gray-300/70 bg-white/60 p-3 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-bold text-gray-900">
                  Gaming Guides
                </p>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Useful Information
                </p>
              </div>
            </div>
          </div>

          {/* GAME IMAGE */}
          <div className="order-1 relative mx-auto w-full max-w-xl lg:order-2">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-[100px] sm:h-[450px] sm:w-[450px]"
            />

            <button
              onClick={downloadGame}
              type="button"
              aria-label="Access Royal X Casino 777"
              className="group relative z-10 mx-auto block w-full max-w-[500px] cursor-pointer text-left"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-yellow-500/30 bg-white/70 p-3 shadow-2xl shadow-yellow-500/20 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/40 sm:p-4">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-100">
                  <img
                    src={gameImage}
                    alt="Royal X Casino 777 online gaming platform"
                    width="1200"
                    height="675"
                    loading="eager"
                    fetchPriority="high"
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                    <div className="translate-y-4 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-gray-900 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Access Royal X Casino
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* SUPPORTING CONTENT */}
          <div className="order-3 lg:col-span-2">
            <div className="mx-auto max-w-4xl rounded-2xl border border-gray-300 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Royal X Casino 777 Gaming Information
              </h2>

              <p className="mt-4 text-base leading-8 text-gray-600">
                Learn more about Royal X Casino 777, including platform
                features, mobile access, account information, gaming guides,
                promotions, and responsible gaming considerations. Visit the{" "}
                <Link
                  to="/about/"
                  className="font-semibold text-yellow-600 underline underline-offset-4 hover:text-yellow-700"
                >
                  About Royal X Casino
                </Link>{" "}
                page for additional platform information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent"
      />
    </section>
  );
}

export default HeroSection;