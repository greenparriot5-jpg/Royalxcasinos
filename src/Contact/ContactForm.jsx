import React, { useState } from "react";
import { Mail, MessageCircle, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_yx5kvr4",
        "template_z3th0n8",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "zaarkhan483@gmail.com",
        },
        "o51quF5mpQW-ucABt"
      )
      .then((result) => {
        console.log("EmailJS Success:", result.text);

        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        alert(
          `Message could not be sent.\n\nStatus: ${error.status}\nText: ${
            error.text || "Unknown error"
          }`
        );

        setLoading(false);
      });
  }

  return (
    <section className="bg-gray-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-bold text-center uppercase tracking-[0.2em] text-yellow-600">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            We would love to hear from you
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            If you have questions, suggestions or feedback about our
            entertainment platform, use the form and send us a message.
          </p>

          <div className="mt-8 space-y-4">

            {/* EMAIL */}
            <a
              href="mailto:zaarkhan483@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 transition hover:border-yellow-400 hover:shadow-sm"
            >
              <Mail className="text-yellow-500" />

              <span className="text-slate-700">
                contact@royalxcasinos777.com
              </span>
            </a>

            {/* PHONE / SUPPORT */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4">
              <Phone className="text-yellow-500" />

              <span className="text-slate-700">
                Contact Support
              </span>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4">
              <MessageCircle className="text-yellow-500" />

              <span className="text-slate-700">
                Customer Support
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm"
        >

          {/* NAME */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Name
            </label>

            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
            />
          </div>

          {/* EMAIL */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Email
            </label>

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
            />
          </div>

          {/* PHONE */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Phone Number
            </label>

            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Message
            </label>

            <textarea
              required
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold text-slate-950 transition ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-yellow-400 hover:bg-yellow-300"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}

            <Send size={18} />
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactForm;