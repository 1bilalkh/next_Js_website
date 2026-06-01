
//import Button from "./components/Button";
import Headintext from "./components/Headintext";
import HeroBanner from "./components/HeroBanner";
import ServicesHoverReveal from "./components/ServicesHoverReveal";


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
    
    <HeroBanner />
    <Headintext />
    <ServicesHoverReveal />

</>
  );
}