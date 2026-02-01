"use client";

import {
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Home,
  User,
} from "lucide-react";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function NavbarBottom() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ButtonGroup
        aria-label="Bottom navigation"
        className="bg-gray-800/80 backdrop-blur-lg border px-4 border-gray-700 rounded-2xl shadow-xl flex items-center"
      >
        <Button
          onClick={() => scrollToSection("home")}
          variant="ghost"
          size="icon"
          className="text-gray-100 hover:text-indigo-400"
        >
          <Home className="size-5" />
        </Button>

        <Button
          onClick={() => scrollToSection("about")}
          variant="ghost"
          size="icon"
          className="text-gray-100 hover:text-indigo-400"
        >
          <User className="size-5" />
        </Button>

        <Button
          onClick={() => scrollToSection("projects")}
          variant="ghost"
          size="icon"
          className="text-gray-100 hover:text-indigo-400"
        >
          <FolderGit2 className="size-5" />
        </Button>

        <Button
          onClick={() => scrollToSection("skills")}
          variant="ghost"
          size="icon"
          className="text-gray-100 hover:text-indigo-400"
        >
          <Code2 className="size-5" />
        </Button>

        <Button
          onClick={() => scrollToSection("education")}
          variant="ghost"
          size="icon"
          className="text-gray-100 hover:text-indigo-400"
        >
          <GraduationCap className="size-5" />
        </Button>
        <div className="items-center flex px-2  pb-4">
          <AnimatedThemeToggler className="size-2" />
        </div>
      </ButtonGroup>
    </div>
  );
}
