type BlogStatus = "draft" | "published" | "archived";

interface Blog {
  title: string;
  status: BlogStatus;
}

function getBlogMessage(blog: Blog): string {
  if (blog.status === "draft") {
    return "Blog is in draft";
  }

  if (blog.status === "published") {
    return "Blog is live";
  }

  return "Blog is archived";
}

const myBlog: Blog = {
  title: "Best Treks",
  status: "draft",
};

console.log(getBlogMessage(myBlog));

export {};
