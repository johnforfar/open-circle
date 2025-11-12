"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Free Courses", subtitle: "From basics to advanced" },
  { value: "20+", label: "Available Jobs", subtitle: "In Web3 & AI" },
  { value: "$25k+", label: "Rewards Distributed", subtitle: "To our community" },
  { value: "6k+", label: "Active Students", subtitle: "Learning daily" },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-3xl font-semibold text-gray-900 md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm font-normal text-gray-600 md:text-base mb-1">
                {stat.label}
              </div>
              {stat.subtitle && (
                <div className="text-xs text-gray-500 md:text-sm">
                  {stat.subtitle}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

