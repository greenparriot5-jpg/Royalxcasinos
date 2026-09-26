import { Link } from "react-router-dom";

function InternalLinksArticle() {
  return (
    <section
      aria-labelledby="royal-x-related-pages"
      className="bg-gray-200 py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2
            id="royal-x-related-pages"
            className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl"
          >
            Royal X Casino 777 Related Pages
          </h2>

          <div className="mt-5 space-y-5 text-base leading-8 text-gray-600">
            <p>
              Explore the main Royal X Casino 777 sections to find information
              about the gaming platform, available features, mobile access,
              account guidance, download options, and useful gaming resources.
            </p>

            <p>
              To return to the main platform information, visit the{" "}
              <Link
                to="/"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Royal X Casino 777 Home Page
              </Link>{" "}
              for an overview of the website and its available sections.
            </p>

            <p>
              Visitors looking for gaming guides and additional information
              can explore the{" "}
              <Link
                to="/blog"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Royal X Casino 777 Blog
              </Link>{" "}
              for articles covering platform features, gaming information,
              mobile access, account topics, and responsible gaming.
            </p>

            <p>
              For questions, feedback, or general enquiries, visit the{" "}
              <Link
                to="/contact"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Royal X Casino Contact Page
              </Link>{" "}
              to find the available contact information.
            </p>

            <p>
              Visitors interested in game access and installation information
              can visit the{" "}
              <Link
                to="/download"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Royal X Casino 777 Download & Access Guide
              </Link>{" "}
              for relevant download and platform access information.
            </p>

            <p>
              Connecting these related sections creates a clearer internal
              navigation structure between the Royal X Casino 777 home page,
              About information, gaming guides, contact resources, and download
              information.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default InternalLinksArticle;