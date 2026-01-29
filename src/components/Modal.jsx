
"use client"
import { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const validate = (name, value) => {
        let error = "";

        if (name === "name") {
            if (!value.trim()) {
                error = "Name is required";
            } else if (/\d/.test(value)) {
                error = "Name cannot contain numbers";
            }
        }

        if (name === "email") {
            if (!value.trim()) {
                error = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = "Invalid email";
            }
        }

        if (name === "phone") {
            if (!value.trim()) {
                error = "Phone number is required";
            } else if (!/^\d{10}$/.test(value)) {
                error = "Enter valid 10 digit number";
            }
        }

        setErrors((prev) => {
            const updated = { ...prev };
            if (error) updated[name] = error;
            else delete updated[name];
            return updated;
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Run validation
        if (!validateAll()) return;

        setIsLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: form.message,
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Something went wrong");
            }

            // ✅ success state
            setIsSubmitted(true);

            // optional: clear form
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setErrors({});
        } catch (err) {
            console.error("Submit error:", err);
            alert("Failed to submit. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    const validateAll = () => {
        const fields = ["name", "email", "phone"];
        let hasError = false;

        fields.forEach((field) => {
            const value = form[field];
            validate(field, value);
            if (!value || value.trim() === "") {
                hasError = true;
            }
        });

        return !hasError;
    };


    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-white to-gray-50 w-[90%] max-w-md max-h-[85vh] rounded-3xl shadow-2xl relative overflow-hidden animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0C7379]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0C7379]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:rotate-90 cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                {!isSubmitted && (
                    <div className="relative px-6 pt-6 pb-3">
                        <h3 className="text-xl font-bold text-[#0C7379] mb-1">Start a Project</h3>
                        <p className="text-gray-600 text-xs">Fill in your details and we'll get back to you shortly</p>
                    </div>
                )}
                {!isSubmitted ? (

                    <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3 relative">
                        {/* Name */}
                        <div className="group">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({ ...form, name: value });
                                        validate("name", value);
                                    }}
                                    type="text"
                                    placeholder="John Doe"
                                    className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-lg px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7379]/20 focus:border-[#0C7379] transition-all duration-200 bg-white`}
                                    value={form.name}

                                />
                                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1">
                                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="group">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className={`w-full border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-lg px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7379]/20 focus:border-[#0C7379] transition-all duration-200 bg-white`}
                                    value={form.email}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({ ...form, email: value });
                                        validate("email", value);
                                    }}

                                />
                                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1">
                                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="group">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Phone Number
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="9876543210"
                                    className={`w-full border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-lg px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7379]/20 focus:border-[#0C7379] transition-all duration-200 bg-white`}
                                    value={form.phone}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({ ...form, phone: value });
                                        validate("phone", value);
                                    }}

                                />
                                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            {errors.phone && (
                                <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1">
                                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="group">
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Message <span className="text-gray-400 text-[10px]">(optional)</span>
                            </label>
                            <textarea
                                placeholder="Tell us about your project..."
                                rows="2"
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7379]/20 focus:border-[#0C7379] transition-all duration-200 bg-white resize-none"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#0C7379] to-[#0a5f64] hover:from-[#0a5f64] hover:to-[#084d51] text-white py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#0C7379]/30 hover:shadow-xl hover:shadow-[#0C7379]/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <span>Submitting</span>
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    Submit Request
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="px-6 py-10 text-center space-y-3">
                        <div className="text-green-500 text-4xl">✓</div>
                        <h3 className="text-lg font-bold text-gray-800">
                            Request Submitted
                        </h3>
                        <p className="text-sm text-gray-600">
                            We’ll get back to you shortly.
                        </p>

                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setForm({ name: "", email: "", phone: "", message: "" });
                                setErrors({});
                                onClose();
                            }}
                            className="mt-4 cursor-pointer bg-[#0C7379] text-white px-5 py-2 rounded-lg text-sm"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Modal;