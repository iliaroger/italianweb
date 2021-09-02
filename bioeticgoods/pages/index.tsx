import Head from 'next/head';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('../components/Menu'));
const Hero = dynamic(() => import('../components/Hero'));
const Partners = dynamic(() => import('../components/Partners'));
const About = dynamic(() => import('../components/About'));
const Products = dynamic(() => import('../components/Products'));
const Questions = dynamic(() => import('../components/Questions'));
const Newsletter = dynamic(() => import('../components/Newsletter'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Bio Etic Goods - Conoscere le tradizioni</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Bio Etic Goods - Conoscere le tradizioni" />
        <meta
          name="description"
          content="Agiamo come broker e distributore nel settore alimentare e delle bevande. Siamo specializzati in prodotti congelati, liquori, spezie ed erbe."
        />
        <meta
          name="keywords"
          content="cibo, broker, distributore, liquori, spezie, erbe, prodotti congelati"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Italian"></meta>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        {/* font preloading */}
        <link href="/fonts/sf-ultralight.woff" as="font" crossOrigin="" />
        <link
          rel="preload"
          href="/fonts/sf-light.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/sf-medium.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/sf-semibold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/sf-bold.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="relative">
        <Menu></Menu>
        <Hero></Hero>
        <About></About>
        <Partners></Partners>
        <Products></Products>
        <Questions></Questions>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </>
  );
}
