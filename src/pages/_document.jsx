import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/* SCRIPTS */}
        <Script src="../components/useDarkMode.jsx" />

        {/* LINKERS */}
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link
        href='https://cdn-uicons.flaticon.com/2.5.1/uicons-solid-rounded/css/uicons-solid-rounded.css' rel='stylesheet'/>
        <link
        href='https://cdn-uicons.flaticon.com/2.5.1/uicons-bold-rounded/css/uicons-bold-rounded.css' rel='stylesheet'/>
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"/>

        {/* FAVICON */}
        <link rel="icon" href="/image3.png" />

        {/* METADATA */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="author" content="StudiosDRose" />
        <meta property="og:type" content="website" />
      </Head>

     {/* STRUCTURE */}
      <body className="dark:bg-[#111111] overflow-x-hidden bg-white dark:text-white">
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}
