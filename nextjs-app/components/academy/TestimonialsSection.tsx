"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I went from zero blockchain knowledge to building my first dApp in 6 weeks. Now I'm working on paid projects and earning real income.",
    name: "Sarah Chen",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5
  },
  {
    quote: "The NFT rewards actually mean something here. They opened doors to DAO governance and mentorship opportunities I never imagined.",
    name: "Marcus Rodriguez",
    role: "Smart Contract Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5
  },
  {
    quote: "This isn't just education—it's a career launchpad. I'm now an Expert advisor helping shape courses while earning from the ecosystem.",
    name: "Aisha Patel",
    role: "Web3 Consultant",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    rating: 5
  }
];

const partners = [
  "Polygon", "Base", "BNB Chain", "Fetch.ai", "Openmesh", "OpenxAI"
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by students worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands who are building their Web3 careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-xl">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8 font-semibold">
            Trusted By Leading Ecosystems
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold text-gray-400 hover:text-gray-900 transition-colors"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


