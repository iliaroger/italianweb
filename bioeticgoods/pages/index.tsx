import Head from 'next/head';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import Products from '../components/Products';
import Questions from '../components/Questions';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bio Etic Goods - Acquainted with traditions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="Bio Etic Goods - Acquainted with traditions"
        />
        <meta
          name="description"
          content="We act as a broker and distributor in the food and beverage sector. We specialize in frozen products, spirits, spices and herbs."
        />
        <meta
          name="keywords"
          content="food, broker, distributor, spirits, spices, herbs, frozen products"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
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
