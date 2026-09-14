import {
  FaShieldAlt,
  FaBolt,
  FaGamepad,
  FaMobileAlt,
  FaHeadset,
  FaUsers,
} from "react-icons/fa";

function AboutFeatures() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description:
        "Enjoy a dependable gaming environment designed with security and player protection in mind.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Experience",
      description:
        "Smooth navigation and responsive gameplay give you a fast and enjoyable experience across devices.",
    },
    {
      icon: <FaGamepad />,
      title: "Exciting Games",
      description:
        "Explore a growing collection of entertaining games created to keep every gaming session engaging.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Play Anywhere",
      description:
        "Access Royal X Casino comfortably from desktop, tablet, or mobile devices whenever supported.",
    },
    {
      icon: <FaHeadset />,
      title: "Player Support",
      description:
        "Get helpful assistance when you need it through our available support channels.",
    },
    {
      icon: <FaUsers />,
      title: "Player Community",
      description:
        "Be part of a growing community where players can enjoy a modern and social gaming atmosphere.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-14 sm:py-16">
      
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-700">
            Why Choose Royal X
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Built For A{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Better Gaming Experience
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Royal X Casino focuses on creating a modern, smooth, and engaging
            platform where players can discover entertainment in one place.
          </p>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10"
            >

              {/* Number */}
              <div className="absolute right-5 top-5 text-4xl font-black text-gray-200 transition duration-300 group-hover:text-yellow-400/20">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-xl text-gray-900 shadow-lg shadow-yellow-500/10 transition duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-yellow-700">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-5 h-px w-12 bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-300 group-hover:w-24" />

            </div>
          ))}

        </div>

        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-400/15 via-white/70 to-yellow-400/10 p-7 shadow-sm sm:p-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            {/* Text */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Your Experience Matters
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                We continuously work toward improving the Royal X experience
                with better design, smoother performance, and engaging
                entertainment.
              </p>

            </div>

            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-400/10 text-2xl text-yellow-700">
              <FaGamepad />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutFeatures;