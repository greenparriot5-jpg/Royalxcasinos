import React from "react";
import { Link } from "react-router-dom";

function InternalLinksArticle() {
  return (
    <section className="bg-gray-200 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
            Explore Royal X Casino
          </h2>

          <div className="mt-5 space-y-5 text-base leading-8 text-gray-600">

            <p>
              Royal X Casino provides information about its online gaming
              experience, platform features, mobile access, and available
              services. Visitors can explore the website to learn more about
              the platform and find the information they need.
            </p>

            <p>
              To learn more about Royal X Casino, visit our{" "}
              <Link
                to="/about"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                About Royal X Casino
              </Link>{" "}
              page for additional information about the platform and its
              gaming experience.
            </p>

            <p>
              Visitors can also explore the latest guides and useful
              information on our{" "}
              <Link
                to="/blog"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Royal X Casino Blog
              </Link>
              . The blog provides helpful articles about gaming, platform
              features, mobile access, account information, and responsible
              gaming.
            </p>

            <p>
              If you need assistance or want to send a question or suggestion,
              you can visit our{" "}
              <Link
                to="/contact"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Contact Royal X Casino
              </Link>{" "}
              page and use the available contact options.
            </p>

            <p>
              Users who want to learn about accessing the platform can visit
              the{" "}
              <Link
                to="/download"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Royal X Casino Download
              </Link>{" "}
              page for information about supported access and the available
              download option.
            </p>

            <p>
              By connecting these sections, visitors can easily move between
              the Royal X Casino home page, about information, gaming guides,
              contact section, and download page. Users should review the
              available information and applicable terms before using any
              gaming-related service.
            </p>

          </div>
        </article>
      </div>
    </section>
  );
}

export default InternalLinksArticle;