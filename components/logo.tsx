"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export function Logo() {
  const LogoIcon = siteConfig.logo.icon;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <LogoIcon className="h-20 w-20 text-primary" />
      </motion.div>
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-primary"
      >
        {siteConfig.logo.text}
      </motion.span>
    </motion.div>
  );
}