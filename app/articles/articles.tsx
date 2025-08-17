import Post1 from "./posts/designing-rozei-a-journey-since-2019";
import Post2 from "./posts/announcing-the-rozei-website";
import Post3 from "./posts/rozei-public-beta-coming-soon";

export const articles = [
  { slug: "rozei-public-beta-coming-soon", title: "Rozei: Public Beta Coming Soon", component: <Post3 /> },
  { slug: "announcing-the-rozei-website", title: "Rozei: Announcing the Official Website", component: <Post2 /> },
  { slug: "designing-rozei-a-journey-since-2019", title: "Designing Rozei: A Journey Since 2019", component: <Post1 /> },
];

export const articlesMap = Object.fromEntries(articles.map((p) => [p.slug, p]));
