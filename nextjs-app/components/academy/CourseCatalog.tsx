"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Star, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Getting Started with Web3",
    instructor: "OpenX Academy",
    duration: "20 min",
    students: "15.2K",
    rating: 5.0,
    reviews: 3200,
    price: "Free",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    level: "Beginner",
    category: "Blockchain",
    href: "/courses/getting-started-web3"
  },
  {
    title: "Blockchain Fundamentals",
    instructor: "Dr. Sarah Chen",
    duration: "45 min",
    students: "12.5K",
    rating: 4.9,
    reviews: 2450,
    price: "Free",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    level: "Beginner",
    category: "Blockchain"
  },
  {
    title: "Smart Contract Development",
    instructor: "Marcus Rodriguez",
    duration: "2 hours",
    students: "8.2K",
    rating: 4.8,
    reviews: 1890,
    price: "50 OPENX",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    level: "Intermediate",
    category: "Development"
  },
  {
    title: "Decentralized AI Basics",
    instructor: "Dr. Aisha Patel",
    duration: "1.5 hours",
    students: "10.1K",
    rating: 4.9,
    reviews: 3120,
    price: "Free",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    level: "Beginner",
    category: "AI"
  },
  {
    title: "Web3 Architecture",
    instructor: "James Liu",
    duration: "3 hours",
    students: "6.4K",
    rating: 4.7,
    reviews: 1560,
    price: "100 OPENX",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    level: "Advanced",
    category: "Architecture"
  },
  {
    title: "DeFi Protocols Deep Dive",
    instructor: "Elena Rodriguez",
    duration: "2.5 hours",
    students: "5.8K",
    rating: 4.9,
    reviews: 2240,
    price: "150 OPENX",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80",
    level: "Advanced",
    category: "DeFi"
  },
  {
    title: "DAO Governance",
    instructor: "Michael Chen",
    duration: "1 hour",
    students: "9.3K",
    rating: 4.8,
    reviews: 1780,
    price: "Free",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    level: "Intermediate",
    category: "Governance"
  },
  {
    title: "Building with Openmesh",
    instructor: "Sarah Kim",
    duration: "4 hours",
    students: "4.2K",
    rating: 5.0,
    reviews: 890,
    price: "200 OPENX",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    level: "Expert",
    category: "Development"
  },
  {
    title: "Advanced Solidity",
    instructor: "David Park",
    duration: "5 hours",
    students: "3.9K",
    rating: 4.9,
    reviews: 1450,
    price: "250 OPENX",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80",
    level: "Expert",
    category: "Development"
  }
];

export default function CourseCatalog() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              A broad selection of courses
            </h2>
            <p className="text-lg text-gray-600">
              Choose from over 48 courses with new additions published every month
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["All", "Blockchain", "AI", "DeFi", "Development"].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 whitespace-nowrap border-b-2 border-transparent hover:border-gray-900 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <Link href={course.href || "/courses"}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-lg">
                  {/* Course Image */}
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="rounded-full bg-white font-semibold text-gray-900 hover:bg-white">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-4">
                    <h3 className="mb-1 line-clamp-2 font-bold text-gray-900 transition-colors group-hover:text-purple-700">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(course.rating)
                                ? "fill-orange-400 text-orange-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({course.reviews.toLocaleString()})</span>
                    </div>

                    {/* Meta */}
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {course.price}
                      </span>
                      {course.price === "Free" && (
                        <Badge
                          variant="outline"
                          className="rounded-full border-green-600 font-semibold text-green-600"
                        >
                          Free
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <Link href="/courses">
            <Button className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
              View all courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


