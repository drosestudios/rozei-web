import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Separator } from '@/components/ui/separator';

import { motion } from 'framer-motion';
const basicFadeIn = {
  initial: { opacity: 0 }, animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

// BLOG POSTS IMPORTS AND ARRAY
import Post1, { meta as Post1Meta } from './posts/designing-rozei-a-journey-since-2019';
import Post2, { meta as Post2Meta } from './posts/announcing-the-rozei-website';
import Post3, { meta as Post3Meta } from './posts/rozei-public-beta-coming-soon';

const posts = [
  { path: "rozei-public-beta-coming-soon", title: Post3Meta.title, element: <Post3/> },
  { path: "announcing-the-rozei-website", title: Post2Meta.title, element: <Post2/> },
  { path: "designing-rozei-a-journey-since-2019", title: Post1Meta.title, element: <Post1/> },
];

export default function Blog() {
  return (
    <motion.main {...basicFadeIn} className="pb-20">
      <Helmet> <title>Rozei: Insights and Updates</title> </Helmet>

      <section className="flex flex-col px-8  lg:flex-row gap-8 mt-10 xl:mt-20 w-full max-w-6xl mx-auto">
        {/* Sidebar */}
        <aside className="w-72 hidden lg:flex xl:flex flex-shrink-0 border-r border-stone-100 pr-8">
          <nav className="flex flex-col gap-2">
            <h2 className='font-bold text-zinc-600 text-lg'>2025</h2>

            <Separator className='opacity-40 my-1'/>

            {posts.map(post => (
              <Link key={post.path} to={`/blog/${post.path}`}
                className="hover:text-red-900"
              > {post.title} </Link>
            ))}
          </nav>
        </aside>

        {/* Blog Content */}
        <div className="w-full mx-auto">
          <p className='flex lg:hidden mb-2 font-bold text-red-900 opacity-60 text-xl'>Latest Post</p>
          <Routes>
            <Route path="" element={<Navigate to={posts[0].path} replace />} />
            {posts.map((post) => (
              <Route key={post.path} path={post.path} element={post.element} />
            ))}
          </Routes>
        </div>

      </section>
    </motion.main>
  );
}
