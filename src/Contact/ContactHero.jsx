
function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-7 sm:py-9 lg:py-11">

      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-400/15 px-3 py-1.5 text-xs font-bold text-yellow-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            Contact Royal X Casino
          </div>

          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:mt-4 sm:text-5xl lg:text-6xl">
            We’re Here To
            <span className="block bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
              Help You
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base lg:text-lg">
            Have a question, suggestion, or need assistance with Royal X
            Casino? Our contact section is here to help you connect with the
            right support and get useful information about your gaming
            experience.
          </p>

        </div>

        <div className="mx-auto mt-5 grid max-w-4xl gap-3 sm:mt-6 sm:grid-cols-2">

          <div className="group rounded-2xl border border-gray-300 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-left">
              <h2 className="text-sm font-bold text-gray-900 sm:text-base">
                Player Support
              </h2>

              <p className="mt-0.5 text-xs leading-5 text-gray-500 sm:text-sm">
                Get helpful assistance whenever you need support.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl border border-gray-300 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-left">
              <h2 className="text-sm font-bold text-gray-900 sm:text-base">
                Quick Response
              </h2>

              <p className="mt-0.5 text-xs leading-5 text-gray-500 sm:text-sm">
                Send your questions, feedback, or suggestions to us.
              </p>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-yellow-400/30 bg-gray-900 px-4 py-3 text-center shadow-xl sm:px-6 sm:py-4">
          <p className="text-xs font-semibold leading-5 text-gray-200 sm:text-sm">
            Royal X Casino Support — Questions, Feedback & Player Assistance
          </p>
        </div>

      </div>
    </section>
  );
}

export default ContactHero;

