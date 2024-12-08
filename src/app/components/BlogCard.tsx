// import Image from 'next/image'
// import Link from 'next/link'

// interface BlogPost {
//   title: string
//   excerpt: string
//   date: string
//   imageUrl: string
//   slug: string
// }

// const blogPosts: BlogPost[] = [
//   {
//     title: "Getting Started with Next.js",
//     excerpt: "Learn the basics of Next.js and start building awesome React applications.",
//     date: "2023-05-15",
//     imageUrl: "/next.jpeg",
//     slug: "getting-started-with-nextjs"
//   },
//   {
//     title: "Mastering Tailwind CSS",
//     excerpt: "Dive deep into Tailwind CSS and create beautiful, responsive designs.",
//     date: "2023-05-20",
//     imageUrl: "/tailwind.jpeg",
//     slug: "mastering-tailwind-css"
//   },
//   {
//     title: "The Power of TypeScript",
//     excerpt: "Discover how TypeScript can improve your JavaScript development experience.",
//     date: "2023-05-25",
//     imageUrl: "/ts.png",
//     slug: "the-power-of-typescript"
//   },
//   // Add more blog posts as needed
// ]

// export default function BlogCard() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Our Blog</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogPosts.map((post, index) => (
//           <Link key={index} href={`/blog/${post.slug}`} className="group">
//             <div className="grid grid-cols-1 gap-4 p-4 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg bg-white dark:bg-gray-800">
//               <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
//                 <Image
//                   src={post.imageUrl}
//                   alt={post.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h2>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
//                 <div className="flex justify-end items-center text-sm text-gray-500 dark:text-gray-400">
//                   <span>{post.date}</span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }
'use client'


// app/components/BlogCard.tsx
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  publicationDate: string;
  imageUrl: string;
}

export default function BlogCard() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.360xpertsolutions.com/api/blogs");
        const data = await response.json();
        const blogs = data.data.map((blog: any) => ({
          id: blog.id,
          title: blog.attributes.title,
          author: blog.attributes.author,
          publicationDate: blog.attributes.publicationDate,
          imageUrl:
            blog.attributes.content.find((content: any) => content.type === "image")?.image?.url || "",
        }));
        setBlogPosts(blogs);
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="group grid grid-cols-1 gap-4 p-4 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg bg-white dark:bg-gray-800 cursor-pointer">
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
    </div>
  );
}
