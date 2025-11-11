"use client";

import React from "react";
import { Twitter, MessageCircle, Mail } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Resources: [
    { label: "Documentation", href: "https://docs.openxai.org" },
    { label: "GitHub", href: "https://github.com/openxai" },
    { label: "Blog", href: "https://medium.com/openxai" },
    { label: "Changelog", href: "https://changelog.openxai.org" },
  ],
  Company: [
    { label: "About Us", href: "https://openxai.org/about" },
    { label: "Careers", href: "https://openxai.org/careers" },
    { label: "Contact", href: "https://openxai.org/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/cc481c4ea_OpenXAI-111.png"
                alt="OpenXAI"
                className="h-8 w-8"
              />
              <div
                className="flex items-end gap-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-[18px] font-semibold text-white">
                  OpenxAI
                </span>
                <span className="text-[14px] font-light text-white">
                  Academy
                </span>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-gray-400">
              The Internet made information open &amp; borderless, Bitcoin made money
              open &amp; borderless, OpenxAI makes intelligence open &amp; borderless.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/openxai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/openxai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@openxai.org"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-semibold text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} OpenxAI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


