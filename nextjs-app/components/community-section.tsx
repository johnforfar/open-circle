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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Connect, learn, and build Web3 together
            </p>
          </div>

          {/* Community Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {communityLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="group border border-gray-200 dark:border-gray-800 rounded-xl px-8 py-10 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {link.name}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

