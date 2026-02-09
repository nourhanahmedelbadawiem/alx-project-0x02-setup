import { ButtonProps } from "@/interfaces";

export default function Button({
  children,
  size = "medium",
  shape = "rounded-md",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const baseClasses =
    "font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${shape} ${className}`}
    >
      {children}
    </button>
  );
}
