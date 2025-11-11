"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "48+", label: "Free Courses" },
  { value: "150+", label: "Jobs Available" },
  { value: "$2M+", label: "Rewards Distributed" },
  { value: "12,500+", label: "Active Students" },
] as const;

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
              <div className="text-sm font-normal text-gray-600 md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

