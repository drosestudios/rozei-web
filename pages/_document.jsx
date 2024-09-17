import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
    <Html lang="en" style={ { scrollBehavior: "smooth" } }>

      <Head>
        <Script src="../components/useDarkMode.jsx" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>

        <link
            rel='stylesheet'
            href='https://cdn-uicons.flaticon.com/2.5.1/uicons-bold-rounded/css/uicons-bold-rounded.css'>
        </link>

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Favicon Icon */}
        <link rel="icon" href="/icon.webp" />

        {/* Website Metadata */}
        <meta name="author" content="StudiosDRose" />
        <meta property="og:type" content="website" />
      </Head>

      <body className="dark:bg-[#111111] bg-white dark:text-white">
            <Main />
            <NextScript />
      </body>

    </Html>
  );
}
