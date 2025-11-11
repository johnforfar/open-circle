"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

          <div className="relative m-[2px] rounded-3xl bg-white p-12 text-center md:p-16">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-100 opacity-30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl" />

            <div className="relative">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Ready to start your Web3 journey?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                Join 12,500+ students learning, earning, and building the decentralized future.
                Start with a free course today.
              </p>
              <Button
                size="lg"
                className="group rounded-xl bg-gray-900 px-8 py-6 text-lg font-semibold text-white shadow-xl hover:bg-gray-800"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


