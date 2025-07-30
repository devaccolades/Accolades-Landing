import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function LocationDetailCard({ locationName, address, email, phoneNumbers, mapEmbedUrl }) {
    return (
        <section className='containers mx-auto  py-10'>
            <div className='px-4 py-8 bg-white rounded-2xl shadow-xl'>

            <div className='flex flex-col md:flex-row gap-8'>
                {/* Left Side: Text Details */}
                <div className='flex-1 p-4'>
                    <h3 className='text-4xl font-extrabold text-[#3FB4BA] mb-6'>
                        {locationName}
                    </h3>

                    {/* Address */}
                    <div className='flex items-start mb-4'>
                        <FaMapMarkerAlt className='text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0' />
                        <div>
                            <p className='text-gray-700 font-semibold text-lg mb-1'>Address</p>
                            <p className='text-gray-600 text-base leading-relaxed'>
                                {address}
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex items-start mb-4'>
                        <FaEnvelope className='text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0' />
                        <div>
                            <p className='text-gray-700 font-semibold text-lg mb-1'>Email us at</p>
                            <a href={`mailto:${email}`} className='text-gray-600 text-base hover:text-teal-500 transition-colors duration-200'>
                                {email}
                            </a>
                        </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className='flex items-start'>
                        <FaPhone className='text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0' />
                        <div>
                            <p className='text-gray-700 font-semibold text-lg mb-1'>Call us on</p>
                            <p className='text-gray-600 text-base'>
                                {phoneNumbers.map((phone, index) => (
                                    <React.Fragment key={index}>
                                        <a href={`tel:${phone.replace(/\s/g, '')}`} className='hover:text-teal-500 transition-colors duration-200'>
                                            {phone}
                                        </a>
                                        {index < phoneNumbers.length - 1 && ' '}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Map */}
                <div className='flex-1 p-4 flex justify-center items-center'>
                    <div className='w-full h-80 md:h-full bg-gray-200 rounded-xl overflow-hidden shadow-lg'>
                        {mapEmbedUrl ? (
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }} // Inline style for no border
                                allowFullScreen="" // Allows fullscreen mode
                                loading="lazy" // Lazy load the iframe
                                referrerPolicy="no-referrer-when-downgrade" // Recommended for security
                                title={`Map of ${locationName}`} // Good for accessibility
                            ></iframe>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-500">
                                Map not available for this location.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </div>

        </section>
    );
}