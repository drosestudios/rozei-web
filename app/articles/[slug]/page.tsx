import { notFound } from "next/navigation";
import { articlesMap } from "../articles";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = articlesMap[params.slug];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: `Read the article: ${post.title}` };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = articlesMap[params.slug];
  if (!post) return notFound();

  return <article className="prose mx-auto">{post.component}</article>;
}
