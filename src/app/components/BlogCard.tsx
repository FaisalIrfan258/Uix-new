'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the structure of the blog post data
interface BlogPost {
  id: number;
  title: string;
  author: string;
  publicationDate: string;
  imageUrl: string;
}

// Define the structure of the API response
interface ApiResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      author: string;
      publicationDate: string;
      content: Array<{
        type: string;
        image?: {
          url: string;
        };
      }>;
    };
  }[];
}

export default function BlogCard() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.360xpertsolutions.com/api/blogs");
        const data: ApiResponse = await response.json(); // Specify the type of the response
        
        // Sort blogs by publication date in descending order and take the latest 3
        const sortedBlogs = data.data
          .map((blog) => ({
            id: blog.id,
            title: blog.attributes.title,
            author: blog.attributes.author,
            publicationDate: blog.attributes.publicationDate,
            imageUrl:
              blog.attributes.content.find((content) => content.type === "image")?.image?.url || "",
          }))
          .sort((a, b) => 
            new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
          )
          .slice(0, 3);  // Take only the first 3 blogs

        setBlogPosts(sortedBlogs);
      } catch (error) {
        setError("Failed to fetch blogs.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div id="blog" className="container mx-auto px-4 py-8">
      <h1 className="text-[#00adef] text-4xl md:text-5xl font-bold text-center mb-8">
        Our Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="group grid grid-cols-1 gap-4 p-4 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg bg-[#f5f5f5] dark:bg-gray-800 cursor-pointer">
              {post.imageUrl && (
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">By {post.author}</p>
                <div className="flex justify-end items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(post.publicationDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Link 
          href="/allblogs" 
          className="group relative inline-block px-6 py-3 font-bold text-white rounded-lg overflow-hidden"
        >
          <span className="absolute inset-0 bg-[#00adef] transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
          <span className="relative ```typescript
          z-10 
          text-black group-hover:text-white dark:text-white transition duration-300">
            View All Blogs
          </span>
        </Link>
      </div>
    </div>
  );
}