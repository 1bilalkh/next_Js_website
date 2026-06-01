"use client";

import { motion } from "framer-motion";

function Headintext() {
  return (
    <>
      <motion.section
      className="w-full px-4 py-26 bg-gray-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/2 mx-auto text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          How can we help?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-[16px] leading-[28px]"
        >
          Our team builds fast, scalable, and user-friendly web solutions
          tailored to your business needs. We focus on clean design, smooth
          performance, and modern development practices to deliver high-quality
          digital products.
        </motion.p>

      </div>
    </motion.section>
    </>
  )
}

export default Headintext
