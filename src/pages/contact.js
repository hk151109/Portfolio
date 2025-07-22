import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/Components/Layout";
import AnimatedText from "@/Components/AnimatedText";
import emailjs from "emailjs-com";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      title: title,
      message: message,
    };

    try {
      await emailjs.send(
        "service_2wiixtn",
        "template_m8kosun",
        templateParams,
        "J3oIzwlbkjMs-D2le"
      );
      setStatus("success");
      // Clear form after successful submission
      setUserName("");
      setUserEmail("");
      setTitle("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      console.error(error.text);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 sm:px-6 sm:py-4 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-base sm:text-lg";
  
  const labelClasses = "block text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3";

  return (
    <>
      <Head>
        <title>Harikrishnan | Contact</title>
        <meta name="description" content="Contact form to get in touch with Harikrishnan." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex w-full flex-col items-center justify-start dark:text-light px-3 sm:px-4 py-4 sm:py-8 min-h-screen">
        <Layout className="pt-4 sm:pt-8 w-full max-w-5xl">
          {/* Headline */}
          <AnimatedText
            text="Let&#39;s Get in Touch!"
            className="mb-8 sm:mb-12 lg:mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl !text-3xl text-center px-2"
          />

          {/* Contact Form Container */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-200/20 dark:border-gray-700/30">
              
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="name" className={labelClasses}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your full name"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="email" className={labelClasses}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="title" className={labelClasses}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What&#39;s this about?"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="message" className={labelClasses}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me more about your project or inquiry..."
                    className={`${inputClasses} resize-none min-h-[120px] sm:min-h-[150px]`}
                    rows="5"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 sm:space-x-3 active:scale-95 touch-manipulation"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span className="text-base sm:text-lg">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-base sm:text-lg">Send Message</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-50/80 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start sm:items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 dark:text-green-300 font-medium text-base sm:text-lg leading-relaxed">
                      Message sent successfully! I&#39;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-red-50/80 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start sm:items-center space-x-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-red-800 dark:text-red-300 font-medium text-base sm:text-lg leading-relaxed">
                      Failed to send message. Please try again later.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Cards at Bottom */}
            <div className="mt-8 sm:mt-12">
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg px-4">
                  Prefer to reach out directly?
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto px-2">
                {/* Email Card */}
                <a 
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=harikrishnangopal0411@gmail.com" 
                  className="group bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 sm:p-4 rounded-xl border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-md active:scale-95 touch-manipulation"
                >
                  <div className="flex items-center space-x-3 text-blue-700 dark:text-blue-300">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">Email</h3>
                      <p className="text-xs sm:text-sm opacity-80 hidden sm:block">Drop a line</p>
                      <p className="text-xs opacity-80 sm:hidden">harikrishnangopal0411@gmail.com</p>
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+919372296398" 
                  className="group bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 sm:p-4 rounded-xl border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-md active:scale-95 touch-manipulation"
                >
                  <div className="flex items-center space-x-3 text-blue-700 dark:text-blue-300">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">Call</h3>
                      <p className="text-xs sm:text-sm opacity-80 hidden sm:block">Let&#39;s talk</p>
                      <p className="text-xs opacity-80 sm:hidden">+91 9372296398</p>
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a 
                  href="https://linkedin.com/in/harikrishnangopal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 sm:p-4 rounded-xl border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-md active:scale-95 touch-manipulation sm:col-span-2 lg:col-span-1"
                >
                  <div className="flex items-center space-x-3 text-blue-700 dark:text-blue-300">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base">LinkedIn</h3>
                      <p className="text-xs sm:text-sm opacity-80">Connect professionally</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;