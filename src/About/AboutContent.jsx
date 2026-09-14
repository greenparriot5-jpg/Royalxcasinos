import {
  FaCrown,
  FaBullseye,
  FaRocket,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-12 sm:py-14 lg:py-16">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-120px] h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

      {/* ================= CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= INTRO ================= */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              <FaCrown />
              Our Story
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Welcome To The

              <span className="block bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Royal Experience
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Royal X Casino was created with a focus on delivering a modern
              and engaging online entertainment experience. We believe that
              great gaming starts with a platform that is simple, responsive,
              and enjoyable to use.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
              Every part of Royal X is designed with the player experience in
              mind — from the clean interface and smooth navigation to the
              exciting selection of games available across devices.
            </p>

            {/* ================= CHECKLIST ================= */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-sm text-yellow-600" />

                <span className="text-sm text-gray-700">
                  Modern and intuitive platform
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-sm text-yellow-600" />

                <span className="text-sm text-gray-700">
                  Designed for multiple devices
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-sm text-yellow-600" />

                <span className="text-sm text-gray-700">
                  Focused on smooth user experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-sm text-yellow-600" />

                <span className="text-sm text-gray-700">
                  Premium gaming environment
                </span>
              </div>

            </div>

            {/* ================= CTA ================= */}
            <div className="mt-6">
              <Link
                to="/download"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
              >
                Explore Royal X

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* ================= MISSION ================= */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-500 group-hover:bg-yellow-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-400/10 text-lg text-yellow-700">
                <FaBullseye />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-gray-900 transition-colors group-hover:text-yellow-700">
                Our Mission
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                To create a clean, engaging, and enjoyable gaming platform
                where players can easily discover their favorite experiences.
              </p>

            </div>

            {/* ================= VISION ================= */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-500 group-hover:bg-yellow-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-400/10 text-lg text-yellow-700">
                <FaRocket />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-gray-900 transition-colors group-hover:text-yellow-700">
                Our Vision
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                To build a memorable digital entertainment brand recognized
                for quality, simplicity, and a premium player experience.
              </p>

            </div>

            {/* ================= PLAYER FIRST ================= */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-500 group-hover:bg-yellow-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-400/10 text-lg text-yellow-700">
                <FaHeart />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-gray-900 transition-colors group-hover:text-yellow-700">
                Player First
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                We focus on creating an experience that feels comfortable,
                straightforward, and enjoyable for every player.
              </p>

            </div>

            {/* ================= QUALITY ================= */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-500 group-hover:bg-yellow-400/20" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-400/10 text-lg text-yellow-700">
                <FaCrown />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-gray-900 transition-colors group-hover:text-yellow-700">
                Premium Quality
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                From design to usability, we aim to maintain a high standard
                across the Royal X digital experience.
              </p>

            </div>

          </div>
        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-12 border-t border-gray-300/70 pt-12 sm:mt-14 sm:pt-14">

          {/* Values Header */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-700">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Built Around

              <span className="text-yellow-600">
                {" "}Better Experiences
              </span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Our approach is simple: make everything easier to discover,
              easier to use, and more enjoyable.
            </p>

          </div>

          {/* ================= VALUES GRID ================= */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Excellence */}
            <div className="rounded-2xl border border-gray-300 bg-white/75 p-7 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-400/10 text-xl text-yellow-700">
                <FaCrown />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Excellence
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We aim to deliver a polished and premium experience throughout
                the platform.
              </p>

            </div>

            {/* Innovation */}
            <div className="rounded-2xl border border-gray-300 bg-white/75 p-7 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-400/10 text-xl text-yellow-700">
                <FaRocket />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Innovation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We embrace modern design and technology to keep the experience
                fresh and intuitive.
              </p>

            </div>

            {/* Community */}
            <div className="rounded-2xl border border-gray-300 bg-white/75 p-7 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-400/10 text-xl text-yellow-700">
                <FaHeart />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Community
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We believe the best digital experiences are built around the
                people who use them.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutContent;