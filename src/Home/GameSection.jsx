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









      

      

      </div>

    </section>
  );
}

export default GameSection;