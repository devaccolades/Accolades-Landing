"use client";
import Swal from "sweetalert2";


import { useState } from "react";

const ReachUs = () => {
  const [loading, setLoading] = useState(false);

  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      Swal.fire({
        title: "✅ Success!",
        text: "Submitted successfully!",
        icon: "success",
        confirmButtonColor: "#17AABF",
      });

      setFormData({ phone: "", email: "", name: "" });
    } else {
      Swal.fire({
        title: "❌ Failed!",
        text: "Submission failed. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    console.error("Email submit error:", error);
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
    <main className="containers pb-10">
      <section className="bg-[#EDF5F8] rounded-[50px] lg:rounded-[70px] px-6 md:px-12 py-6 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 lg:gap-10">
          <div className="w-full md:w-[35%] space-y-3">
            <h2 className="text-[28px] md:text-5xl font-mont font-bold text-gray-800">
              Reach Us
            </h2>
            <p className="text-gray-600 font-mont text-lg mt-4">
              Accolades is here to fulfil all your needs and leading you towards
              the light of knowledge.
            </p>
          </div>

          <div className="w-full md:w-[35%] font-mont space-y-6 text-gray-700 text-base">
            <div>
              <h4 className="text-[#17AABF] font-mont font-semibold mb-1">
                Office Address
              </h4>
              <p>
                Accolades Integrated Pvt Ltd Rahmath Building, 46/2056 - A, AKG Vayanasala Road, Chakkaraparambu,
         
            Vennala, Kochi, Ernakulam, Kerala 682028
              </p>
            </div>

            <div>
              <h4 className="text-[#17AABF] font-mont font-semibold mb-1">Call Us</h4>
              <p>+91 7072619922</p>
            </div>

            <div>
              <h4 className="text-[#17AABF] font-mont font-semibold mb-1">Mail Us</h4>
              <p>mail@accoladesmedia.co.in</p>
            </div>
          </div>

          <div className="w-full md:w-[30%] flex-1">
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full rounded-full font-mont border border-gray-300 px-3 py-3 outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 font-mont text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full rounded-full font-mont border border-gray-300 px-3 py-3 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 font-mont text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-full font-mont border border-gray-300 px-3 py-3 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 font-mont text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-white text-[#17AABF] font-mont font-medium rounded-full px-10 py-3 mt-2 hover:bg-gray-100 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>

              {/* {submitMessage && (
                <p
                  className={`text-sm mt-2 ${messageType === "success" ? "text-green-600" : "text-red-500"
                    }`}
                >
                  {submitMessage}
                </p>
              )} */}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReachUs;
