import {
  FaEnvelope,
  FaHeadset,
  FaClock,
  FaShieldAlt,
  FaQuestionCircle,
  FaComments,
} from "react-icons/fa";

function ContactContent() {
  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "Email Support",
      description:
        "Send us your questions, feedback, or general inquiries and our team will review your message.",
      value: "support@royalxcasino.com",
    },
    {
      icon: <FaHeadset />,
      title: "Player Assistance",
      description:
        "Need help with the platform? Our support team can assist with general account and platform questions.",
      value: "Support Center",
    },
    {
      icon: <FaClock />,
      title: "Support Hours",
      description:
        "Support availability may vary. Include enough details in your message so we can assist you efficiently.",
      value: "Available Online",
    },
  ];

  const helpTopics = [
    "General platform questions",
    "Technical issues",
    "Game-related information",
    "Website feedback",
    "Account assistance",
    "Responsible gaming questions",
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-10 sm:py-12 lg:py-14">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-400/15 px-3 py-1.5 text-xs font-bold text-yellow-700 sm:px-4 sm:py-2 sm:text-sm">
            <FaComments />
            Let&apos;s Connect
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            How Can We{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
              Help?
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base lg:text-lg">
            Whether you have a question, need technical assistance, or want to
            share feedback, we&apos;re here to listen and help.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3 sm:mt-8">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 text-lg text-gray-900 shadow-md shadow-yellow-500/10 transition duration-300 group-hover:scale-105">
                {card.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {card.description}
              </p>

              <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2.5">
                <p className="break-all text-sm font-bold text-yellow-700">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-sm">
              Support Topics
            </span>

            <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
              Tell Us What You Need
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              To help us understand your request faster, choose a relevant
              topic and provide clear details about your question or issue.
            </p>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-gray-300 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 text-lg text-yellow-700">
                <FaShieldAlt />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Privacy &amp; Security
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Please do not include passwords, payment details, or other
                  sensitive information in your message.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-md sm:p-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/15 text-lg text-yellow-700">
                <FaQuestionCircle />
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Common Topics
                </h4>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  You can contact us about:
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {helpTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-500" />
                  <span className="text-sm text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-yellow-400/30 bg-gray-900 p-5 text-center shadow-lg sm:p-6">
          <h3 className="text-xl font-black text-white sm:text-2xl">
            Have Something To Tell Us?
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-300">
            Use the contact form below to send your message. Provide relevant
            information so we can understand your request clearly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;