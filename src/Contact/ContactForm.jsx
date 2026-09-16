
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden bg-gray-200 pb-10 sm:pb-12 lg:pb-14">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-300 bg-white shadow-xl">

          {/* HEADER */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-yellow-400/15 via-yellow-400/5 to-transparent p-5 sm:p-6">
            <div>
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                Send Us A Message
              </h2>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Fill out the form and tell us how we can help.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 lg:p-8">

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="mb-5 rounded-xl border border-green-300 bg-green-50 p-3.5">
                <div>
                  <h3 className="text-sm font-bold text-green-700">
                    Message submitted successfully
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-green-600">
                    Thank you for contacting Royal X Casino. Your message has
                    been received.
                  </p>
                </div>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* SUBJECT */}
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to ask?"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>
            </div>

            {/* NOTICE */}
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-50 px-4 py-3">
              <p className="text-xs leading-5 text-gray-600">
                Please do not include passwords, payment information, or other
                sensitive information in your message.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-yellow-300 to-amber-500 px-6 py-3 text-sm font-bold text-gray-900 shadow-lg shadow-yellow-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-yellow-500/20"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

