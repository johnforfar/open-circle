import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MessageCircle, Github, Twitter, Users } from "lucide-react";

const communityLinks = [
  {
    icon: MessageCircle,
    name: "Discord",
    href: "#",
    description: "Join our Discord community",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "#",
    description: "Follow us on Twitter",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "#",
    description: "Contribute on GitHub",
  },
  {
    icon: Users,
    name: "Forum",
    href: "#",
    description: "Discuss on our forum",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl mt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-900 mb-6">
            <span className="text-gray-900 dark:text-white">Innovation Together</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
            Build the Future of Web3
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect, learn, and build together. Join the most innovative Web3 education community.
          </p>
        </div>

        {/* Community Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {communityLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group border border-gray-200 dark:border-gray-800 rounded-xl px-8 py-10 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {link.name}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Learners</div>
          </div>
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Courses Available</div>
          </div>
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-400">Community Members</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

