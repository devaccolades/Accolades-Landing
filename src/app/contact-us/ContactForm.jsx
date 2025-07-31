"use client"
import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from next/image

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.consent) {
    setResponseMsg("Please agree to the Terms and Privacy Policy.");
    setTimeout(() => setResponseMsg(""), 4000); // clear message after 4s
    return;
  }

  try {
    setLoading(true);
    setResponseMsg("");

    const res = await fetch("/api/send-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponseMsg(data.message);

    if (data.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    }
  } catch (err) {
    setResponseMsg("Something went wrong. Please try again.");
  } finally {
    setLoading(false);

    // ⏳ clear the response message after 4 seconds
    setTimeout(() => setResponseMsg(""), 4000);
  }
};

  return (
    <section className="relative containers mx-auto  py-10">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start px-4 py-8 bg-white rounded-2xl shadow-xl">
        {/* Left Side: Illustration */}
        {/* This div dictates the image width and holds the next/image component */}
        <div
          className="bg-[#E0F2F4] rounded-xl overflow-hidden justify-center items-center p-4
                            flex-shrink-0 hidden md:flex w-full md:w-auto md:max-w-[350px]"
        >
          {" "}
          {/* Adjust max-w-[450px] as needed */}
          <Image
            src="/contact-us/contact.png" // Path relative to the 'public' directory
            alt="Contact Illustration"
            width={600} // Set the intrinsic width of your image (adjust this to your actual image size)
            height={600} // Set the intrinsic height of your image (adjust this to your actual image size)
            layout="responsive" // Makes the image responsive within its parent
            objectFit="contain" // Ensures the image fits within its boundaries
            priority // Load this image with high priority
          />
        </div>

        {/* Right Side: Form Fields - flex-1 takes remaining space */}
        <div className="flex-1">
           <form
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 bg-[#D9EBED] p-4 rounded-md"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-mont font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] font-mont rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-mont font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                required
                className="w-full px-4 py-3 font-mont border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mont text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full px-4 py-3 font-mont border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-mont text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone"
                required
                className="w-full px-4 py-3 font-mont border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message"  className="block font-mont text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                required
                className="w-full px-4 py-3 font-mont border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300"
              />
              <label htmlFor="consent" className="ml-2 text-gray-600 font-mont text-sm">
                I agree with{" "}
                <a href="#" className="text-teal-500 hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-teal-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-teal-500 text-white font-mont font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>

            {responseMsg && (
              <div className="md:col-span-2 text-center font-mont mt-2 text-sm text-gray-700">
                {responseMsg}
              </div>
            )}
          </form>
          {responseMsg && (
  <div
    className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white shadow-md z-50 transition-all duration-300 ${
      responseMsg.toLowerCase().includes("success")
        ? "bg-green-600"
        : "bg-red-600"
    }`}
  >
    {responseMsg}
  </div>
)}
        </div>
      </div>

       
    </section>
  );
}
