import dynamic from "next/dynamic";
import "/styles/globals.css";

import Header from "./Header";
import Footer from "../pages/Footer";

import Releases from "./sections/releases";
import Blog from "../pages/sections/blog";
import Home from "./sections/home";
import BlogPost from '../pages/blog/blogpost';

import { Routes, Route } from "react-router-dom";
const Router = dynamic(
    () => import("react-router-dom").then(mod => mod.BrowserRouter),
    { ssr: false }
);

function MyApp() {
    return (
        <Router>
            <main className="p-5 mx-auto max-w-4xl">
                <Header />
                <div className="w-full mt-6 border-dashed border-b-2 border-[#1111111]"></div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/releases" element={<Releases />} />
                    <Route path="/blog/" element={<Blog />} />
                    <Route path="/blog/:postId" element={<BlogPost />} />
                </Routes>

                <Footer />
            </main>
        </Router>
    );
}

export default MyApp;
