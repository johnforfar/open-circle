"use client";

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

import Link from "next/link";

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-900 mb-6">
              <span className="text-gray-900 dark:text-white">Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Connect, learn, and build Web3 together
            </p>
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Join Community</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

