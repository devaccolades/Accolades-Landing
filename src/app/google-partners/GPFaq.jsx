"use client";
import { useState } from "react";

export default function GooglePartnerFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        q:"What is the Google Partners program?",
        a:"The Google Partners program is Google’s partner marketing program for agencies that manage Google Ads campaigns on behalf of clients. Agencies in this program have certified professionals who meet Google’s ad spend and performance criteria. Partners get special benefits like training, support, and the Google Partner badge, which signifies their expertise."
    },
    {
        q:"How do businesses benefit from working with a Google Partner?",
        a:"Working with a Google Partner agency means your campaigns are managed by trained specialists who use proven strategies. Google Partners continuously optimize their own campaigns, so they “have blazed the trail” and can apply those insights to your ads. Partners also have direct access to Google support and early access to new ad features. This leads to better ad performance and faster problem-solving than many non-partner agencies."
    },
    {
        q:"What exclusive advantages do Google Partners have?",
        a:"Google Partners receive exclusive resources: advanced product training, market research, and custom recommendations from Google. For clients, this means your campaigns can leverage the latest Google Ads tools and data. Partners can also earn promotional ad credits and participate in rewards programs. In short, a Partner agency has more “insider” tools and knowledge to help your business grow."
    },
    {
        q:"Why should Kochi businesses choose a Google Partner?",
        a:"Choosing a Google Partner in Kochi, like Accolades Integrated, combines local market knowledge with global Google expertise. Local businesses get a team that understands the Kerala audience and also uses top-tier digital marketing practices. Our Google Partner status signals that we meet Google’s high standards, giving you confidence in our skills. In practice, this means better-optimized ads, transparent reporting, and a partner committed to your growth."
    },
    {
        q:"What is required for an agency to become a Google Partner?",
        a:"An agency must join the Google Partners program and meet three categories of requirements: certification (employees must pass Google Ads exams), spend (manage a minimum ad budget across clients), and performance (deliver strong ad results). Google checks these metrics regularly. Accolades Integrated has fulfilled these requirements, which is why we are recognized in the Google Partners directory.By choosing Accolades Integrated as your Google Partners Kochi agency, you ensure your brand has a certified, experienced team working on your Google Ads. We leverage the exclusive benefits of the Google Partners program to drive success for your business, from training and insights to dedicated support and innovation"
    },
  
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-12">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-black mb-10">Frequently Asked Questions – Python Developers in Kochi </h2>

      <div className="space-y-0 border-t border-gray-300">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-300">
            
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center text-black py-3 text-[14px] md:text-[16px] font-semibold tracking-tight"
            >
              <span>{item.q}</span>
              <span className="text-3xl pr-4">{openIndex === i ? "−" : "+"}</span>
            </button>

            {/* Dropdown Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-black font-semibold font-mont text-[13px] md:text-[14px] leading-relaxed px-1">{item.a}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
