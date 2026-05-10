import Image from "next/image";
import Button from "../components/Button";

export const metadata = {
  title: "About",
  description: "Learn more about our company and services",
};

export default function About() {
  return (
    <>
      <section className="w-full py-16 bg-gray-50">
      
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center w-full md:w-1/2 mx-auto">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a modern web development company building fast, scalable
            and SEO-friendly websites using Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/about.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to help businesses grow online by creating modern
              and high-performance websites. We focus on clean design, fast
              performance, and great user experience.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With expertise in Next.js, React, and Tailwind CSS, we build
              scalable digital solutions for the future.
            </p>

            {/* Button */}
            <Button className="mt-6">
                Get Started
            </Button>
          </div>

        </div>

      </div>

    </section>
    </>
  );
}