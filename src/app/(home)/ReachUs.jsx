"use client";

const ReachUs = () => {
  return (
    // <main className="containers ">
    //   <section className="bg-[#EDF5F8] rounded-[50px] lg:rounded-[70px] px-6 md:px-12 py-6 md:py-12 ">
    //     <div className=" flex flex-col md:flex-row justify-between items-start gap-5 lg:gap-10 ">
    //       <div className="w-[35%] space-y-3">
    //         <h2 className="text-[28px] md:text-5xl font-bold text-gray-800">
    //           Reach Us
    //         </h2>
    //         <p className="text-gray-600 text-lg mt-4">
    //           Accolades is here to fulfil all your needs and leading you towards
    //           the light of knowledge.
    //         </p>
    //       </div>
    //       <div className="w-[35%] space-y-6 text-gray-700 text-base">
    //         <div>
    //           <h4 className="text-[#17AABF] font-semibold mb-1">
    //             Office Address
    //           </h4>
    //           <p>
    //             No.32/3071 - B | First Floor Anjiparambil Building, Ponnurunni
    //             NH Bypass, Vyttila, Kochi, Kerala 682019.
    //           </p>
    //         </div>

    //         <div>
    //           <h4 className="text-[#17AABF] font-semibold mb-1">Call Us</h4>
    //           <p>+91 7072619922</p>
    //         </div>

    //         <div>
    //           <h4 className="text-[#17AABF] font-semibold mb-1">Mail Us</h4>
    //           <p>mail@accoladesmedia.co.in</p>
    //         </div>
    //       </div>

    //       <div className="w-[30%] flex-1 ">
    //         <form className="space-y-4 w-full">
    //           <input
    //             type="text"
    //             placeholder="Your Phone"
    //             className="w-full rounded-full border border-gray-300 px-3 py-3 outline-none"
    //           />
    //           <input
    //             type="email"
    //             placeholder="Your Email"
    //             className="w-full rounded-full border border-gray-300 px-3 py-3 outline-none"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Your Name"
    //             className="w-full rounded-full border border-gray-300 px-3 py-3 outline-none"
    //           />
    //           <button
    //             type="submit"
    //             className="bg-white text-[#17AABF] font-medium rounded-full px-10 py-3 mt-2 hover:bg-gray-100 transition"
    //           >
    //             Submit
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <main className="containers">
      <section className="bg-[#EDF5F8] rounded-[50px] lg:rounded-[70px] px-6 md:px-12 py-6 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 lg:gap-10">
          <div className="w-full md:w-[35%] space-y-3">
            <h2 className="text-[28px] md:text-5xl font-bold text-gray-800">
              Reach Us
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Accolades is here to fulfil all your needs and leading you towards
              the light of knowledge.
            </p>
          </div>

          <div className="w-full md:w-[35%] space-y-6 text-gray-700 text-base">
            <div>
              <h4 className="text-[#17AABF] font-semibold mb-1">
                Office Address
              </h4>
              <p>
                No.32/3071 - B | First Floor Anjiparambil Building, Ponnurunni
                NH Bypass, Vyttila, Kochi, Kerala 682019.
              </p>
            </div>

            <div>
              <h4 className="text-[#17AABF] font-semibold mb-1">Call Us</h4>
              <p>+91 7072619922</p>
            </div>

            <div>
              <h4 className="text-[#17AABF] font-semibold mb-1">Mail Us</h4>
              <p>mail@accoladesmedia.co.in</p>
            </div>
          </div>

          <div className="w-full md:w-[30%] flex-1">
            <form className="space-y-4 w-full">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full rounded-full border border-gray-300 px-3 py-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-full border border-gray-300 px-3 py-3 outline-none"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-gray-300 px-3 py-3 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#17AABF] font-medium rounded-full px-10 py-3 mt-2 hover:bg-gray-100 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReachUs;
