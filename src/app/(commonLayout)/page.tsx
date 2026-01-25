import BlogCard from "@/components/modules/home/BlogCard";

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogService.getBlogPost(
    {
      isFeatured: false,
      // search: ""
    },
    {
      cache: "no-store",
      // revalidate: 10
    }
  );

  console.log(data);

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-4">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
