interface Blog {
  title: string;
  author: string;
  published: boolean;
}

function publishBlog(blog: Blog): string {
  return blog.published
    ? `${blog.title} is live`
    : `${blog.title} is draft`;
}

const myBlog: Blog = {
  title: "Winter Treks",
  author: "Harendra",
  published: true,
};

console.log(publishBlog(myBlog));

export {};
