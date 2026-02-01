"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { MagicCard } from "@/components/ui/magic-card";

export default function Footer() {
  const { theme } = useTheme();

  // Define colors based on theme
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const linkHoverColor =
    theme === "dark" ? "hover:text-indigo-400" : "hover:text-indigo-600";

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <MagicCard
          gradientColor={theme === "dark" ? "#1f2933" : "#E5E7EB55"}
          className="p-8 rounded-2xl border border-white/10 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="flex flex-col items-start space-y-2">
              <h2 className={`${linkHoverColor} transition text-3xl font-bold`}>
                Niladri Pradhan
              </h2>
              <p className={`${subTextColor} text-sm`}>
                Frontend Developer & UI Enthusiast
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-2">
              <h3 className={`${linkHoverColor} transition`}>Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#home" className={`${linkHoverColor} transition`}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className={`${linkHoverColor} transition`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className={`${linkHoverColor} transition`}>
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={`${linkHoverColor} transition`}
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="flex flex-col items-start space-y-2">
              <h3 className={`${linkHoverColor} transition`}>Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/NiladriPradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${subTextColor} hover:text-white transition`}
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/niladri-pradhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${subTextColor} hover:text-blue-500 transition`}
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/yourtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${subTextColor} hover:text-sky-400 transition`}
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`${subTextColor} mt-8 text-center text-sm`}>
            &copy; {new Date().getFullYear()} Niladri Pradhan. All rights
            reserved.
          </div>
        </MagicCard>
      </div>
    </footer>
  );
}
