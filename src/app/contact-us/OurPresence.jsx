import React from 'react';

export default function OurPresence() {
    return (
        <>
            <section className='container mx-auto px-4 py-8 bg-white rounded-2xl shadow-xl my-10'>
                <h2 className='text-center text-5xl md:text-7xl font-extrabold text-[#3FB4BA] mb-6'>
                    Our Presence
                </h2>
                <p className='text-center text-gray-600 text-md mx-auto  mb-10'>
                    Lorem ipsum dolor sit amet consectetur. Ipsum turpis sem tristique ut amet mauris ut.
                    Nulla proin nisi consectetur amet semper lacus. Sit vestibulum sit nisi justo augue nam tristique. Nunc sapien ac.
                </p>
            </section>
            <section className='container mx-auto px-4 py-8 my-10'>

                <div className='flex flex-wrap justify-between gap-4 text-[18px] md:text-[28px]'>
                    <button className='bg-white text-[#3FB4BA] font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300'>
                        Kochi (HQ)
                    </button>
                    <button className='bg-white text-[#3FB4BA] font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300'>
                        Calicut
                    </button>
                    <button className='bg-white text-[#3FB4BA] font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300'>
                        Trivandrum
                    </button>
                    <button className='bg-white text-[#3FB4BA] font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300'>
                        Bengaluru
                    </button>
                    <button className='bg-white text-[#3FB4BA] font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300'>
                        Mumbai
                    </button>
                </div>
            </section>

        </>

    );
}