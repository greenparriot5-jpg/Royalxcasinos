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
      title: "Easy Account Registration",
      text: "Create your Royal X Casino account through a simple registration process and get started with the available gaming experience.",
    },
    {
      icon: <FaGamepad />,
      title: "Exciting Games",
      text: "Explore available casino and card-style games through a simple interface designed for convenient navigation and smooth gameplay.",
    },
    {
      icon: <FaGift />,
      title: "Bonuses & Rewards",
      text: "Check available Royal X Casino promotions, bonuses, and rewards, and review the eligibility requirements and applicable terms before participating.",
    },
    {
      icon: <FaTrophy />,
      title: "Play & Win",
      text: "Choose a game, understand its rules and conditions, and enjoy the gaming experience responsibly. Game outcomes can vary and winning is not guaranteed.",
    },
    {
      icon: <FaWallet />,
      title: "Simple Wallet Experience",
      text: "Use the available account and wallet options to manage your gaming balance and review applicable deposit, withdrawal, and payment conditions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      text: "Access the Royal X Casino experience on compatible smartphones and devices through a responsive interface designed for convenient mobile use.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/5 blur-[150px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 shadow-sm backdrop-blur-sm">
            <FaTrophy className="text-sm" />
            Royal X Casino Features
          </div>

          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Why Choose
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Royal X Casino?
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Discover the key features of Royal X Casino, including account
            access, available games, promotions, wallet options, and
            mobile-friendly gaming.
          </p>

        </div>

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
                can access the Royal X Casino platform, follow the available
                registration instructions, provide the required information,
                and complete the account setup according to the platform
                requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                How to Play Games on Royal X Casino
              </h3>

              <p className="mt-3">
                After accessing an account, users can explore the available
                games and select an experience that interests them. Before
                playing, users should understand the applicable rules and
                conditions. Choosing a game carefully and playing responsibly
                can help create a more informed gaming experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Bonuses, Promotions &amp; Rewards
              </h3>

              <p className="mt-3">
                Promotions and bonuses can be part of an online gaming
                experience. Royal X users should check currently available
                promotions and carefully review eligibility requirements,
                wagering conditions, expiry dates, and other applicable terms
                before participating.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Wallet and Withdrawal Experience
              </h3>

              <p className="mt-3">
                Depending on the services available to an account, wallet and
                withdrawal options may be available through the relevant
                account or payment section. Users should follow the platform's
                instructions and review applicable minimums, processing times,
                fees, and conditions before requesting a withdrawal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Mobile Gaming with Royal X Casino
              </h3>

              <p className="mt-3">
                Royal X Casino can be explored on compatible mobile devices
                through a responsive and easy-to-use interface. Users should
                make sure their device meets the required specifications and
                should use trusted access methods when visiting the platform
                or installing an application.
              </p>
            </div>

          </div>

        </article>

      </div>
    </section>
  );
}

export default GameSection;