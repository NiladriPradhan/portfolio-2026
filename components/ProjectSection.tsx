"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/theme-context";

interface Project {
  title: string;
  description: string;
  tech: string;
  githubClient: string;
  githubServer?: string; // optional for fullstack
  live?: string;
}

export default function ProjectSection() {
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      title: "LMS Platform",
      description:
        "A Learning Management System with user authentication, roles, and course management.",
      tech: "React • Node • MongoDB • RTK  Query • Tailwind • shadcn",
      githubClient: "https://github.com/NiladriPradhan/lms-frontend-v2",
      githubServer: "https://github.com/NiladriPradhan/lms-api-clean",
      live: "https://lms-frontend-v2-pink.vercel.app/",
    },
    {
      title: "Job Portal",
      description:
        "A job portal for employers and job seekers with dashboards, listings, and applications.",
      tech: "React.js • Node.js • MongoDB • shadcn",
      githubClient: "https://github.com/NiladriPradhan/job-portal-frontend",
      githubServer: "https://github.com/NiladriPradhan/job-portal-backend",
      live: "https://job-portal-frontend-one-topaz.vercel.app/",
    },
    {
      title: "Restaurent UI",
      description:
        "Modern restaurant UI for browsing menus, placing orders, and managing cart checkout.",

      tech: "React • Redux • Tailwind",
      githubClient: "https://github.com/NiladriPradhan/restaurent-app",
      live: "https://restaurent-app-kappa-three.vercel.app/",
    },
    {
      title: "Ecommerce Clone",
      description:
        "A fully functional ecommerce clone with product listings, cart, and checkout functionality.",
      tech: "React.js • Tailwind • Framer Motion",
      githubClient: "https://github.com/NiladriPradhan/ecommerce-master",
      live: "https://ecommerce-master-ruby.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={`${
            theme === "dark" ? "text-gray-500" : "text-gray-900"
          } text-3xl md:text-4xl font-semibold mb-12 text-center`}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  githubClient,
  githubServer,
  live,
  theme,
}: Project & { theme: "light" | "dark" }) {
  return (
    <div className="relative group rounded-2xl">
      <Card
        className={`
    relative h-full border rounded-2xl transition
    hover:-translate-y-1
    hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]

    ${
      theme === "dark"
        ? "bg-transparent border-gray-500/60"
        : "bg-white/10 border-gray-300"
    }
  `}
      >
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-400 text-sm">{description}</p>
          <p className="text-xs text-indigo-400">{tech}</p>

          <div className="flex gap-3 pt-2">
            <a
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              title="Frontend Repository"
            >
              <Github size={18} />
            </a>

            {githubServer && (
              <a
                href={githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                title="Backend Repository"
              >
                <Github size={18} />
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Animated border */}
      <BorderBeam
        size={180}
        duration={12}
        className="pointer-events-none rounded-2xl"
      />
    </div>
  );
}
