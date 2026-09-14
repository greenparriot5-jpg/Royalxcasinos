import {
  FaDownload,
  FaMobileAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function DownloadSteps() {
  const steps = [
    {
      number: "01",
      icon: <FaDownload />,
      title: "Open The Download Page",
      description:
        "Visit the official Royal X download page and tap the download button to begin.",
    },
    {
      number: "02",
      icon: <FaMobileAlt />,
      title: "Download The App",
      description:
        "Download the Royal X app on your Android device and wait for the file to finish downloading.",
    },
    {
      number: "03",
      icon: <FaShieldAlt />,
      title: "Install Securely",
      description:
        "Install the app from the downloaded file and make sure you are using the official Royal X source.",
    },
    {
      number: "04",
      icon: <FaCheckCircle />,
      title: "Start Exploring",
      description:
        "Open Royal X, explore the available games and enjoy a smooth mobile gaming experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-sm font-semibold text-yellow-700 shadow-sm backdrop-blur-sm">
            Simple Installation
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Get Started In{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              A Few Easy Steps
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Getting Royal X on your mobile device is quick and simple. Follow
            these steps to get started with the app.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-gray-300 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-lg sm:p-7"
            >
              <div className="absolute right-5 top-5 text-4xl font-black text-gray-900/[0.05]">
                {step.number}
              </div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-300 to-amber-500 text-xl text-gray-900 shadow-lg shadow-yellow-500/10 transition duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
                Step {step.number}
              </p>

              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-500 transition group-hover:text-yellow-700">
                <span>Next Step</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-yellow-400/30 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:mt-12 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-700">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Download From A Trusted Source
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  For better account safety, use the official or trusted Royal
                  X download source and avoid unknown third-party files.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-yellow-700">
              <FaCheckCircle />
              Secure Download Guidance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSteps;