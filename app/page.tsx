import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";
import Services from "./components/Services";

export const metadata = {
  title: "Home",
  description: "Welcome to my modern website built with Next.js",
  openGraph: {
    title: "Home | My Website",
    description: "Best web development services",
    url: "https://yourwebsite.com",
    images: ["/og-image.png"],
  },
};



export default function Home() {
  return (
    <>
      <section className="relative w-full h-[500px] flex items-center justify-center text-white mt-12">
      
      {/* Background Image */}
      <Image
        src="/homebanner.png"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Dark Overlay (optional but recommended) 
      <div className="absolute inset-0 bg-black/50 z-10"></div>*/}

      {/* Text Content */}
      <div className="relative z-20 text-center">
        <div className="w-full md:w-1/2 mx-auto">
            <h1 className="text-[32px] md:text-[32px] font-semibold leading-[40px]">
            Convert Design
            <br></br>
            into Next JS
          </h1>
          <p className="mt-4 text-[16px] md:text-[16px] leading-[28px] ">
            We convert your design into a fast, responsive, and modern Next.js application using clean code and best practices.
          </p>
        </div>
        <Button className="mt-6 text-lg px-8 py-3">
          Get Started
        </Button>
      </div>
    </section>
    <section className="w-full px-4 py-26 bg-gray-50">
      <div className="w-full md:w-1/2 mx-auto text-center px-4">
        <h1 className="text-3xl font-semibold">
          How can we help?
        </h1>
        <p className="mt-4 text-[16px] md:text-[16px] leading-[28px]">
          Our team builds fast, scalable, and user-friendly web solutions tailored to your business needs. We focus on clean design, smooth performance, and modern development practices to deliver high-quality digital products.
        </p>
      </div>
    </section>
     
     <Services />

</>
  );
}