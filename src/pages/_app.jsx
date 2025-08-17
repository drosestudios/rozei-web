import "../styles/globals.css";
import React from "react";

import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

import { Routes, Route } from "react-router-dom";
const Router = dynamic(() => import("react-router-dom").then(mod => mod.BrowserRouter),{ ssr: false });

import Header from "./header";
import Footer from "./footer";
import NotFound from '../pages/notfound';
import Introduction from "../pages/introduction";
import Questions from '../pages/asked-questions';
import Downloads from "../pages/downloads";
import Terms from "../pages/legal/terms";
import License from "../pages/legal/license";
import Blog from "../pages/blog";

const ToastAnnouncement = () => {
  return (
    <div className="hidden flex-row gap-2 justify-center items-center py-4 px-8 bg-[#1a1a1a] mb-4">
      <motion.p
        className="font-medium text-white text-sm text-center sm:text-left"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Soon, the beta will be{" "}
        <strong className="text-emerald-100">release</strong>{" "}
        for public usage.
      </motion.p>

      <motion.div
        className="hidden sm:flex md:flex lg:flex xl:flex"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <p className="font-medium text-white underline text-sm text-center">
          Read more on our blog
        </p>
      </motion.div>
    </div>
  );
};

function MyApp() {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;
      const distanceFromBottom = maxScroll - scrollY;
      const fadeDistance = 200;
      const newOpacity = Math.min(1, distanceFromBottom / fadeDistance);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ToastAnnouncement/>
        <Header/>

        <main className="flex-1">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Introduction />} />
            <Route path="/releases" element={<Downloads />} />
            <Route path="/faq" element={<Questions />} />

            <Route path="/terms" element={<Terms />} />
            <Route path="/license" element={<License />} />

            <Route path="/blog/*" element={<Blog />} />
          </Routes>
        </main>

        <div style={{ opacity }} aria-hidden="true"
          className="flex fixed bottom-0 left-0 w-full h-32 backdrop-blur-sm pointer-events-none z-50"
        />

        <Footer/>
      </div>
    </Router>
  );
}

export default MyApp;
