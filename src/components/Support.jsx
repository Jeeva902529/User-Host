"use client"
import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [activeTab, setActiveTab] = useState("contact")
  const [activeQuestion, setActiveQuestion] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post("https://back-end-res-6emf.onrender.com/api/support", formData)
      setSuccess({
        type: "success",
        message: "Your message has been sent successfully! Our team will get back to you shortly.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSuccess({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly.",
      })
    }
    setLoading(false)

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      })
    }, 100)
  }

  const faqQuestions = [
    {
      id: 1,
      question: "How can I make a reservation?",
      answer:
        "You can make a reservation through our website's reservation page, by calling us directly at (555) 123-4567, or using our mobile app. We recommend booking at least 2-3 days in advance for weekends.",
    },
    {
      id: 2,
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Yes, we cater to various dietary needs including vegetarian, vegan, gluten-free, and allergen-specific requirements. Please inform us of any dietary restrictions when making your reservation or speak with your server.",
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer:
        "We appreciate a 24-hour notice for cancellations. For parties of 6 or more, we require a 48-hour notice. Failure to cancel within these timeframes may result in a cancellation fee.",
    },
    {
      id: 4,
      question: "Do you offer catering services?",
      answer:
        "Yes, we offer catering for events of all sizes. Please contact our catering department at catering@craverestaurant.com or fill out the form on this page for more information and pricing.",
    },
    {
      id: 5,
      question: "Is there a dress code?",
      answer:
        "We maintain a smart casual dress code. While formal attire is not required, we ask that guests refrain from wearing athletic wear, beachwear, or overly casual attire.",
    },
  ]

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-[#ff3131] mb-4"
          >
            Customer <span className="text-[#2b2c40]">Support</span>
          </motion.h1>
          <div className="w-24 h-1 bg-[#ff3131] mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2b2c40] max-w-3xl mx-auto"
          >
            We're here to help with any questions, concerns, or feedback you may have about your dining experience.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-[#2b2c40] overflow-hidden">
            <button
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === "contact" ? "bg-[#2b2c40] text-white" : "bg-white text-[#2b2c40] hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Us
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === "faq" ? "bg-[#2b2c40] text-white" : "bg-white text-[#2b2c40] hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        {activeTab === "contact" && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#2b2c40] text-white p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-[#ff3131]">Get in Touch</h2>
                <p className="mb-8 text-gray-300">
                  Have a question or feedback? Fill out the form or contact us directly using the information below.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#ff3131] p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Phone</h3>
                      <p className="text-gray-300 mt-1">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#ff3131] p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Email</h3>
                      <p className="text-gray-300 mt-1">support@craverestaurant.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#ff3131] p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Address</h3>
                      <p className="text-gray-300 mt-1">123 Culinary Avenue, Foodie District, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#ff3131] p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hours</h3>
                      <p className="text-gray-300 mt-1">Mon-Fri: 11am-10pm</p>
                      <p className="text-gray-300">Sat-Sun: 10am-11pm</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
                <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#2b2c40]">Send a Message</h2>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Reservation Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry or feedback..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff3131] hover:bg-[#e02020] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Success/Error Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-8 p-4 rounded-lg ${
                  success.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    {success.type === "success" ? (
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{success.message}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-[#2b2c40]">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqQuestions.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left font-medium text-lg text-[#2b2c40] hover:text-[#ff3131] transition-colors py-2"
                      onClick={() => toggleQuestion(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          activeQuestion === faq.id ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {activeQuestion === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 text-gray-600"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2b2c40] mb-2">Still have questions?</h3>
                <p className="text-gray-600 mb-4">
                  If you couldn't find the answer to your question, please don't hesitate to contact us directly.
                </p>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="bg-[#ff3131] hover:bg-[#e02020] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SupportPage
