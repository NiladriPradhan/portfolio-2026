"use client"
import { useTheme } from "@/context/theme-context"
import { motion } from "framer-motion"

export function ScrollFadeIn({
  children,
}: {
  children: React.ReactNode
}) {
  const {theme} = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      // className={` ${theme === "light" ? "bg-black text-white" :"text-black bg-white" } `}
    >
      {children}
    </motion.div>
  )
}
