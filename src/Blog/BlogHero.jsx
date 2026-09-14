import {
  FaNewspaper,
  FaCrown,
  FaGamepad,
  FaLightbulb,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket,
  FaStar,
} from "react-icons/fa";

function BlogHero() {
  const articles = [
    {
      icon: <FaCrown />,
      category: "Royal X Guide",
      title: "What Is Royal X Casino?",
      text:
        "Discover Royal X Casino and learn about its modern gaming platform, simple navigation, available features, and digital gaming experience.",
    },
    {
      icon: <FaGamepad />,
      category: "Gaming Guide",
      title: "How To Get Started With Royal X",
      text:
        "Learn the basic steps for getting started with Royal X, exploring the platform, understanding available games, and navigating your account.",
    },
    {
      icon: <FaLightbulb />,
      category: "Gaming Tips",
      title: "Tips For A Better Gaming Experience",
      text:
        "Explore useful gaming tips, learn game rules, understand platform features, and make informed decisions while enjoying online entertainment.",
    },
    {
      icon: <FaMobileAlt />,
      category: "Mobile Gaming",
      title: "Royal X On Mobile Devices",
      text:
        "Learn how Royal X can be explored on supported smartphones and tablets with a responsive interface designed for convenient mobile access.",
    },
    {
      icon: <FaShieldAlt />,
      category: "Platform Guide",
      title: "Understanding Your Royal X Account",
      text:
        "Understand the importance of your Royal X account, account settings, security practices, and the main features available to users.",
    },
    {
      icon: <FaStar />,
      category: "Rewards",
      title: "Understanding Bonuses & Promotions",
      text:
        "Learn how to review promotional offers, eligibility requirements, applicable terms, expiration details, and other conditions before participating.",
    },
    {
      icon: <FaRocket />,
      category: "Platform Updates",
      title: "Why A Smooth Interface Matters",
      text:
        "Discover why simple navigation, responsive design, organized menus, and a clean interface can improve the overall digital gaming experience.",
    },
    {
      icon: <FaGamepad />,
      category: "Beginner Guide",
      title: "Choosing Games That Suit You",
      text:
        "Learn how beginners can explore different gaming options, understand game rules, and choose entertainment options that match their interests.",
    },
    {
      icon: <FaCrown />,
      category: "Royal X Experience",
      title: "Exploring The Royal X Gaming Experience",
      text:
        "Explore the Royal X experience, including platform navigation, gaming features, mobile access, account information, and general player guidance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-10 sm:py-12 lg:py-14">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= BLOG INTRO ================= */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
            <FaNewspaper />
            Royal X Blog
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Royal X Gaming

            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Guides &amp; Insights
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Explore Royal X Casino guides, gaming tips, platform information,
            mobile gaming insights, account guides, promotions, and helpful
            articles designed to make your online gaming journey easier to
            understand.
          </p>

        </div>

        {/* ================= QUICK TOPICS ================= */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-2xl border border-gray-300 bg-white/75 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-700 transition group-hover:scale-110">
              <FaGamepad />
            </div>

            <h3 className="mt-4 text-base font-bold text-gray-900">
              Gaming Guides
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Learn about games, rules, features, and useful gaming basics.
            </p>

          </div>

          <div className="group rounded-2xl border border-gray-300 bg-white/75 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-700 transition group-hover:scale-110">
              <FaLightbulb />
            </div>

            <h3 className="mt-4 text-base font-bold text-gray-900">
              Gaming Tips
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Discover practical information for a smoother gaming experience.
            </p>

          </div>

          <div className="group rounded-2xl border border-gray-300 bg-white/75 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-700 transition group-hover:scale-110">
              <FaMobileAlt />
            </div>

            <h3 className="mt-4 text-base font-bold text-gray-900">
              Mobile Gaming
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore mobile access, responsive design, and device-friendly use.
            </p>

          </div>

          <div className="group rounded-2xl border border-gray-300 bg-white/75 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-700 transition group-hover:scale-110">
              <FaCrown />
            </div>

            <h3 className="mt-4 text-base font-bold text-gray-900">
              Royal X Updates
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Keep up with platform information, features, and useful updates.
            </p>

          </div>

        </div>







      






      </div>
    </section>
  );
}

export default BlogHero;