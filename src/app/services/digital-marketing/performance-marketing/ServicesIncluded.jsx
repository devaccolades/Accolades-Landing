"use client";

import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    id: 1,
    text: "📈 Campaign Strategy & Funnel Planning",
  },
  {
    id: 2,
    text: "✍️ Ad Copywriting + Creative Design",
  },
  {
    id: 3,
    text: "🖋 A/B Testing & Conversion Optimization",
  },
  {
    id: 4,
    text: "📊 Analytics Setup & Weekly Reporting",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesIncluded = () => {
  return (
    <section className="w-full py-6  containers">
      <div>
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-teal-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services Included
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow p-4 text-center font-semibold text-teal-600 hover:shadow-lg hover:scale-105 transition-transform"
              variants={itemVariants}
            >
              {service.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesIncluded;
