import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "Next.js Framework",
      content:
        "Next.js is a React framework that enables server-side rendering and static site generation, making it perfect for building fast and SEO-friendly web applications.",
    },
    {
      title: "TypeScript Support",
      content:
        "TypeScript provides static type checking, which helps catch errors early in development and improves code maintainability and developer experience.",
    },
    {
      title: "Tailwind CSS",
      content:
        "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs without leaving your HTML, making styling efficient and consistent.",
    },
    {
      title: "Component Architecture",
      content:
        "This project follows a modular component architecture, with reusable components organized in common and layout directories for better code organization.",
    },
  ]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 mb-2">Home Page</h1>
            <p className="text-lg text-zinc-600">
              Welcome to the home page of ALX Project 2.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium shadow-md"
          >
            + Add New Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
