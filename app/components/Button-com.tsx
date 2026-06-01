"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton() {
  return (
    <div>
      <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        whileTap={{ scale: 0.97 }}
        className="group relative overflow-hidden rounded-full bg-green-500 px-4 py-2 shadow-lg"
      >
        {/* Expanding dark bg */}
        <motion.div
          variants={{
            rest: { scale: 0, opacity: 0 },
            hover: { scale: 8, opacity: 1 },
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
        />

        {/* Gloss shine */}
        <motion.div
          variants={{
            rest: { x: "-140%" },
            hover: { x: "140%" },
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-y-0 w-16 rotate-12 bg-white/20 blur-md"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2">
          {/* Icon circle */}
          <motion.div
            variants={{
              rest: { x: 0, backgroundColor: "#ffffff" },
              hover: { x: 4, backgroundColor: "#099b1d" },
            }}
            transition={{ duration: 0.25 }}
            className="flex h-9 w-9 items-center justify-center rounded-full"
          >
            <motion.div
              variants={{
                rest: { rotate: 0 },
                hover: { rotate: -45 },
              }}
              transition={{ duration: 0.25 }}
            >
              <ArrowRight className="h-4 w-4 text-green-500 group-hover:text-white" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.span
            variants={{
              rest: { x: 0, color: "#111827" },
              hover: { x: 6, color: "#fff" },
            }}
            transition={{ duration: 0.25 }}
            className="text-sm font-semibold tracking-wide"
          >
            Get Started
          </motion.span>
        </div>
      </motion.button>
    </div>
  );
}