import { BASE_URL } from "@/app/Server";
import React, { useState } from "react";

function ModalForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log("Form submitted with:", { name, phone, message });
    e.preventDefault();

    if (!name || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const res = await fetch(`${BASE_URL + "/api/form-submissions"}`, {
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
  };

  return (
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
  );
}

export default ModalForm;
