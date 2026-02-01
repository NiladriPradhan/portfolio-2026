"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "./ui/magic-card";

export default function AboutSection() {
  const theme = "dark";
  return (
    <section id="about" className="py-24 text-white">
      <div className=" mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: About Me */}
        <div className="relative  h-fit rounded-2xl bg-purple-500">
          {/* <Card className="bg-zinc-900/80 border border-white/10 rounded-2xl"> */}
          <Card className="w-full max-w-full border-none p-0 shadow-none">
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-4"
            >
              <CardHeader>
                <CardTitle className="text-3xl">About Me</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I’m Niladri, a frontend developer focused on crafting modern,
                  performant, and accessible web interfaces using React and
                  Next.js.
                </p>

                <p className="text-gray-400">
                  I love combining clean UI, smooth animations, and scalable
                  architecture to deliver delightful user experiences.
                </p>
              </CardContent>
            </MagicCard>
          </Card>
        </div>

        {/* RIGHT: Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard
            title="What I Do"
            text="Modern UI & Frontend Architecture"
          />
          <StatCard
            title="Performance"
            text="Fast, accessible, optimized apps"
          />
          <StatCard
            title="Specialization"
            text="React, Next.js, Tailwind CSS"
          />
          <StatCard title="Approach" text="Clean code & UX-first mindset" />
        </div>
      </div>
      <div className="relative  h-fit rounded-2xl max-w-7xl mx-auto mt-4">
        {/* <Card className="bg-zinc-900/80 border border-white/10 rounded-2xl"> */}
        <Card className="w-full max-w-full border-none p-0 shadow-none">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-4"
          >
            <CardHeader>
              <CardTitle className="text-3xl">My Journey</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                My journey into frontend development started with curiosity
                about how interfaces work behind the scenes. Over time, that
                curiosity turned into a passion for building polished,
                interactive web experiences.
              </p>

              <p className="text-gray-400">
                I continuously learn new technologies, experiment with
                animations, and focus on writing maintainable code that scales
                well with growing applications.
              </p>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </section>
  );
}

function StatCard({ title, text }: { title: string; text: string }) {
  const theme = "dark";
  return (
    // <div className="relative group rounded-2xl p-0 bg-green-400">
    <Card
      className="
          p-0
          h-fit
          border border-white/10
          rounded-xl
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
        "
    >
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-4"
      >
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">{text}</p>
        </CardContent>
      </MagicCard>
    </Card>

    // </div>
  );
}
