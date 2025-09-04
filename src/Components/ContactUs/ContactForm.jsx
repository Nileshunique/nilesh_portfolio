import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { handleCall, handleOpenMail } from "../../utils";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.description
    ) {
      setStatus("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        setStatus(
          "Email service is not configured. Please contact the administrator."
        );
        setIsLoading(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.description,
        name: formData.name,
        email: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", description: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-500 text-lg">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            Quick Contact
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div
              onClick={handleOpenMail}
              className="group cursor-pointer flex items-center bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-amber-500 hover:to-yellow-500 p-4 rounded-xl min-w-max sm:w-auto justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-zinc-600 hover:border-amber-400"
            >
              <FaEnvelope className="text-xl text-amber-400 group-hover:text-black transition-colors duration-300" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 group-hover:text-black/70 transition-colors duration-300">
                  Email
                </span>
                <span className="text-white group-hover:text-black font-medium transition-colors duration-300">
                  nilesh.document1@gmail.com
                </span>
              </div>
            </div>
            <div
              onClick={handleCall}
              className="group cursor-pointer flex items-center bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-amber-500 hover:to-yellow-500 p-4 rounded-xl min-w-max sm:w-auto justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-zinc-600 hover:border-amber-400"
            >
              <FaPhoneAlt className="text-xl text-amber-400 group-hover:text-black transition-colors duration-300" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 group-hover:text-black/70 transition-colors duration-300">
                  Phone
                </span>
                <span className="text-white group-hover:text-black font-medium transition-colors duration-300">
                  (+91) 9911148122
                </span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Or fill out the form below for detailed inquiries
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nilesh.document1@gmail.com"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell me more about your project, question, or how I can help you..."
                  rows="6"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 resize-vertical"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-4 px-6 rounded-lg hover:from-amber-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                status.includes("successfully")
                  ? "bg-green-800 border border-green-600 text-green-200"
                  : "bg-red-800 border border-red-600 text-red-200"
              }`}
            >
              <div className="flex items-center">
                {status.includes("successfully") ? (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {status}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-zinc-800 bg-opacity-50 px-8 py-4 border-t border-zinc-700">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Your information is secure and never shared</span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
