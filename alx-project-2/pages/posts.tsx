import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface JsonPlaceholderPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: JsonPlaceholderPost[] = await response.json();
        // Transform the API data to match PostProps
        const transformedPosts: PostProps[] = data.map((post) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(transformedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">Posts Page</h1>
        <p className="text-lg text-zinc-600 mb-8">
          Posts fetched from JSONPlaceholder API
        </p>

        {loading && (
          <div className="text-center py-12">
            <p className="text-zinc-600">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
