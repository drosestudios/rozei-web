"use client";
const basicFadeIn = {
  initial: { opacity: 0 }, animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

import { BlogSectionHeader, BlogSectionAuthors, BlogSectionText } from "@/components/ui/blogstack";
import { motion } from 'framer-motion';

export default function Post01() {
  return (
    <motion.article {...basicFadeIn} className="flex flex-col gap-4">
      <BlogSectionHeader title={"Designing Rozei Since 2019"} date={'August 14, 2025'} readTime={'4 min read'}/>

      <BlogSectionAuthors
        authors={[{
          name: "Angelo Mejia", role: "Chief Executive Officer", avatar: "/LogoOutline.png",
        },
      ]}/>

      <BlogSectionText title={'DESIGN AND HISTORY OF THE DEVELOPMENT'}>
        <p className='text-zinc-600 text-base'>
          Rozei has been a passion project of mine since 2019/2020. I began developing it using WinForms with C#, but after encountering limitations in
          creating the UI I envisioned, I moved on to WPF. Later, I experimented with WinUI3 to explore more modern interface possibilities. Each step came
          with its own challenges, and every obstacle taught me something new about programming and design.
        </p>
        <p className='text-zinc-600 text-base'>
          In 2023, I decided to take Rozei to the next level by transitioning it to ElectronJS. This shift required learning web development
          languages I had previously overlooked. Rebuilding the interface took several days, but it became a valuable learning experience in
          UI and graphic design.
        </p>
        <p className='text-zinc-600 text-base'>
          Later in 2024, I started making Rozei fully web-based using Next.js and React, alongside other modern technologies. This allowed me
          to experiment more freely, optimize the interface for responsiveness, and ultimately discover the exact style and design approach
          I wanted for the UI.
        </p>
        <p className='text-zinc-600 text-base'>
          Over time, I refined the interface, embracing minimalism and achromatic colors—grays, blacks, and whites—which have always
          resonated with me. Today, I am proud of the clean, thoughtful design that defines Rozei.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'CURRENT FOCUS: BROWSER-BASED EXPERIENCE'}>
        <p className='text-zinc-600 text-base'>
          Right now, Rozei is optimized for use directly in your browser. This means you can organize your anime collection without downloads,
          providing instant access from any device. The browser-based experience allows for quick updates and seamless synchronization across
          multiple devices. This approach lets me prioritize user experience while building the foundation for future expansions to native platforms.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'FUTURE PLANS AND PLATFORM EXPANSION'}>
        <p className='text-zinc-600 text-base'>
          Beyond the browser, my goal is to bring Rozei to macOS first, ensuring a polished and fully-featured native experience. Eventually,
          I aim to expand to Android, iOS, Windows, and Linux, so fans can enjoy Rozei no matter their device.
        </p>
        <p className='text-zinc-600 text-base'>
          Each version will remain customizable, letting you organize movies, series, or any other entertainment media just the way you want.
          With every update, the app will continue to evolve to meet the needs of anime enthusiasts.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'VISION AND AMBITION OF THE PROJECT'}>
        <p className='text-zinc-600 text-base'>
          My long-term ambition for Rozei is to become a cornerstone tool for anime and series fans. While my current focus is developing and
          refining Rozei itself, I hope to expand the brand to include additional applications that complement this ecosystem.
        </p>
        <p className='text-zinc-600 text-base'>
          I welcome suggestions from the community—any idea that resonates with the vision of Rozei may be implemented. The ultimate goal is
          to create an application that stands out, feels personal, and becomes a reliable companion for managing your entertainment collections.
        </p>
      </BlogSectionText>

      <BlogSectionText title={'APPRECIATION AND GRATITUDE'}>
        <p className='text-zinc-600 text-base'>
          I want to thank everyone who follows the blog for updates. Your support motivates me to continuously improve
          the app and address any issues that arise. Building this project alongside a community of passionate users is truly an honor.
        </p>
        <p className='text-zinc-600 text-base'>
          Currently, I am a one-person team, but I hope to bring more people on board to contribute to Rozei’s development, helping deliver
          an even more polished and professional experience. As a fellow anime fan, I take great joy in dedicating my time and energy to
          this project and look forward to seeing it grow over the years.
        </p>
      </BlogSectionText>
    </motion.article>
  );
}
