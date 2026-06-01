

export const metadata = {
  title: "Contact",
  description: "Get in touch with us for projects and inquiries",
};

export default function ContactUs() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row">
        
        {/* Left Side */}
        <div className="flex w-full flex-col justify-center bg-black p-10 text-white lg:w-1/2">
          <span className="mb-4 w-fit rounded-full border border-white/20 px-4 py-1 text-sm text-gray-300">
            Contact Us
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Let’s Build Something Amazing Together
          </h1>

          <p className="mb-8 text-lg text-gray-300">
            We help businesses create modern web applications,
            scalable platforms, and beautiful digital experiences.
            Reach out to discuss your project today.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">hello@company.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+92 300 1234567</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Office</h3>
              <p className="text-gray-400">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full p-10 lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Send Message
            </h2>

            <p className="mt-2 text-gray-500">
              Fill out the form and our team will contact you shortly.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project discussion"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}