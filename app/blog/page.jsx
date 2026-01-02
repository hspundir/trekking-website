import { fetchHygraph } from "@/lib/hygraph";
import Link from "next/link";

export default async function BlogPage() {
  // Fetch blogs from Hygraph
  const data = await fetchHygraph(`
    {
      blogs {
        title
        slug
        publishStatus
      }
    }
  `);

  const blogs = data.blogs;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Trekking Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition duration-300 cursor-pointer">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mt-2 text-sm text-gray-500">{blog.publishStatus}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
