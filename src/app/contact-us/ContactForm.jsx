"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Full name should only contain letters";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d{10,15}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "WhatsApp must be 10–15 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10–15 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } 
    // else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters";
    // }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the Terms and Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

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

    if (data.success) {
      Swal.fire({
        title: "✅ Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#17AABF",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: "",
        consent: false,
      });
      setErrors({});
    } else {
      Swal.fire({
        title: "❌ Failed!",
        text: data.message || "Submission failed. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  } catch (err) {
    Swal.fire({
      title: "⚠️ Error!",
      text: "Something went wrong. Please try again later.",
      icon: "error",
      confirmButtonColor: "#d33",
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="relative containers mx-auto  py-10">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start px-4 py-8 bg-white rounded-2xl shadow-xl">
        <div
          className="bg-[#E0F2F4] rounded-xl overflow-hidden justify-center items-center p-4
                            flex-shrink-0 hidden md:flex w-full md:w-auto md:max-w-[350px]"
        >
          {" "}
          <Image
            src="/contact-us/contact.png"
            alt="Contact Illustration"
            width={600}
            height={600}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>

        <div className="flex-1">
          <form
           noValidate 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 bg-[#D9EBED] p-4 rounded-md"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-mont font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] font-mont rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
                            {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

             <div>
              <label
                htmlFor="email"
                className="block font-mont text-gray-700 font-semibold mb-2"
              >
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
                            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            

            {/* <div>
              <label
                htmlFor="email"
                className="block font-mont text-gray-700 font-semibold mb-2"
              >
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
                            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div> */}

            <div>
              <label
                htmlFor="phone"
                className="block font-mont text-gray-700 font-semibold mb-2"
              >
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
                            {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="whatsapp"
                className="block text-gray-700 font-mont font-semibold mb-2"
              >
                Whatsapp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter WhatsApp Number"
                required
                className="w-full px-4 py-3 font-mont border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
                            {errors.whatsapp && (
                <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block font-mont text-gray-700 font-semibold mb-2"
              >
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
                            {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
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
              <label
                htmlFor="consent"
                className="ml-2 text-gray-600 font-mont text-sm"
              >
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
                        {errors.consent && (
              <p className="text-red-500 text-sm mt-1 md:col-span-2">
                {errors.consent}
              </p>
            )}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-teal-500 text-white font-mont font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>

            {/* {responseMsg && (
              <div className="md:col-span-2 text-center font-mont mt-2 text-sm text-gray-700">
                {responseMsg}
              </div>
            )} */}
          </form>
          {/* {responseMsg && (
            <div
              className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white shadow-md z-50 transition-all duration-300 ${
                responseMsg.toLowerCase().includes("success")
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {responseMsg}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
