import {
  FaUserPlus,
  FaGamepad,
  FaGift,
  FaTrophy,
  FaWallet,
  FaMobileAlt,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaHeadset,
  FaCoins,
  FaCheckCircle,
} from "react-icons/fa";

function GameSection() {
  const features = [
    {
      icon: <FaUserPlus />,
      title: "Easy Account Registration",
      text: "Create your Royal X Casino account with a simple registration process and get started with your gaming experience quickly.",
    },
    {
      icon: <FaGamepad />,
      title: "Exciting Games",
      text: "Explore an engaging collection of casino and card-style games designed for smooth gameplay and easy navigation.",
    },
    {
      icon: <FaGift />,
      title: "Bonuses & Rewards",
      text: "Keep an eye on available promotions, bonuses, and rewards offered through Royal X Casino and check their applicable terms.",
    },
    {
      icon: <FaTrophy />,
      title: "Play & Win",
      text: "Choose your preferred game, understand the game rules, and enjoy the experience while playing responsibly. Winning depends on the outcome of the game.",
    },
    {
      icon: <FaWallet />,
      title: "Simple Wallet Experience",
      text: "Manage your gaming balance through the available account and wallet options provided by the Royal X Casino platform.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      text: "Enjoy a convenient gaming experience on compatible smartphones and devices with a responsive and easy-to-use interface.",
    },
   
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-16 sm:py-20 lg:py-24">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/5 blur-[150px]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 shadow-sm backdrop-blur-sm">
            <FaTrophy className="text-sm" />
            Royal X Casino Features
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">

            Why Choose

            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Royal X Casino?
            </span>

          </h2>

          {/* Intro */}
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Discover the key features of Royal X Casino, from easy account
            registration and exciting games to mobile-friendly access,
            promotions, rewards, and a simple gaming experience.
          </p>

        </div>

        {/* ================= INTRO ARTICLE ================= */}
        <article className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-300 bg-white/70 p-6 shadow-lg backdrop-blur-sm sm:p-8 lg:p-10">

          <div className="space-y-6 text-sm leading-7 text-gray-600 sm:text-base">

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Royal X Casino Gaming Experience
              </h3>

              <p className="mt-3">
                Royal X Casino provides a convenient online gaming environment
                where players can explore different gaming options through a
                simple and modern interface. The platform focuses on easy
                navigation, smooth gameplay, mobile accessibility, and a
                player-friendly experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                How to Create a Royal X Casino Account
              </h3>

              <p className="mt-3">
                Getting started is designed to be straightforward. A new user
                can access the official Royal X Casino platform, follow the
                available registration instructions, provide the required
                information, and complete the account setup according to the
                platform requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                How to Play Games on Royal X Casino
              </h3>

              <p className="mt-3">
                After accessing your account, explore the available games and
                select an experience that interests you. Before playing, make
                sure you understand the rules and any applicable conditions.
                Choose your game, follow the on-screen instructions, and enjoy
                the gameplay responsibly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Bonuses, Promotions & Rewards
              </h3>

              <p className="mt-3">
                Promotions and bonuses can make a gaming platform more engaging.
                Royal X users should check the currently available promotions
                and carefully review their eligibility requirements, wagering
                conditions, expiry dates, and other applicable terms before
                participating.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Wallet and Withdrawal Experience
              </h3>

              <p className="mt-3">
                Depending on the services available to your account, wallet and
                withdrawal options can be accessed through the relevant account
                or payment section. Users should follow the platform's
                instructions, verify any required information, and check the
                applicable minimums, processing times, fees, and conditions
                before requesting a withdrawal.
              </p>
            </div>

          </div>

        </article>

        {/* ================= FEATURES HEADING ================= */}
        <div className="mx-auto mt-16 max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
            Everything You Need
          </span>

          <h3 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
            Main Features of Royal X Casino
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Explore the main features that make the Royal X Casino experience
            simple, accessible, and easy to navigate.
          </p>

        </div>

        {/* ================= FEATURE GRID ================= */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-300/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10"
            >

              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-300 group-hover:bg-yellow-400/20" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-400/10 text-xl text-yellow-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-400/20">
                {feature.icon}
              </div>

              {/* Content */}
              <h4 className="relative mt-5 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">
                {feature.title}
              </h4>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                {feature.text}
              </p>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500 group-hover:w-full" />

            </article>
          ))}

        </div>

        {/* ================= HOW IT WORKS ================= */}
        <div className="mx-auto mt-16 max-w-5xl">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              Simple Process
            </span>

            <h3 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
              How Royal X Casino Works
            </h3>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">

            {/* Step 1 */}
            <div className="relative rounded-2xl border border-gray-300 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-gray-900">
                1
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                Create Account
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Register and complete the required account setup.
              </p>

            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-gray-300 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-gray-900">
                2
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                Explore Games
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Browse the available games and choose your preferred option.
              </p>

            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-gray-300 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-gray-900">
                3
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                Play Responsibly
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Understand the rules and enjoy the available gaming experience.
              </p>

            </div>

            {/* Step 4 */}
            <div className="relative rounded-2xl border border-gray-300 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-gray-900">
                4
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                Manage Your Account
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Use the available account, wallet, and support options when
                needed.
              </p>

            </div>

          </div>

        </div>

        {/* ================= FINAL SEO ARTICLE ================= */}
        <article className="mx-auto mt-16 max-w-5xl rounded-3xl border border-yellow-500/20 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">

          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">
            A Simple and Modern Online Gaming Experience
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
            Whether you are discovering online casino games for the first
            time or looking for a convenient gaming platform, Royal X Casino
            brings together game access, account management, promotions,
            mobile-friendly design, and player-focused features in one place.
            Always review the official game rules, payment conditions,
            promotional terms, and applicable requirements before playing.
          </p>

          {/* Feature Highlights */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-700">
              <FaCheckCircle />
              Easy Registration
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-700">
              <FaCheckCircle />
              Exciting Games
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-700">
              <FaCheckCircle />
              Mobile Friendly
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-700">
              <FaCheckCircle />
              Rewards & Promotions
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-700">
              <FaCheckCircle />
              Simple Navigation
            </span>

          </div>

        </article>

      </div>

    </section>
  );
}

export default GameSection;