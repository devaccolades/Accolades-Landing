
"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, User, Building2 } from "lucide-react";
import Swal from "sweetalert2";

const NowAt = () => {
  const [selected, setSelected] = useState("Kochi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = [
    {
      place: "Kochi",
      address: "Accolades Integrated Pvt Ltd Rahmath Building, 46/2056 - A, AKG Vayanasala Road, Chakkaraparambu, Vennala, Kochi, Ernakulam, Kerala 682028",
      mobile: "+91 90486 89977",
      email: "mail@accoladesintegrated.com",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.1253727708323!2d76.3162912695514!3d9.988720320158786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMTkuNCJOIDc2wrAxOScwMS4wIkU!5e1!3m2!1sen!2sin!4v1755942872136!5m2!1sen!2sin",
    },
    {
      place: "Trivandrum",
      address: "Accolades Integrated Pvt Ltd 3B, Unity Towers | Chempakassery Nagar Ln | Chempakassery Nagar | opp. M. G.College | Kesavadasapuram | Thiruvananthapuram | Kerala – 695004",
      mobile: "+91 90480 33288",
      email: "tvm@accoladesmedia.co.in",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.125120799135!2d76.93957990000001!3d8.5318252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9e8fdcff475%3A0xb4441a3938936e66!2sACCOLADES%20Integrated%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1756101659278!5m2!1sen!2sin",
    },
    {
      place: "Mumbai",
      address: "Accolades Integrated Pvt Ltd – 301 | 3rd floor | Corporate Corner | Sundar Nagar | Malad West | Mumbai – 400064",
      mobile: "+91 90480 33288",
      email: "mumbai@accoladesmedia.co.in",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.839973978926!2d72.84070850000001!3d19.1702088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90c6b2f6b7d%3A0x9c8b5e4a5f5c4c6a!2sAccolades%20Integrated%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1756101785126!5m2!1sen!2sin",
    },
    {
      place: "Calicut",
      address: "Accolades Integrated Pvt Ltd Akkai Tower | 59/3785, 2nd Floor | Tali Cross Road | Calicut – 673002",
      mobile: "+91 9947847237",
      email: "mail@accoladesintegrated.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.260750551965!2d75.78761117314679!3d11.247591980312464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65932cf91c009%3A0xf48916f4d304f205!2sACCOLADES%20Integrated%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1756101480060!5m2!1sen!2sin",
    },
    {
      place: "Bengaluru",
      address: "Accolades Integrated Pvt Ltd | 5th Floor| ITPL Main Road | Garudachan Palaya | Mahadevapura | Bengaluru – 560 048",
      mobile: "+91 90726 19922",
      email: "mail@accoladesintegrated.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.0760816731475!2d77.69714717924873!3d12.995034665068514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110acc03a14f%3A0x90ddf5a37aa1c34a!2s048%2C%20560%2C%20ITPL%20Main%20Rd%2C%20Mahadevapura%20Layout%2C%20RHB%20Colony%2C%20Mahadevapura%2C%20Bengaluru%2C%20Karnataka%20560048!5e1!3m2!1sen!2sin!4v1755942211445!5m2!1sen!2sin",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all fields before submitting.',
        confirmButtonColor: '#0d9488',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/g-ads-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          selectedLocation: selected // Include selected location for context
        }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent 🎉',
          text: "We'll get back to you soon!",
          confirmButtonColor: '#0d9488',
        });
        setFormData({ name: "", email: "", phone: "" });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Something went wrong!',
          confirmButtonColor: '#0d9488',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send message',
        confirmButtonColor: '#0d9488',
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLocationSelect = (place) => {
    setSelected(place);
  };

  const selectedLocation = location.find(item => item.place === selected);

  return (
    <section className="font-poppins min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Our Locations
          </div> */}
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            We are <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Now At</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg  mx-auto">
            Connect with us across India. Choose your nearest location and get in touch today.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {location.map((item) => (
            <button
              key={item.place}
              onClick={() => handleLocationSelect(item.place)}
              className={`px-6 py-3 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${selected === item.place
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25"
                  : "bg-white text-teal-700 border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                }`}
            >
              {item.place}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Location Info & Map */}
          <div className="space-y-8">
            {/* Location Details Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-4 md:p-6 border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-1 md:p-3 rounded-2xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.place}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedLocation.address}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                 <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 border border-cyan-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-cyan-100 p-2 rounded-xl">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <p className="text-sm text-gray-500">Call us</p>
                  </div>
                  <a href={`tel:${selectedLocation.mobile}`} className="text-cyan-700 font-semibold hover:text-cyan-800 transition-colors text-sm block">
                     {selectedLocation.mobile}
                  </a>
                </div>



                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 border border-cyan-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-cyan-100 p-2 rounded-xl">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <p className="text-sm text-gray-500">Email us</p>
                  </div>
                  <a href={`mailto:${selectedLocation.email}`} className="text-cyan-700 font-semibold hover:text-cyan-800 transition-colors text-sm block">
                    {selectedLocation.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-2 md:p-6 border border-gray-100">
              <iframe
                src={selectedLocation.map}
                className="w-full h-80 rounded-2xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-4 md:p-8 border border-gray-100 sticky top-8">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600 text-sm md:text-lg">Let's start a conversation about your next project</p>
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 text-sm border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 text-sm border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4  text-sm border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-600 to-cyan-600 hover:shadow-lg hover:shadow-teal-500/25"
                  }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowAt;