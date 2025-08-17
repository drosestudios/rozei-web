import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import dynamic from 'next/dynamic';
import Head from "next/head";

// IMPORTS
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Bookmark, Heart, List, ListCheck, ListOrdered, Settings, Star, UserPlus, Users } from 'lucide-react';
const StackIcon = dynamic(() => import('tech-stack-icons'), { ssr: false });

const basicFadeIn = {
  initial: { opacity: 0 }, animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

const appStack = [ "nextjs2", "typescript", "react", "tailwindcss", "webpack", "mongodb" ];
const appFeatures = [
  { icon: <Bookmark className="fill-black size-10 sm:size-12 md:size-12 lg:size-10" />, text: "Create collections to organize all your animes in one place" },
  { icon: <List className="fill-black size-10 sm:size-12 md:size-12 lg:size-10" />, text: "Manage your watchlists with ease and keep track of episodes" },
  { icon: <Users className="fill-black size-10 sm:size-12 md:size-12 lg:size-10" />, text: "Share your collections and discover what friends are watching" },
  { icon: <UserPlus className='size-12 sm:size-10 md:size-12 lg:size-10'/>, text: "Invite friends and collaborate to add animes to your collections" },
  { icon: <ListCheck className="fill-black size-10 sm:size-12 md:size-12 lg:size-10" />, text: "Track your animes with statuses like Watching or Completed" },
  { icon: <Heart className="fill-black size-10 sm:size-12 md:size-12 lg:size-10" />, text: "Favorite your animes and watch them again!" },
  { icon: <Star className='size-10 sm:size-12 md:size-12 lg:size-10' />, text: "Rate animes to keep track of your top picks" },
  { icon: <Settings className='size-10 sm:size-12 md:size-12 lg:size-10' />, text: "Customize Rosey to match your style and preferences" },
];

const ShowcaseFeature = ({ title, description, videoSrc, reverse }) => {
  return (
    <article
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between w-full gap-6 md:gap-12 px-4 sm:px-6 lg:px-0`}
    >
      <motion.video
        autoPlay loop muted playsInline
        className="w-full sm:w-[90%] md:w-[50%] max-w-lg rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <source src={videoSrc} type="video/webm" />
        <source src={videoSrc.replace(".webm", ".mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <div className="flex flex-col gap-2 text-center md:text-left w-full md:w-[45%]">
        <p className="text-xl sm:text-2xl md:text-2xl font-bold">{title}</p>
        <p className="text-base sm:text-lg md:text-lg font-medium text-zinc-400">
          {description}
        </p>
      </div>
    </article>
  );
};

const ShowcasePhrase = ({}) => {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="font-bold drop-shadow-lg text-white text-lg md:text-2xl text-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        “This isn’t just an app — it’s my love <br className="hidden md:flex" /> letter to anime, and now it’s yours too.”
      </motion.p>

      <motion.span
        className="flex gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.img
          src="/LogoOutline.png"
          className="size-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
        <span className="flex flex-col">
          <strong className="font-semibold text-white">Angelo Mejia</strong>
          <p className="text-white/80 text-sm">Chief Executive Officer</p>
        </span>
      </motion.span>
    </motion.div>
  );
};

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <motion.main {...basicFadeIn}>
      <Head>
        <title>Rozei: Minimalism, Elegant w/ Anime</title>
        <meta name="description" content="Rozei: A minimalistic and elegant anime app experience."/>
      </Head>

      {/* MAIN ELEMENT */}
      <section className='flex flex-col justify-center items-center mt-20'>

        {/* HEADER TITLE OF PRESENTATION */}
        <h1 className='flex flex-col md:block gap-1 text-center text-7xl font-bold'>
          <span className='drop-shadow-lg outline-bold'>Minimalist, <br/> Elegant w/ </span>
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative px-2 text-red-50 bg-gradient-to-r from-red-900 to-red-900 bg-no-repeat"
            style={{ backgroundPosition: "left center", backgroundSize: "0% 100%" }}
          >
            Anime
          </motion.span>
        </h1>

        {/* DESCRIPTION TEXT AND HIGHLIGHT */}
        <div className="mt-8 flex flex-col gap-8 text-center">
          {/* DESCRIPTION PHRASE OF THE APP */}
          <p className="text-zinc-600 leading-relaxed text-xl text-center whitespace-normal">
            Rozei: Your anime {' '}
            <motion.img
              src="/image3.png"
              className="inline-block size-9 object-contain shadow-lg align-middle"
              transition={{ duration: 0.8, ease: "easeOut" }}
              initial={{ opacity: 0, y: -5 }}
              animate={{
                opacity: 1, y: 0, x: [0, -4, 4, -3, 3, 0],
                rotate: [0, -2, 2, -1, 1, 0],
              }}
            />{' '}
            <strong className="font-bold text-red-900">journal</strong> {""}
            inspired by <br className='flex md:hidden'/> waifus and <br className='hidden md:flex'/> designed to preserve your best moments.
          </p>

          {/* HIGHLIGHTS OF THE APPLICATION */}
          <div className="hidden md:flex gap-6 justify-center">
            <motion.span
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Heart size={22} className="text-red-900 fill-red-900" />
              <span className="font-medium text-zinc-600 text-center">
                Loved by 99% of otakus
              </span>
            </motion.span>

            {/* Second stat hidden on small screens */}
            <motion.span
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <ListOrdered strokeWidth={3} size={22} />
              <span className="font-medium text-zinc-600 text-center">
                Explore endless anime
              </span>
            </motion.span>
          </div>
        </div>

        {/* IMAGE PREVIEW OF THE APP */}
        <motion.img
          src="/image8.png" className="w-full h-full mb-8"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* APP FEATURES GRID EKEMENTS */}
        <div className="mx-auto px-12 max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appFeatures.map((feature, i) => (
            <motion.div key={i}
              className="flex flex-col gap-3 text-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.10, ease: "easeOut" }}
            >
              {feature.icon}
              <p className="font-medium text-base text-zinc-500">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* APP STACK GRID ELEMENTS */}
        <div className='w-full mt-16 flex flex-col gap-10'>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className='font-bold font-poppins text-3xl drop-shadow-lg'>
              Powered by Passion, <br className='flex md:hidden'/> Built with Code
            </p>
            <span className=' text-zinc-400 font-medium text-lg'>
              The tools and technologies <br className='flex md:hidden'/> that power our journey </span>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-8">
            {appStack.map((stack, i) => (
              <motion.div key={stack}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                <StackIcon name={stack} className="size-20 sm:size-24 md:size-20 lg:size-16" />
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className='flex opacity-65 my-14 max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto'></Separator>

        {/* SHOWCASE APP GIFS FEATURES */}
        <div className='w-full mx-auto px-4 md:px-10 lg:px-14 xl:px-0 max-w-5xl flex flex-col gap-12'>
          <ShowcaseFeature
            title="Add New Anime to Your Collection"
            description="Easily add your favorite anime to your collection and keep everything organized in one place."
            videoSrc="/features/Gif1.webm"
          />
          <ShowcaseFeature
            title="Create New Collections"
            description="Organize your anime your way — create new collections and keep your favorites perfectly sorted."
            videoSrc="/features/Gif2.webm"
            reverse
          />
          <ShowcaseFeature
            title="Customize Your Collections"
            description="Personalize your anime collections with colors, covers, and layouts — make your library truly yours."
            videoSrc="/features/Gif3.webm"
          />
        </div>


        {/* FAQ SMALL PREVIEW CTA */}
        <div className='w-full bg-stone-50 p-8 md:p-14 mt-20'>
          <div className='max-w-5xl mx-auto flex flex-col gap-1'>
            <p className='text-center font-bold mb-4 font-poppins text-zinc-600 drop-shadow-lg text-xl md:text-3xl'>
              In case you missed anything
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the idea behind Rozei?</AccordionTrigger>
                <AccordionContent>
                  Rozei is more than just an anime tracker — it’s your personal anime journal.
                  With a clean, minimalist design, Rozei helps you organize your watchlists, keep track of your progress,
                  and stay connected with the series you love. Its unique features, like customizable collections,
                  allow you to group and manage your anime in ways that feel natural and personal,
                  making every watchlist an experience tailored just for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Who is Rozei designed for?</AccordionTrigger>
                <AccordionContent>
                  Rozei is built for every kind of anime fan — from casual viewers who just want a simple way
                  to keep track of their shows, to dedicated enthusiasts who love organizing collections,
                  and even data-heavy users who enjoy capturing every detail about their favorites.
                  No matter your style, Rozei adapts to the way you experience anime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How is Rozei different from others?</AccordionTrigger>
                <AccordionContent>
                  Unlike traditional anime trackers, Rozei is designed with a minimalist and distraction-free interface,
                  focusing on personalization and organization. Features like customizable Collections and nested Folders
                  give you more flexibility to manage your library your way, making Rozei feel more like a personal journal
                  than just another tracking tool.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Can I track more than just anime?</AccordionTrigger>
                <AccordionContent>
                  While Rozei is focused on anime, it’s flexible enough to support movies, OVAs, and specials.
                  Expanding into manga or other media is also something we’re considering for the future,
                  making Rozei a versatile tool for all your collections.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CREATOR PHRASE BOTTOM */}
        <div className="bg-[#1a1a1a] w-full flex justify-center items-center p-10 md:p-16">
          <ShowcasePhrase/>
        </div>
      </section>
    </motion.main>
  );
}
