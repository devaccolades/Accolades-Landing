"use client";
import { useState } from "react";

export default function PythonFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        q:"What is a full-stack web developer?",
        a:"A full-stack developer is a versatile web developer skilled in both front-end and back-end technologies. They build complete, functional websites and applications, handling everything from the user interface to the server logic and database. In practice, our full-stack developers create the web page designs (using tools like React.js/Next.js) and write the server code (using Python/Django), along with setting up the database. This end-to-end capability of our python developers in Kochi ensures a cohesive, integrated solution for your project."
    },
    {
        q:"Why use Python and Django for web development?",
        a:"Python is a high-level language that lets developers work quickly and integrate systems more effectively. Django comes with built-in features for authentication, database access, and security, so you don’t have to build these from scratch. It is known for its speed and reliability; even very high-traffic sites use Django because it scales well. Using Python and Django means faster development, strong security, and an application that can handle growth."
    },
    {
        q:"What are React.js and Next.js used for?",
        a:"React.js is a JavaScript library for building user interfaces. It lets us create interactive, component-based pages. Next.js is a React framework created by Vercel that adds server-side rendering, routing, and other optimizations. With Next.js, pages can be pre-rendered on the server, making them load faster and rank better in search engines. Together, React and Next.js allow us to build modern, dynamic front ends that are fast and responsive on any device."
    },
    {
        q:"What databases do you work with?",
        a:"We work with several databases depending on project needs. MongoDB is a document-oriented database that stores data in flexible JSON-like documents, making it great for projects where the data schema might evolve. PostgreSQL is a powerful open-source relational database, ideal for structured data and complex queries. SQLite is a lightweight, file-based SQL database, useful for small to medium projects or mobile apps where simplicity is key. Each of these databases is well-supported and reliable. We choose the one that fits your data needs for performance and scalability."
    },
    {
        q:"Why hire Python developers in Kochi from your company?",
        a:"Hiring our Python developers in Kochi means you get experienced local experts. Kochi is a growing tech hub in Kerala, and we have a strong team here. Local developers provide easy communication and collaboration, and they understand the regional market. Our Python developers in Kochi know the latest frameworks (Django, Flask, etc.) and front-end tools (React, Next.js). We can quickly translate your business requirements into a working web application. Working with a Kochi-based agency also means you benefit from competitive pricing and support in your time zone. In short, our local Python talent delivers high-quality, full-stack web solutions tailored to your needs."
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
