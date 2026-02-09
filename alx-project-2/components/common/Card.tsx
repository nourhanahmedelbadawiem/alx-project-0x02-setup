import { CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-zinc-200 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold text-zinc-900 mb-3">{title}</h2>
      <p className="text-zinc-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default Card;
