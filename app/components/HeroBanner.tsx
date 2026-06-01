"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "./Button-com";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-white mt-12">

      <Image
        src="/homebanner.png"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="relative z-20 text-center">
        <div className="w-full md:w-1/2 mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-4xl font-bold mb-6"
          >
            Convert Design
            <br />
            into Next JS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-1xl text-gray-300 mb-8"
          >
            We convert your design into a fast, responsive,
            and modern Next.js application.
          </motion.p>

        </div>

        {/* <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-full transition bg-blue-500 text-white px-4 py-2 rounded"
        >
          Get Started
        </motion.button> */}
        <AnimatedButton />
      </div>
    </section>
  );
}