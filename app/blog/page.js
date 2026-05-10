import Link from "next/link";
import { bloglist } from "./data";

export const metadata = {
  title: "Blog",
  description: "Read our latest articles and tutorials",
};

export default function Blog() {
  return (
    <div className="container mx-auto px-4">

      {/* HEADER */}
      <div className="text-left pt-10">
        <h1 className="text-4xl font-semibold">Blog Page</h1>
        <p className="text-gray-500 text-base leading-relaxed">
          This is Blog page
        </p>
      </div>

      {/* BLOG LIST */}
      <div className="flex flex-wrap gap-5 mb-8 mt-6">
        {bloglist.map((blog) => (
          <div
            key={blog.slug}
            className="flex-1 min-w-[220px] max-w-[23%] bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs "
          >
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-heading mb-1">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-500 text-body">
              {blog.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}