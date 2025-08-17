"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { articles } from "./articles";

export default function BlogSidebar() {
  return (
    <aside className="w-72 hidden lg:flex flex-shrink-0 border-r border-stone-100 pr-8">
      <nav className="flex flex-col gap-2">
        <h2 className="font-bold text-zinc-600 text-lg">2025</h2>
        <Separator className="opacity-40 my-1" />
        {articles.map((post) => (
          <Link
            key={post.slug}
            href={`/articles/${post.slug}`}
            className="hover:text-red-900"
          >
            {post.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
