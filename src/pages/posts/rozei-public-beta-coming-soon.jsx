const basicFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

import { BlogSectionHeader, BlogSectionAuthors, BlogSectionText } from "@/components/ui/blogstack";
import { motion } from 'framer-motion';

export const meta = {
  title: "Rozei Public Beta Coming Soon"
};

export default function PostBeta() {
  return (
    <motion.article {...basicFadeIn} className="flex flex-col gap-4">
      <BlogSectionHeader title={meta.title} date={'August 16, 2025'} readTime={'3 min read'}/>

      <BlogSectionAuthors
        authors={[{
          name: "Angelo Mejia", role: "Chief Executive Officer", avatar: "/LogoOutline.png",
        }]}/>

      <BlogSectionText title={'SOON AVAILABLE: ROZEI PUBLIC BROWSER BETA'}>
        <p className='text-zinc-600 text-base'>
          We are excited to announce that the Rozei public beta will soon be available in your browser! This beta version will allow fans and users to start exploring Rozei’s features firsthand, giving you a chance to organize your anime collection and experience the interface before the full app is released.
        </p>
        <p className='text-zinc-600 text-base'>
          The browser-based beta is designed for easy access from any device, with no downloads required. While still in development, it provides a hands-on preview of Rozei’s key functionality and upcoming features.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'WHAT TO EXPECT IN THE BETA'}>
        <ul className='list-disc list-inside text-zinc-600 text-base'>
          <li><strong>Anime & Series Collections:</strong> Build and manage your personal collections directly in the browser, keeping all your favorite titles organized in one place.</li>
          <li><strong>Folders & Organization:</strong> Group items into folders for easy sorting and better overview of your watchlists or series categories.</li>
          <li><strong>Customization Within Collections:</strong> Customize your lists with tags, sorting options, and personalized notes, tailoring Rozei to your unique viewing preferences.</li>
          <li><strong>Visually Rich Interface:</strong> Enjoy a sleek interface with high-quality anime artworks, giving your collections a lively and engaging visual experience.</li>
          <li><strong>Preview of Planned Features:</strong> Explore upcoming tools and improvements before the full release, providing an early look at what’s coming next.</li>
        </ul>
      </BlogSectionText>

      <BlogSectionText title={'GIVING FEEDBACK AND GETTING INVOLVED'}>
        <p className='text-zinc-600 text-base'>
          One of the main goals of the public beta is to gather feedback from the community. Users can share their thoughts, suggestions, and bug reports through our Discord server or social media channels like Instagram. Your input will directly influence the final version of Rozei and help make it the best experience possible.
        </p>
        <p className='text-zinc-600 text-base'>
          Participating in the beta is a great way to contribute to the project, get early access to new features, and see firsthand how Rozei evolves.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'STAY TUNED'}>
        <p className='text-zinc-600 text-base'>
          The public beta will launch soon! Make sure to follow our blog, Discord, and social media channels to receive updates on the exact release date and instructions on how to access the beta version.
        </p>
        <p className='text-zinc-600 text-base'>
          We can’t wait for fans to explore Rozei and share their feedback. Your engagement is key to shaping the app into a reliable and enjoyable tool for anime and series enthusiasts everywhere.
        </p>
      </BlogSectionText>
    </motion.article>
  );
}
