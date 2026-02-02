"use client";
import { useState } from "react";
import ModalForm from "./ModalForm";
import { BASE_URL } from "@/app/Server";

export default function Modal({ isOpen, onClose, data }) {
  // console.log("Modal isOpen:", isOpen);
  if (!isOpen) return null;

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    // Name validation (no numbers)
    if (!name.trim()) {
      newErrors.name = 'Name is required'
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = 'Name cannot contain numbers'
    }

    // Phone validation (10 digits only)
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // ✅ Submit logic here
      console.log({ name, phone, message })
    }
  }


  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 "
      onClick={onClose}
    >
      <div
        className="w-[80%] h-fit md:h-[500px] lg:h-[600px] xl:h-[750px] md:w-[80%] xl:w-[60%]
               bg-white flex flex-col md:flex-row rounded-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* LEFT – Video (50%) */}
        <div className="w-full md:w-1/2 h-[200px] md:h-full overflow-hidden hidden md:flex">
          <video
            src={BASE_URL + data?.modalVideo.url}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster={BASE_URL + data?.poster.url}
          />
        </div>

        {/* RIGHT – Form (50%) */}
        <div className="w-full h-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="md:p-6 p-4 w-full space-y-2 md:scroll-py-3"
          >
            {/* Form Heading */}
            <div className="mb-4">
              <h2 className="xl:text-[30px] md:text-[20px] text-[14px] font-bold text-center font-mont">
                Contact <span className="text-teal-600">Us</span> 
              </h2>
              <p className="text-[11px] md:text-[12px] lg:text-[14px] font-poppins text-center mt-1">
                Submit your queries here. we will listen.
              </p>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-[12px] md:text-[14px] font-mont text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value.replace(/[^A-Za-z\s]/g, ''))
                }
                className="w-full border rounded-md p-2 font-mont text-[12px] md:text-[14px]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>


            <div>
              <label
                htmlFor="phone"
                className="block mb-1 text-[12px] md:text-[14px] font-mont text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))
                }
                className="w-full border rounded-md p-2 font-mont text-[12px] md:text-[14px]"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>


            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-[12px] md:text-[14px] font-mont text-gray-700"
              >
                Message <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-md p-2 font-mont text-[12px] md:text-[14px]"
              />
            </div>


            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 font-mont text-[12px] md:text-[14px]"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>

  );
}
