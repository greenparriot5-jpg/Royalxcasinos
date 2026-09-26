import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section
      aria-labelledby="about-royal-x-heading"
      className="relative overflow-hidden bg-gray-200 py-8 text-slate-900 sm:py-10 lg:py-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            About Royal X Casino 777
          </div>

          <h1
            id="about-royal-x-heading"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            About Royal X Casino 777
            <span className="block text-yellow-500">
              Gaming Platform
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Learn about Royal X Casino 777, including its online gaming
            platform, available features, mobile access, game information,
            account guidance, and general platform resources.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="#about-content"
              aria-label="Read about Royal X Casino 777"
              className="rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Learn More
            </a>

            <Link
              to="/"
              aria-label="Return to Royal X Casino home page"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Royal X Casino Home
            </Link>
          </div>

          <div
            aria-label="Royal X Casino 777 information highlights"
            className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Gaming
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Platform Information
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Mobile
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Device Access
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Guides
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Helpful Resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;