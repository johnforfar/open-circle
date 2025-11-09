"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { WalletConnectButton } from "@/components/wallet-connect-button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvert, setIsInvert] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setIsInvert(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Contributors", href: "/contributors" },
    { label: "Community", href: "#community" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-xl dark:bg-black/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between m-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              <span className={isInvert ? "text-black dark:text-white" : "text-white"}>
                Open Circle
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2">
            <ul
              className={`flex items-center justify-center gap-8 font-normal text-[13px] ${
                isInvert ? "text-black dark:text-white" : "text-white"
              }`}
            >
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isInvert
                        ? "hover:text-black/60 dark:hover:text-white/60"
                        : "hover:text-white/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-4">
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
              } ${isInvert ? "bg-black dark:bg-white" : "bg-white"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              } ${isInvert ? "bg-black dark:bg-white" : "bg-white"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              } ${isInvert ? "bg-black dark:bg-white" : "bg-white"}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-xl dark:bg-black/10 overflow-hidden z-50 ${
          isMobileMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300`}
      >
        <div className="px-4 py-4">
          <ul className="space-y-4 text-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 font-medium transition-colors duration-200 text-black dark:text-white hover:text-black/70 dark:hover:text-white/70"
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

