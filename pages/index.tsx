import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black`}
    >
      <Header />
      <main className="flex flex-1 items-center justify-center px-6">
        <section className="mx-auto max-w-2xl rounded-xl bg-white p-10 shadow-md dark:bg-zinc-900">
          <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Welcome to ALX Project 2
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            This is your Next.js application scaffolded with TypeScript, ESLint, and Tailwind CSS.
          </p>
        </section>
      </main>
    </div>
  );
}
