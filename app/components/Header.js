"use client";


import Image from "next/image";
import Button from "./Button"; 
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Cases", path: "/cases" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contactus" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-30 top-0 start-0">
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={50}
              priority
            />
          </Link>
     
      
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign In
          </Button>
          <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 z-50 m-0"
          >
            {/* Close button */}
            <button
              className="text-2xl mb-6"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={item.path}
                    className="text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      </div>

      {/* Desktop Menu */}
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="text-gray-700 hover:text-black font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
          
       </div>
    </nav>
  );
}