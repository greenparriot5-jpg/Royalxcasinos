import {
  FaMobileAlt,
  FaDownload,
  FaShieldAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaAndroid,
} from "react-icons/fa";

function DownloadContent() {
  const gameReferralLink =
    "https://xrefer.cc?refer_id=101170453454";

  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description:
        "Enjoy a responsive experience designed to work comfortably on supported mobile devices.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Access",
      description:
        "Use trusted Royal X access options and avoid downloading files from unknown or suspicious sources.",
    },
    {
      icon: <FaDownload />,
      title: "Easy Download",
      description:
        "Follow the simple download process to access the Royal X application on a compatible device.",
    },
  ];

  const requirements = [
    "A compatible Android device",
    "A stable internet connection",
    "Enough storage space for the application",
    "Download the app only from a trusted source",
  ];

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-gray-200 py-12 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-amber-400/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-sm font-semibold text-yellow-700 shadow-sm backdrop-blur-sm">
            <FaDownload />
            Download Information
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Follow the recommended download process and make sure your device
            meets the basic requirements before installing the application.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-300/80 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-xl text-gray-900 shadow-lg shadow-yellow-500/10 transition duration-300 group-hover:scale-105">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 transition group-hover:text-yellow-700">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Android Download Information */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-3xl border border-gray-300 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-2xl text-yellow-700">
                <FaAndroid />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Android App
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Check these requirements first
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {requirements.map((requirement) => (
                <div
                  key={requirement}
                  className="flex items-start gap-3 rounded-xl border border-gray-300/70 bg-gray-100/70 p-4"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-yellow-600" />

                  <span className="text-sm leading-6 text-gray-700">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-yellow-400/30 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-xl text-gray-900 shadow-lg shadow-yellow-500/10">
              <FaInfoCircle />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
              Download Safely
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              For better account safety, use a trusted Royal X download source.
              Avoid APK files shared through unknown websites, unofficial links,
              or suspicious messages.
            </p>

            <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="mt-1 shrink-0 text-yellow-700" />

                <div>
                  <h4 className="font-bold text-yellow-800">
                    Important Security Tip
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-gray-600">
                    Before installing an APK, verify that it came from a
                    trusted source and check your device security settings
                    before allowing installation.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={gameReferralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-6 py-4 text-sm font-bold text-gray-900 shadow-lg shadow-yellow-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-yellow-500/25"
            >
              <FaDownload />
              Download Royal X App
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-xs leading-6 text-gray-500">
            Availability, device compatibility, and installation requirements
            may vary by device and region.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200 to-transparent" />
    </section>
  );
}

export default DownloadContent;