"use client";

import { motion } from "framer-motion";

import Nextjssvg from "./Nextjssvg";
import Reactvg from "../svgs/React";
import Tailwindvg from "../svgs/Tailwind";
import Javascriptsvg from "../svgs/Javascriptsvg";
import ResponsiveDesignsvg from "../svgs/ResponsiveDesignsvg";
import RestApisvg from "../svgs/RestApisvg";

export default function ServicesHoverReveal() {
 const services = [
    {
      title: "Next.js Development",
      preview: "A React framework for building fast, SEO-friendly, and scalable web applications with server-side rendering and routing.",
      icon: <Nextjssvg />,
      buttons: ["SSR", "SEO", "API"],
    },
    {
      title: "React Development",
      preview: "A JavaScript library used to build interactive and reusable user interface components for modern web applications.",
      icon: <Reactvg />,
      buttons: ["Hooks", "SPA", "UI"],
    },
    {
      title: "Tailwind CSS",
      preview: "A utility-first CSS framework used to design modern, responsive, and clean user interfaces.",
      icon: <Tailwindvg />,
      buttons: ["Figma", "Wireframe", "Prototype"],
    },
    {
      title: "JavaScript",
      preview: "A powerful programming language that makes web pages interactive and dynamic in both frontend and backend development.",
      icon: <Javascriptsvg />,
      buttons: ["Flutter", "iOS", "Android"],
    },
    {
      title: "Responsive Design",
      preview: "Create mobile-first layouts that work perfectly on all screen sizes.",
      icon: <ResponsiveDesignsvg />,
      buttons: ["SEO", "Ads", "Branding"],
    },
    {
      title: "REST APIs",
      preview: "A standard way for applications to communicate with each other and exchange data between frontend and backend systems.",
      icon: <RestApisvg />,
      buttons: ["React", "Node.js", "ES6"],
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16">
      

      <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl pt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-100 py-12 pb-24 p-14 px-16 rounded-[20px] text-left w-full sm:w-[48%] lg:w-[32%] group relative rounded-2xl bg-gray-100 p-6 overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            {/* Icon */}
            <div className="mb-5 text-black">
              {service.icon}
            </div>

            {/* Always visible */}
            <h3 className="text-2xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-400">
              {service.preview}
            </p>

            {/* Buttons slide bottom → top */}
            <div className="absolute bottom-10 left-14 right-6 overflow-hidden">
              <div className="translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex flex-wrap gap-2">
                 
                {service.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}