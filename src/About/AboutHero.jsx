import {
  FaCrown,
  FaShieldAlt,
  FaGamepad,
  FaStar,
} from "react-icons/fa";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-8 sm:py-10 lg:py-12">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      {/* ================= GRID ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,100,100,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= LEFT ================= */}
          <div>

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              <FaCrown className="text-sm" />
              About Royal X
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">

              More Than Just

              <span className="block bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                A Gaming Platform
              </span>

            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Royal X Casino is built around a simple idea — create a modern,
              exciting, and enjoyable digital gaming experience where every
              detail feels premium.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              From intuitive navigation to a carefully designed interface,
              Royal X focuses on making your journey smooth from the moment
              you arrive.
            </p>

            {/* Stats */}
            <div className="mt-6 grid max-w-xl grid-cols-3 gap-3 sm:gap-5">

              {/* Stat 1 */}
              <div className="rounded-xl border border-gray-300 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm">

                <FaGamepad className="mx-auto text-lg text-yellow-600" />

                <p className="mt-2 text-xl font-black text-gray-900">
                  24/7
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                  Access
                </p>

              </div>

              {/* Stat 2 */}
              <div className="rounded-xl border border-gray-300 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm">

                <FaShieldAlt className="mx-auto text-lg text-yellow-600" />

                <p className="mt-2 text-xl font-black text-gray-900">
                  Secure
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                  Platform
                </p>

              </div>

              {/* Stat 3 */}
              <div className="rounded-xl border border-gray-300 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm">

                <FaStar className="mx-auto text-lg text-yellow-600" />

                <p className="mt-2 text-xl font-black text-gray-900">
                  Premium
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                  Experience
                </p>

              </div>

            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Main Glow */}
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

            {/* Main Card */}
            <div className="relative aspect-square">

              {/* Outer Ring */}
              <div className="absolute inset-3 rounded-[2.5rem] border border-yellow-500/20 sm:inset-5" />

              <div className="absolute inset-8 rounded-[2.5rem] border border-yellow-500/20 sm:inset-10" />

              {/* Inner Ring */}
              <div className="absolute inset-12 rounded-[2.5rem] border border-yellow-500/10 sm:inset-14" />

              {/* Center Card */}
              <div className="absolute inset-16 flex items-center justify-center rounded-[2.5rem] border border-yellow-500/30 bg-gradient-to-br from-yellow-400/20 via-white to-gray-100 shadow-2xl shadow-gray-400/30 backdrop-blur-xl sm:inset-20">

                <div className="text-center">

                  {/* Crown */}
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-yellow-500/40 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-600 shadow-2xl shadow-yellow-500/30 sm:h-32 sm:w-32">

                    <FaCrown className="text-5xl text-gray-900 sm:text-6xl" />

                  </div>

                  {/* Brand */}
                  <p className="mt-6 text-3xl font-black uppercase tracking-[0.14em] text-gray-900 sm:text-4xl">
                    Royal
                    <span className="text-yellow-600"> X</span>
                  </p>

                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.4em] text-yellow-700">
                    Casino
                  </p>

                  <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                    Premium Gaming
                  </p>

                </div>
              </div>

              {/* ================= FLOATING CARD 1 ================= */}
              <div className="absolute right-0 top-2 rounded-2xl border border-gray-300 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:right-0 sm:top-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-700">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Trusted
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Gaming Experience
                    </p>
                  </div>

                </div>
              </div>

              {/* ================= FLOATING CARD 2 ================= */}
              <div className="absolute bottom-2 left-0 rounded-2xl border border-gray-300 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-0">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-700">
                    <FaStar />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Premium
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Player Focused
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200 to-transparent" />

    </section>
  );
}

export default AboutHero;