"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Social() {
  const socialIcons = {
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center gap-6 py-8"
    >
      {Object.entries(siteConfig.social).map(([platform, url], index) => {
        const Icon = socialIcons[platform as keyof typeof socialIcons];
        return (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Icon className="h-6 w-6" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}