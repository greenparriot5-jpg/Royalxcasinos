function AboutHero() {
  return (
    <section
      aria-labelledby="about-royal-x-heading"
      className="relative overflow-hidden bg-gray-200 py-8 text-slate-900 sm:py-10 lg:py-12"
    >
      {/* Background Effects */}
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

          {/* Badge */}
          <div className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            About Royal X Casino
          </div>

          {/* Main SEO Heading */}
          <h1
            id="about-royal-x-heading"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Discover the World of
            <span className="block text-yellow-500">
              Royal X Casino
            </span>
          </h1>

          {/* Intro Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Learn more about Royal X Casino, its online gaming experience,
            platform features, mobile access, game information, and convenient
            ways to explore the Royal X gaming platform.
          </p>

          {/* Navigation Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <a
              href="#about-content"
              aria-label="Learn more about Royal X Casino"
              className="rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Learn More
            </a>

            <a
              href="/"
              aria-label="Return to Royal X Casino home page"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Back to Home
            </a>

          </div>

          {/* Key Information */}
          <div
            aria-label="Royal X Casino highlights"
            className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >

            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Easy
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Platform Access
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Smooth
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Gaming Experience
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Modern
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Digital Experience
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;