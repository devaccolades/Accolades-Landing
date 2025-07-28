import React from "react";
import Image from "next/image"; // Import the Image component from next/image

export default function ContactForm() {
  return (
    <section className="container mx-auto px-4 py-8 bg-white rounded-2xl shadow-xl my-10">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 bg-[#D9EBED] p-4 rounded-md">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone"
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter Your Message"
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y transition-all duration-200"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="md:col-span-2 flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300"
              />
              <label htmlFor="consent" className="ml-2 text-gray-600 text-sm">
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

            {/* Send Button */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
