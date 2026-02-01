"use client";
import { motion } from "framer-motion";

import { GraduationCap, Calendar } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/context/theme-context";

export default function EducationSection() {
  const { theme } = useTheme();

  return (
    <section id="education" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold">Education</h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            My academic background and learning journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

          <EducationCard
            year="2022 – 2025"
            degree="Bachelor of Technology (B.Tech)"
            institute="Seacom Engineering College (University - MAKAUT)"
            description="Focused on computer science fundamentals, full-stack web technologies, and modern software development practices with hands-on project experience."
            theme={theme}
          />

          <EducationCard
            year="2020 – 2022"
            degree="Diploma in Computer Science & Technology"
            institute="Central Calcutta Polytechnic"
            description="Focused on core computer science concepts including programming fundamentals, data structures, databases, and web technologies, with hands-on practical learning."
            theme={theme}
          />

          <EducationCard
            year="2018 – 2020"
            degree="Higher Secondary"
            institute="Ramchandrapur Baikuntha Vidyapith"
            description="Built strong foundations in mathematics, logic, and problem-solving."
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
}

/* Timeline Card */
const cardVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  },
};
function EducationCard({
  year,
  degree,
  institute,
  description,
  theme,
}: {
  year: string;
  degree: string;
  institute: string;
  description: string;
  theme: "light" | "dark";
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative pl-12 pb-10"
    >
      {/* Dot */}
      <div className="absolute left-2.25 top-6 size-3 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#E5E7EB"}
        className="
          p-6
          rounded-xl
          bg-zinc-900/70
          border border-white/10
          transition
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
        "
      >
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <Calendar className="size-4" />
          <span>{year}</span>
        </div>

        <h3 className="text-lg font-medium">{degree}</h3>
        <p className="text-indigo-400 text-sm mt-1">{institute}</p>

        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          {description}
        </p>
      </MagicCard>
    </motion.div>
  );
}
