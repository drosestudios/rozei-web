import BlogSidebar from "./sidebar";
import { ReactNode } from "react";

export const metadata = {
  title: "Rozei: Latest Articles",
  description: "All articles on Rozei",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="pb-20">
      <section className="flex flex-col px-8 lg:flex-row gap-8 mt-10 xl:mt-20 w-full max-w-6xl mx-auto">

        {/* Sidebar */}
        <BlogSidebar />

        {/* Content Area */}
        <div className="w-full mx-auto">
          <p className="flex lg:hidden mb-2 font-bold text-red-900 opacity-60 text-xl">Latest Post</p>
          {children}
        </div>
      </section>
    </main>
  );
}
