const basicFadeIn = {
  initial: { opacity: 0 }, animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

import { BlogSectionHeader, BlogSectionAuthors, BlogSectionText } from "@/components/ui/blogstack";
import { motion } from 'framer-motion';

export const meta = {
  title: "Announcing the Rozei Website"
};

export default function PostShowcase() {
  return (
    <motion.article {...basicFadeIn} className="flex flex-col gap-4">
      <BlogSectionHeader title={meta.title} date={'August 16, 2025'} readTime={'2 min read'}/>

      <BlogSectionAuthors
        authors={[{
          name: "Angelo Mejia", role: "Chief Executive Officer", avatar: "/LogoOutline.png",
        }]}/>

      <BlogSectionText title={'INTRODUCING THE ROZEI WEBSITE'}>
        <p className='text-zinc-600 text-base'>
          The official Rozei website is now live! This website is designed to give visitors a complete visual introduction to the app while it is still in development.
          It includes a landing page, blog section, FAQ, and downloads page—but note that downloads are for demonstration only at this stage.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'WHAT YOU CAN EXPLORE'}>
        <ul className='list-disc list-inside text-zinc-600 text-base'>
          <li><strong>Landing Page:</strong> See the main interface, hero section, and visual highlights of Rozei.</li>
          <li><strong>Blog:</strong> Read development updates, design stories, and future plans.</li>
          <li><strong>FAQ:</strong> Learn about how Rozei works and what features are planned.</li>
          <li><strong>Downloads:</strong> A visual mock-up of the download page—no actual downloads yet.</li>
        </ul>
      </BlogSectionText>

      <BlogSectionText title={'PURPOSE AND VISION'}>
        <p className='text-zinc-600 text-base'>
          The Rozei website was created to visually demonstrate the features we plan to implement in the full app. While the application itself is still in development, the website allows users to explore how Rozei will help organize anime, movies, or series, and get a sense of the interface, layout, and design philosophy.
        </p>
        <p className='text-zinc-600 text-base'>
          The showcase also serves as a way for the community to provide feedback. Visitors can share their thoughts and suggestions through our Discord servers or social media channels like Instagram, helping guide the development and improvement of Rozei before its official release.
        </p>
      </BlogSectionText>
    </motion.article>
  );
}
