import { PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-zinc-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-2xl font-semibold text-zinc-900 flex-1 pr-4">
          {title}
        </h2>
        <span className="text-sm font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full whitespace-nowrap">
          User {userId}
        </span>
      </div>
      <p className="text-zinc-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default PostCard;
