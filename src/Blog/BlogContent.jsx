import {
  FaCrown,
  FaCheckCircle,
  FaInfoCircle,
  FaGamepad,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

function BlogContent() {
  const appInfo = [
    ["App Name", "Royal X Casino"],
    ["Category", "Casino"],
    ["Developer", "RoyalX777"],
    ["File Type", "APK"],
    ["Current Version", "v2.66.2"],
    ["Size", "17.8 MB"],
    ["Updated", "August 31, 2026"],
    ["Requirements", "Android 5.0 & up"],
    ["Downloads", "1M+"],
    ["Rating Count", "100000+"],
    ["Language", "English"],
    ["Price", "Free"],
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-10 sm:py-12 lg:py-14">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-3 sm:px-5 lg:px-6">
        <div className="rounded-3xl border border-gray-300 bg-white p-4 shadow-xl sm:p-6 lg:p-8">

          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-2xl text-yellow-700">
              <FaCrown />
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-yellow-700">
              Quick Information
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
              Royal X Casino{" "}
              <span className="text-yellow-600">Information</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Get a quick overview of Royal X Casino, including its app name,
              category, developer, APK format, version, size, requirements,
              downloads, language, and other useful application details.
            </p>
          </div>

          {/* TABLE */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-400">
            <table className="w-full table-fixed border-collapse">
              <tbody>
                {appInfo.map(([label, value], index) => (
                  <tr
                    key={label}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } transition hover:bg-yellow-50`}
                  >
                    <td className="w-1/2 border-b border-r border-gray-400 px-3 py-4 sm:px-5 sm:py-5">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow-400/15 text-xs text-yellow-700 sm:h-9 sm:w-9 sm:text-sm">
                          <FaCheckCircle />
                        </span>

                        <span className="break-words text-left text-xs font-bold leading-5 text-gray-900 sm:text-sm sm:leading-6 lg:text-base">
                          {label}
                        </span>
                      </div>
                    </td>

                    <td className="w-1/2 border-b border-gray-400 px-3 py-4 text-right sm:px-5 sm:py-5">
                      <span className="block break-words text-right text-xs font-semibold leading-5 text-gray-700 sm:text-sm sm:leading-6 lg:text-base">
                        {value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NOTE */}
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-yellow-300/60 bg-yellow-50 px-4 py-4">
            <FaInfoCircle className="mt-1 shrink-0 text-yellow-700" />

            <p className="text-xs leading-6 text-yellow-900 sm:text-sm">
              <strong>Important:</strong> Application details such as version,
              file size, availability, requirements, downloads, and other
              information may change with future updates. Check the latest
              available information before downloading or using the application.
            </p>
          </div>
        </div>

        {/* ARTICLE */}
        <article className="mt-8 rounded-3xl border border-gray-300 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              <FaCrown />
              Royal X Casino Guide
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
              Royal X Casino –{" "}
              <span className="text-yellow-600">
                Gaming Platform Information
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-300 bg-gray-50 p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/15 text-lg text-yellow-700">
                <FaGamepad />
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Royal X Casino Gaming Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Royal X Casino is an online gaming platform designed to give
                users convenient access to different gaming options through a
                simple and organized interface. Users can explore available
                games, learn basic rules, and understand platform features
                before playing. The experience is designed to work across
                supported modern devices, making navigation convenient for
                mobile and desktop users. Game availability, features, and
                requirements can vary, so users should always review current
                platform information and applicable terms before using any
                feature.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-300 bg-gray-50 p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/15 text-lg text-yellow-700">
                <FaMobileAlt />
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Royal X Casino Mobile Access
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Royal X Casino can be explored on supported mobile devices
                where the appropriate application or access method is
                available. A responsive experience can make it easier to
                navigate gaming sections, account information, and other
                platform features on smaller screens. Users should keep their
                device and browser updated and use trusted access methods.
                Before installing an APK, check the Android version,
                available storage, file source, and installation requirements
                to help ensure compatibility with the device.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-300 bg-gray-50 p-5 sm:p-6 md:col-span-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/15 text-lg text-yellow-700">
                <FaShieldAlt />
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Royal X Casino Account &amp; Safety
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Account security is an important part of using any online
                gaming platform. Users should keep login information private,
                avoid sharing passwords, and be careful with unfamiliar links
                or messages. It is also useful to review game rules,
                promotional terms, eligibility requirements, and other
                applicable conditions before using platform features.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Gaming should remain an entertainment activity. Users should
                understand the risks involved, set personal limits, avoid
                chasing losses, and never treat gaming as a guaranteed source
                of income. Platform information and availability may change
                over time, so checking current information is recommended.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogContent;