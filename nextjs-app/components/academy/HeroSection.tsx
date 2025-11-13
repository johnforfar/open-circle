 "use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function HeroSection() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative bg-white overflow-visible"
      onMouseMove={handleMouseMove}
    >
      <div
        className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden bg-black px-6 pb-16"
        style={{ minHeight: "600px" }}
      >
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-150"
            src="https://www.youtube.com/embed/BOG_CbEDhag?autoplay=1&mute=1&loop=1&playlist=BOG_CbEDhag&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="OpenX Academy"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              width: "500px",
              height: "500px",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 20%, rgba(0,0,0,0.5) 50%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>

        <div className="relative z-10 py-32 md:py-48 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]">
                Learn blockchain & AI.{" "}
                <span className="text-gray-300">Earn while you grow.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Master Web3 and AI skills with hands-on courses. Get NFT
                certificates, OPENX tokens, and direct access to paid projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => router.push(isConnected ? "/courses" : "/courses/getting-started-web3/learn")}
                    className="group px-10 py-7 rounded-xl bg-white text-black font-bold text-lg shadow-2xl transition-all hover:bg-gray-100"
                  >
                    {isConnected ? "Explore Courses" : "Start Learning Free"}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

