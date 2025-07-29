"use client";
import { useState } from "react";
import ModalForm from "./ModalForm";
import { BASE_URL, getModalVideo } from "@/app/Server";

export default function Modal({ isOpen, onClose, data }) {
  // console.log("Modal isOpen:", isOpen);
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, phone, message });

    if (!name || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/form-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name,
            phone,
            message,
          },
        }),
      });

      const result = await res.json();
      console.log("Form submission result:", result);

      if (!res.ok) {
        alert("Submission failed. Please try again.");
        return;
      }

      // ✅ Clear fields
      setName("");
      setPhone("");
      setMessage("");

      // ✅ Close modal
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex md:items-center justify-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-[80%] max-w-[442px] md:max-w-[900px] md:w-full h-[50vh] grid grid-rows-2 md:grid-rows-1 grid-cols-5 md:grid-cols-12 mt-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="col-span-5 md:col-span-6 overflow-hidden h-[170px] md:h-[404px]">
          <video
            src={BASE_URL + data.modalVideo.url}
            className="w-full h-full object-cover rounded-lg mb-4"
            autoPlay
            loop
            poster={BASE_URL + data.poster.url}
          ></video>
        </div>
        <div className="col-span-5 md:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg  max-w-md w-full space-y-4 "
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Your phone number"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
                placeholder="Your message"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Submit */}
            <button
              onClick={() => console.log("Button clicked")}
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
