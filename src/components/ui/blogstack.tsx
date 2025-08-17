import React from "react";

function BlogSectionHeader({ title, date, readTime } :
  { title: string; date: string; readTime: string; }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-red-900">{title}</h1>
      <p className="text-sm font-medium">
        {date} · {readTime}
      </p>
    </header>
  );
}

function BlogSectionAuthors({ authors = [] } : {
  authors: { name: string; role: string; avatar: string }[];
}) {
  return (
    <section className="flex items-center gap-4 flex-wrap">
      {authors.map((author, index) => (
        <div key={index} className="flex items-center gap-3">
          <img src={author.avatar} alt={author.name}
            className="rounded-full drop-shadow-lg size-9"
          />
          <div className="flex flex-col">
            <p className="font-bold text-base">{author.name}</p>
            <p className="text-xs font-bold text-zinc-500">{author.role}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function BlogSectionText({ title, children } : {
  title: string; children: React.ReactNode; }) {
  return (
    <section className="flex flex-col gap-3 mt-6">
      <h2 className="text-lg font-bold font-inter">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

export { BlogSectionHeader, BlogSectionAuthors, BlogSectionText };
