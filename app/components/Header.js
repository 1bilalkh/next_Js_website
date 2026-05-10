"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button"; // make sure this file exists

export default function Header() {
  return (
    <nav className="fixed w-full z-30 top-0 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-auto p-4">
          
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={50}
              priority
            />
          </Link>

          <div className="flex items-center md:order-2 space-x-3">
            
            
                <Button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Sign In
                </Button>
              

          </div>

          <div className="hidden md:flex md:space-x-4">
            <Link href="/">Home</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contactus">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}