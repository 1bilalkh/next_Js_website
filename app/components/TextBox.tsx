"use client";

import { motion } from "framer-motion";

export default function ServicesText() {
  return (
    <div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold"
      >
        What we Cover ?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-2 text-[16px] md:text-[16px] leading-[28px]"
      >
        Our capabilities include but are not limited to!
      </motion.p>

    </div>
  );
}