function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-10 sm:py-12 lg:py-14">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Blog Introduction */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
            Royal X Casino Blog
          </div>

          {/* Main SEO Heading */}
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Royal X Casino
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Gaming Guides & Insights
            </span>
          </h1>

          {/* SEO Introduction */}
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Explore helpful Royal X Casino guides, gaming information, mobile
            access tips, account guidance, platform features, promotions, and
            general online gaming insights. Our blog is designed to help
            visitors better understand Royal X Casino and its available
            gaming experience.
          </p>

          {/* Supporting SEO Content */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600">
            Learn how to navigate Royal X Casino, understand available gaming
            options, review important account information, and make better
            informed decisions before using platform features.
          </p>

        </div>

        {/* Blog Topic Cards */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">

          <article className="rounded-2xl border border-gray-300 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
            <h2 className="text-base font-extrabold text-gray-900">
              Gaming Guides
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Learn about Royal X Casino gaming features, platform navigation,
              and general gameplay information.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-300 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
            <h2 className="text-base font-extrabold text-gray-900">
              Mobile Gaming
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Discover information about accessing Royal X Casino on supported
              smartphones, tablets, and mobile devices.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-300 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
            <h2 className="text-base font-extrabold text-gray-900">
              Platform Information
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Find useful information about accounts, promotions, platform
              features, and responsible gaming practices.
            </p>
          </article>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-200 to-transparent" />
    </section>
  );
}

export default BlogHero;