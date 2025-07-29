"use client";

import { motion } from "framer-motion";
import React from "react";

const features = [
  {
    id: 1,
    title: "Mobile-first Design",
    desc: "Responsive design optimized for seamless shopping on mobile",
    icon: "📱",
  },
  {
    id: 2,
    title: "Payment Gateway Integration",
    desc: "Stripe, Razorpay, PayPal, Cashfree & more",
    icon: "💳",
  },
  {
    id: 3,
    title: "SEO-Optimized Code",
    desc: "Clean, indexable HTML with schema markup & speed tuning",
    icon: "🔍",
  },
];

const FeaturesHighlight = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FCFF] to-white py-12 containers">
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-teal-600 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Features Highlight
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-teal-600 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesHighlight;
