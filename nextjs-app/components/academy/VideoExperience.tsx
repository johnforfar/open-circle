"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoExperience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See how it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how students are transforming their careers through Openx Academy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative aspect-video cursor-pointer overflow-hidden rounded-3xl border border-gray-200 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Video preview"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-900/40 transition-colors group-hover:bg-gray-900/50" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="w-20 h-20 rounded-full bg-white hover:bg-gray-100 text-gray-900 shadow-2xl"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </motion.div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-gray-900">2:34</span>
          </div>
        </motion.div>

        {/* Features below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { stat: "12,500+", label: "Active Students" },
            { stat: "8,200+", label: "NFTs Earned" },
            { stat: "24h", label: "Avg. First Reward" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
              <div className="text-gray-600 font-medium">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

