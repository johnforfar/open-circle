"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { WalletConnectButton } from "@/components/wallet-connect-button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Contributors", href: "/contributors" },
    { label: "Community", href: "/community" },
    { label: "Forums", href: "/forums" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link 
              href="https://openxai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-opacity hover:opacity-80"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/cc481c4ea_OpenXAI-111.png"
                alt="OpenXAI"
                className="w-8 h-8"
              />
            </Link>
            <Link href="/" className="flex items-end gap-1 text-black" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="text-[20px] font-semibold leading-none">
                OpenxAI
              </span>
              <span className="text-[14px] font-light leading-none">
                Academy
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center justify-center gap-8 font-medium text-sm text-gray-700">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Wallet Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Wallet Button - Prominent, always visible */}
            <div className="relative">
              <WalletConnectButton />
            </div>
            
            {/* Mobile menu button */}
            <button
              className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                } bg-gray-900`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                } bg-gray-900`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                } bg-gray-900`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden z-50 ${
          isMobileMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300`}
      >
        <div className="px-4 py-4">
          <ul className="space-y-4 text-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 font-medium transition-colors duration-200 text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
