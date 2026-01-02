import { fetchHygraph } from "@/lib/hygraph";

type Blog = {
  title: string;
  slug: string;
  publishStatus: string;
};

type Props = {
  params: { slug: string };
};

export default async function BlogDetail({ params }: Props) {
  const { slug } = params;

  const data = await fetchHygraph<{ blogs: Blog[] }>(`
    {
      blogs(where: { slug: "${slug}" }) {
        title
        slug
        publishStatus
      }
    }
  `);

  const blog = data.blogs[0];

  if (!blog) return <p className="p-10">Blog not found</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">Status: {blog.publishStatus}</p>
      <p>Here you can render the full blog content (Rich Text later)</p>
    </div>
  );
}
