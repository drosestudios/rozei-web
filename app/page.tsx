import LandingPage from "./home";

export const metadata = {
  title: "Rozei: Minimalist, Elegant w/ Anime Tracker",
  description:
    "Organize, track, and showcase your anime library with Rozei. A minimalist, elegant, and intuitive way to build collections, create folders, and enjoy a personalized anime experience.",
  keywords: [
    "Rozei", "anime tracker", "anime organizer", "anime collections", "anime library",
    "anime folders", "minimalist anime app", "anime watchlist", "anime list manager"
  ],
  authors: [{ name: "Rozei LTD" }],
  openGraph: {
    title: "Rozei: Minimalist, Elegant w/ Anime Tracker",
    description:
      "Organize, track, and showcase your anime library with Rozei. Minimalist design meets powerful features like collections, folders, and personalized anime organization.",
    url: "https://rozei.dev", siteName: "Rozei",
    images: [
      {
        url: "https://rozei.dev/og-rozei.png",
        width: 1200, height: 630,
        alt: "Rozei – Minimalist, Elegant w/ Anime Tracker",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozei: Minimalist, Elegant w/ Anime Tracker",
    description:
      "Track and organize your anime with Rozei. Build collections, manage folders, and enjoy a clean, elegant experience designed for anime fans.",
    images: ["https://rozei.dev/og-rozei.png"],
  },
};

export default function Page() {
  return <LandingPage />;
}
