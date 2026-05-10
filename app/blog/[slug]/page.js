import { bloglist } from "../data";

export default function Page({ params }) {
  console.log("Slug from URL:", params.slug); // 👈 DEBUG

  const post = bloglist.find(
    (item) => item.slug === params.slug
  );

  console.log("Matched Post:", post); // 👈 DEBUG

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}