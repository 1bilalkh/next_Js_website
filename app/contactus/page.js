

export const metadata = {
  title: "Contact",
  description: "Get in touch with us for projects and inquiries",
};

export default function About() {
  return (
    <>
    <div className="container mx-auto px-4">
    <div className="text-left pt-10 pb-20">
      <h1 className="text-4xl font-semibold">Contact Us Page</h1>
      <p className="text-gray-500 text-base leading-relaxed">This is Contact Us page</p>
    </div>
    </div>
    
    <div className="hidden">
      <section className="max-w-3xl mx-auto py-16 px-6">
        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            className="p-3 border rounded-lg"
          />

          <button className="bg-black text-white py-3 rounded-lg">
            Send Message
          </button>

        </form>
      </section>
    </div>
    </>
  );
}