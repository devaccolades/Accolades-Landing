
import React from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const FormModal = ({ isOpen, onClose, serviceTitle }) => {
  if (!isOpen) return null;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch("/api/g-ads-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent 🎉",
          text: "We’ll get back to you soon!",
          confirmButtonColor: "#0d9488",
        });
        resetForm();
        onClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message || "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send message",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 font-poppins flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-gray-200 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent mb-6">
          Get in Touch ✨
        </h2>

        <Formik
          initialValues={{ name: "", phone: "", email: "", service: serviceTitle || "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Name */}
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="1234567890"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {serviceTitle && (
  <div>
    <Field
      name="service"
      type="text"
      placeholder="Selected service"
      value={serviceTitle || ""}
      readOnly
      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
    />
  </div>
)}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-cyan-600 hover:to-teal-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FormModal;
