"use client";

import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const basicFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Faq() {
  return (
    <motion.main {...basicFadeIn}>
      <section className='flex flex-col justify-center gap-4 items-center my-20'>
        <p className="flex flex-col xl:flex-row gap-2 font-bold text-6xl md:text-7xl">
          Frequently
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative px-2 text-blue-50 bg-gradient-to-r from-blue-900 to-blue-900 bg-no-repeat"
            style={{ backgroundPosition: "left center", backgroundSize: "0% 100%" }}
          >
            Asked
          </motion.span>
          <br className='hidden xl:flex'/> Questions
        </p>
        <p className='font-medium text-center text-base sm:text-xl md:text-2xl text-zinc-600'>
          Learn more about Rozei and how <br className='flex xl:hidden'/> to get the most out of it.
        </p>
      </section>

      <div className='w-full bg-stone-50 p-8 md:p-20 mt-20'>
        <section className='max-w-4xl mx-auto flex flex-col gap-2'>
          {/* General Questions */}
          <div className='flex flex-col gap-2'>
            <p className='font-semibold font-poppins text-xl md:text-2xl'>General Questions</p>
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
            </Accordion>
          </div>

          {/* Features and Usage */}
          <div className='mt-8 flex flex-col gap-2'>
            <p className='font-semibold font-poppins text-xl md:text-2xl'>Features & Usage</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>What are Collections in Rozei?</AccordionTrigger>
                <AccordionContent>
                  Collections let you group your anime into personalized categories with custom names and folders.
                  Whether it’s “Favorites,” “Completed,” “Watching,” or unique themes, Collections make it easy
                  to organize, filter, and navigate your library in a way that feels tailored to you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do Folders work?</AccordionTrigger>
                <AccordionContent>
                  Folders let you take organization a step further by creating subcategories within your collections.
                  For example, you might create a “Shonen” folder inside a collection, or separate folders for movies,
                  OVAs, or themes. With folders, your library stays structured and easy to explore.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Can I customize the way Rozei looks?</AccordionTrigger>
                <AccordionContent>
                  Yes! Rozei includes customization options like layouts, and preferences,
                  so your library can look and feel the way you want. Whether you prefer a clean list view
                  or a visual gallery, Rozei adapts to your style.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Will Rozei work offline?</AccordionTrigger>
                <AccordionContent>
                  Rozei is being designed with offline access in mind. You’ll be able to view and organize
                  your library even without internet. Once you reconnect, your progress will seamlessly sync
                  across devices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Development and Updates */}
          <div className='mt-8 flex flex-col gap-2'>
            <p className='font-semibold font-poppins text-xl md:text-2xl'>Platforms & Accounts</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-8">
                <AccordionTrigger>What platforms will Rozei support?</AccordionTrigger>
                <AccordionContent>
                  Rozei is first launching for browsers like Chrome, Safari, and Edge.
                  Native desktop apps for Windows and macOS are coming soon, along with mobile versions
                  for iOS and Android. Linux support is also part of our long-term vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>Does Rozei support syncing across devices?</AccordionTrigger>
                <AccordionContent>
                  Yes. Rozei is built to keep your data consistent across browsers, desktop, and mobile.
                  Your collections and progress sync automatically so you can continue right where you left off,
                  no matter the device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>Do I need an account to use Rozei?</AccordionTrigger>
                <AccordionContent>
                  Yes — creating an account is required to use Rozei.
                  Signing up is quick and easy, and you can connect using Google and other providers.
                  Your account ensures seamless syncing, secure backups, and access to upcoming features.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Data and Privacy */}
          <div className='mt-8 flex flex-col gap-2'>
            <p className='font-semibold font-poppins text-xl md:text-2xl'>Data & User Privacy</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-11">
                <AccordionTrigger>How is my data stored and secured?</AccordionTrigger>
                <AccordionContent>
                  Your data is securely stored with encryption to protect your privacy.
                  Rozei will never sell your information, and you remain in full control
                  of your anime library.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger>Can I export or back up my anime lists?</AccordionTrigger>
                <AccordionContent>
                  Yes, Rozei will allow you to export your lists for backup as JSON or transfer it.
                  This ensures you always have access to your collections, even outside the app.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger>Will Rozei share my information with others?</AccordionTrigger>
                <AccordionContent>
                  No. Rozei is built with respect for your privacy. Your data is yours alone and
                  will not be shared with third parties without your consent.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>


          {/* Installation and Support */}
          <div className='mt-8 flex flex-col gap-2'>
            <p className='font-semibold font-poppins text-xl md:text-2xl'>Future & Pricing</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-14">
                <AccordionTrigger>What features are planned for the future?</AccordionTrigger>
                <AccordionContent>
                  Planned updates include advanced statistics, personalized recommendations,
                  deeper customization, and potential social features to connect with friends.
                  Rozei is evolving with user feedback to become the ultimate anime companion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger>Will Rozei always be free?</AccordionTrigger>
                <AccordionContent>
                  Rozei will always offer a free version with core features.
                  In the future, we may introduce optional premium upgrades to unlock advanced tools,
                  but the essentials of organizing and tracking your anime will remain free for everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16">
                <AccordionTrigger>Will there be a premium version?</AccordionTrigger>
                <AccordionContent>
                  Yes. We’re considering a premium version for users who want extra features,
                  such as advanced analytics, enhanced customization, and exclusive tools.
                  But the free version will always remain powerful and reliable.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contribution and Support */}
          <div className='mt-8 flex flex-col gap-2'>
            <p className='font-semibold font-poppins text-xl md:text-2xl'>Contribution & Support</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-0">
                <AccordionTrigger>How can I get support or report a bug?</AccordionTrigger>
                <AccordionContent>
                  You can reach us via our Discord community or GitHub to report bugs or issues,
                  Instagram <strong>(@rozeiapp)</strong>, or email at <strong>studiodrose@gmail.com</strong>
                  {""} to get in touch with the team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1">
                <AccordionTrigger>Can I suggest new features?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! We welcome ideas from our users. You can suggest features through our Discord,
                  GitHub, or email. We carefully consider all feedback to make Rozei better for everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Where can I follow updates about Rozei?</AccordionTrigger>
                <AccordionContent>
                  Stay updated on new releases, features, and announcements through our Instagram
                  <strong> (@rozeiapp)</strong>, Discord community, or GitHub page or our official website blog
                  where we publish new updates or advancements for the app.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
