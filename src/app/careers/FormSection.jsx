"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";


function FormSection() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    file: null,
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.position) newErrors.position = "Position is required";

    // File is optional now
    // if (!formData.file) newErrors.file = "Please upload a file";

    // Terms checkbox is optional now
    // if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true); // start loading

  const form = new FormData();
  form.append("firstName", formData.firstName);
  form.append("lastName", formData.lastName);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("position", formData.position);
  form.append("termsAccepted", formData.termsAccepted);
  if (formData.file) form.append("file", formData.file);

  try {
    const res = await fetch("/api/form-send", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    console.log("result", result);

    if (result.success) {
      Swal.fire({
        title: "✅ Success!",
        text: "Form submitted successfully.",
        icon: "success",
        confirmButtonColor: "#3FB4BA",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        file: null,
        termsAccepted: false,
      });
      setErrors({});
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
    setLoading(false); // stop loading
  }
};




  return (
    <section className="py-8 md:py-14">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-[90%] md:w-[80%] rounded-2xl bg-white/60 mx-auto font-mont relative z-10 p-[15px] md:p-[40px] flex flex-col"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-x-12">
          {/* First Name */}
          <div>
            <p className="font-mont text-[14px] font-semibold mb-[10px]">
              First Name
            </p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-[19px] bg-white w-full rounded-xl border border-gray-300"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <p className="font-mont text-[14px] font-semibold mb-[10px]">
              Last Name
            </p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-[19px] bg-white w-full rounded-xl border border-gray-300"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <p className="font-mont text-[14px] font-semibold mb-[10px]">
              Email
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-[19px] bg-white w-full rounded-xl border border-gray-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <p className="font-mont text-[14px] font-semibold mb-[10px]">
              Phone
            </p>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-[19px] bg-white w-full rounded-xl border border-gray-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Position */}
          <div>
            <p className="font-mont text-[14px] font-semibold mb-[10px]">
              Position
            </p>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="p-[19px] bg-white w-full rounded-xl border border-gray-300"
            >
              <option value="">Select a role</option>
              <option value="ui/ux">UI/UX Designer</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
            </select>
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">{errors.position}</p>
            )}
          </div>

          {/* File Upload (Optional) */}
          <div>
            <p className="font-mont text-[14px] font-semibold mb-[10px]">
              Upload Resume
            </p>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="p-[19px] bg-white w-full rounded-xl border border-gray-300"
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">{errors.file}</p>
            )}
          </div>

          {/* Terms Checkbox (Optional) */}
          <div className="flex items-center gap-4 col-span-1 lg:col-span-2 mt-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <p className="text-[14px]">
              I agree with Terms of Use and Privacy Policy
            </p>
          </div>
          {/* {errors.termsAccepted && (
            <div className="col-span-1 lg:col-span-2 text-red-500 text-sm mt-1">
              {errors.termsAccepted}
            </div>
          )} */}

          {/* Submit Button */}
          <div className="flex justify-center lg:justify-end items-center w-full col-span-1 lg:col-span-2 mt-6">
            {/* <button
              type="submit"
              className="bg-[#3FB4BA] text-white rounded-full px-[20px] py-[10px] md:px-[40px] md:py-[14px]"
            >
              Submit
            </button> */}
            <button
  type="submit"
  disabled={loading}
  className={`flex items-center justify-center bg-[#3FB4BA] text-white rounded-full px-[20px] py-[10px] md:px-[40px] md:py-[14px] transition-all ${
    loading ? "opacity-70 cursor-not-allowed" : ""
  }`}
>
  {loading ? (
    <svg
      className="animate-spin h-5 w-5 text-white"
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
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  ) : (
    "Submit"
  )}
</button>

          </div>
        </div>
      </form>
    </section>
  );
}

export default FormSection;
