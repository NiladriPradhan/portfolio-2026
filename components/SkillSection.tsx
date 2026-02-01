"use client";

import {
  Code2,
  Layout,
  Palette,
  Server,
  Database,
  GitBranch,
} from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/context/theme-context";

export default function SkillSection() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold">Skills & Expertise</h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build modern, scalable, and
            performant applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<Layout className="size-6 text-indigo-400" />}
            title="Frontend"
            skills="React, Next.js, Tailwind CSS"
            theme={theme}
          />
          <SkillCard
            icon={<Code2 className="size-6 text-purple-400" />}
            title="JavaScript"
            skills="ES6+, TypeScript"
            theme={theme}
          />
          <SkillCard
            icon={<Palette className="size-6 text-pink-400" />}
            title="UI / UX"
            skills="Responsive Design, Animations"
            theme={theme}
          />
          <SkillCard
            icon={<Server className="size-6 text-green-400" />}
            title="Backend"
            skills="Node.js, REST APIs"
            theme={theme}
          />
          <SkillCard
            icon={<Database className="size-6 text-yellow-400" />}
            title="Databases"
            skills="MongoDB, Firebase"
            theme={theme}
          />
          <SkillCard
            icon={<GitBranch className="size-6 text-blue-400" />}
            title="Tools"
            skills="Git, GitHub, Vercel"
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Card */
function SkillCard({
  icon,
  title,
  skills,
  theme,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string;
  theme: "light" | "dark";
}) {
  return (
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
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{skills}</p>
    </MagicCard>
  );
}
