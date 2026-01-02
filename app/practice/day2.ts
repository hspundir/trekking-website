interface Blog {
  title: string;
  slug: string;
  author: string;
  published: boolean;
}

const blogs: Blog[] = [
  {
    title: "Top Treks in Uttarakhand",
    slug: "top-treks-uttarakhand",
    author: "Harendra",
    published: true,
  },
];

console.log(blogs);

export {};
