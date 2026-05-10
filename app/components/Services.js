export default function Services() {
  const services = [
    {
      icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      width="50"
    >
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        width="180"
        height="180"
        x="0"
        y="0"
        style={{ maskType: "alpha" }}
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>

      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="black" />

        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0)"
        />

        <rect
          x="115"
          y="54"
          width="12"
          height="72"
          fill="url(#paint1)"
        />
      </g>

      <defs>
        <linearGradient
          id="paint0"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="paint1"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    ),
      title: "Next.js Development",
      desc: "A React framework for building fast, SEO-friendly, and scalable web applications with server-side rendering and routing.",
    },
    {
      icon: (
        <svg
      viewBox="-10.5 -9.45 21 18.9"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-3 w-14 self-center text-brand dark:text-brand-dark transition-all"
      fill="none"
    >
      <circle cx="0" cy="0" r="2" fill="currentColor" />

      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
      ),
      title: "React",
      desc: "A JavaScript library used to build interactive and reusable user interface components for modern web applications.",
    },
    {
      icon: (
        <svg
  fill="#000000"
  width="60"
  height="60"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
  />
</svg>
      ),
      title: "Tailwind CSS",
      desc: "A utility-first CSS framework used to design modern, responsive, and clean user interfaces quickly without writing custom CSS.",
    },
    {
      icon: (
        <svg width="40px" height="40px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#ffffff" stroke="#ffffff">


<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M0 0h256v256H0V0z" fill="#000000"/>

<path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>

</g>

</svg>
        ),
      title: "JavaScript",
      desc: "A powerful programming language that makes web pages interactive and dynamic in both frontend and backend development.",
    },
    {
      icon:(
        <svg
      viewBox="0 0 48.832 48.832"
      xmlns="http://www.w3.org/2000/svg"
      className="w-18 h-16"
      fill="currentColor"
    >
      <g>
        <polygon points="15.42,32.814 22.23,32.814 22.23,34.385 15.42,34.385 15.42,35.68 36.838,35.68 36.838,34.385 28.898,34.385 28.898,32.814 37.729,32.814 37.729,29.227 15.42,29.227" />
        
        <polygon points="9.489,11.231 41.957,11.231 41.957,24.209 44.739,24.209 44.739,8.449 6.707,8.449 6.707,17.14 9.489,17.14" />
        
        <path d="M0,39.799h14.523V18.013H0V39.799z M7.568,38.705c-0.386,0-0.7-0.312-0.7-0.699c0-0.386,0.314-0.699,0.7-0.699c0.387,0,0.699,0.312,0.699,0.699S7.955,38.705,7.568,38.705z M2.1,20.113h10.325l-0.001,16.072H2.1V20.113z" />
        
        <path d="M38.715,25.046v15.337h10.117V25.046H38.715z M43.979,25.68c0.121,0,0.22,0.101,0.22,0.221c0,0.121-0.099,0.222-0.22,0.222c-0.123,0-0.223-0.101-0.223-0.222C43.756,25.78,43.855,25.68,43.979,25.68z M42.665,26.416h2.623v0.212h-2.623V26.416z M43.891,39.721c-0.291,0-0.524-0.236-0.524-0.525c0-0.29,0.233-0.524,0.524-0.524c0.289,0,0.525,0.234,0.525,0.524C44.416,39.484,44.18,39.721,43.891,39.721z M47.369,37.915c-2.368,0.013-6.016,0.022-7.189,0.012V27.382l7.189-0.001V37.915z" />
      </g>
    </svg>
      ),
      title: "Responsive Design",
      desc: "Create mobile-first layouts that work perfectly on all screen sizes.",
    },
    {
      icon:(
        <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14"
      fill="currentColor"
    >
      <path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z" />
    </svg>
      ),
      title: "REST APIs",
      desc: "A standard way for applications to communicate with each other and exchange data between frontend and backend systems.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h1 className="text-3xl font-semibold">What we Cover ?</h1>
      <p className="mt-2 text-[16px] md:text-[16px] leading-[28px]">
        Our capabilities include but are not limited to!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl pt-12">
        {services.map((service, index) => (
          <div key={index}
            className="bg-gray-100 py-18 p-14 px-16 rounded-[20px] text-left w-full sm:w-[48%] lg:w-[32%]">
             <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-black-400">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
