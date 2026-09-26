import {
  FaUserPlus,
  FaGamepad,
  FaGift,
  FaTrophy,
  FaWallet,
  FaMobileAlt,
} from "react-icons/fa";

function GameSection() {
  const features = [
    {
      icon: <FaUserPlus />,
      title: "Royal X Casino Account",
      text: "Learn about the Royal X Casino registration process, account access, and the information required to use available platform features.",
    },
    {
      icon: <FaGamepad />,
      title: "Casino Games & Features",
      text: "Explore available casino and card-style games through a simple interface designed for convenient navigation and gameplay.",
    },
    {
      icon: <FaGift />,
      title: "Bonuses & Promotions",
      text: "Review available Royal X Casino promotions, bonuses, rewards, eligibility requirements, and applicable terms before participating.",
    },
    {
      icon: <FaTrophy />,
      title: "Gaming Information",
      text: "Understand the rules and conditions of each available game and remember that game outcomes vary and winning is not guaranteed.",
    },
    {
      icon: <FaWallet />,
      title: "Wallet & Payments",
      text: "Learn about available wallet, deposit, withdrawal, and payment options together with any applicable requirements and conditions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Gaming Access",
      text: "Explore Royal X Casino on compatible smartphones and devices through a responsive interface designed for convenient mobile access.",
    },
  ];

  return (
    <section
      aria-labelledby="royal-x-features-title"
      className="relative overflow-hidden bg-gray-200 py-16 sm:py-20 lg:py-8"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/5 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 shadow-sm backdrop-blur-sm">
            <FaTrophy className="text-sm" />
            Royal X Casino Features
          </div>

          <h2
            id="royal-x-features-title"
            className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Royal X Casino 777 Features
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Gaming & Platform Information
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Explore Royal X Casino features, including account access,
            available games, promotions, wallet information, mobile access,
            and general gaming guidance.
          </p>
        </header>

        {/* Features */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 text-xl text-yellow-600">
                {feature.icon}
              </div>

              <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.text}
              </p>
            </article>
          ))}
        </div>

        {/* Main Article */}
        <article className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-300 bg-white/70 p-6 shadow-lg backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="space-y-7 text-sm leading-7 text-gray-600 sm:text-base">

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Royal X Casino 777 Gaming Platform
              </h3>

              <p className="mt-3">
                Royal X Casino provides an online gaming environment where
                visitors can explore available games and platform features
                through a straightforward interface. Information about mobile
                access, account options, promotions, and other services can
                help users understand the available experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Royal X Casino Account Registration
              </h3>

              <p className="mt-3">
                Users interested in accessing the platform can follow the
                available registration instructions, provide the required
                information, and complete account setup according to the
                platform requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                How to Explore Games on Royal X Casino
              </h3>

              <p className="mt-3">
                After accessing an account, users can review the available
                games and choose an option that suits their interests. Before
                playing, users should read the applicable rules, conditions,
                and other game information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Royal X Casino Bonuses & Promotions
              </h3>

              <p className="mt-3">
                Promotions and bonuses may be available depending on the
                platform and account. Users should review eligibility
                requirements, wagering conditions, expiry dates, and other
                applicable terms before participating.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Wallet, Deposits & Withdrawals
              </h3>

              <p className="mt-3">
                Depending on the services available to an account, wallet,
                deposit, and withdrawal options may be provided through the
                relevant account or payment section. Users should review
                minimum amounts, processing times, fees, and applicable
                conditions before making a transaction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Royal X Casino Mobile Access
              </h3>

              <p className="mt-3">
                Royal X Casino can be explored on compatible smartphones and
                other supported devices through a responsive interface. Users
                should make sure their device meets the required specifications
                and use trusted access methods when visiting the platform.
              </p>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}

export default GameSection;