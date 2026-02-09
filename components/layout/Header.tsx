import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-zinc-900">
          ALX Project 2
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/home"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}

