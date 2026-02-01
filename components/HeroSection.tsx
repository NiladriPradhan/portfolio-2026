"use client";

import { motion } from "framer-motion";
import IonCloud from "./IonCloud";
import { Highlighter } from "./ui/highlighter";
import { TypingAnimation } from "./ui/typing-animation";
import { ShimmerButton } from "./ui/shimmer-button";
import { useTheme } from "@/context/theme-context";
import { RetroGrid } from "./ui/retro-grid";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className="bg-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <motion.div
        id="home"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6 items-center  relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="text-center md:text-left">
          <TypingAnimation>Hello, this is Niladri 👋</TypingAnimation>

          <p
            className={`mt-6 text-lg max-w-xl relative ${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            I’m a passionate{" "}
            <Highlighter action="underline" color="#FF9800">
              Frontend Developer
            </Highlighter>{" "}
            focused on building clean, responsive, and user-friendly{" "}
            <Highlighter action="highlight" color="#5f1671">
              web applications.
            </Highlighter>
          </p>

          <p className="mt-4 text-gray-400 text-base max-w-xl">
            I specialize in modern JavaScript frameworks, translating ideas into
            intuitive interfaces with performance, accessibility, and
            scalability in mind.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="/NiladriPradhanResume.pdf"
                download="NiladriPradhanResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton>Download CV</ShimmerButton>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-xl flex items-center justify-center">
            <IonCloud />
          </div>
        </div>
      </motion.div>

      <RetroGrid />
    </div>
  );
}
