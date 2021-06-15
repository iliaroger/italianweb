import Head from 'next/head';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import Products from '../components/Products';
import Questions from '../components/Questions';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="relative">
      <Menu></Menu>
      <Hero></Hero>
      <About></About>
      <Partners></Partners>
      <Products></Products>
      <Questions></Questions>
      <Newsletter></Newsletter>
    </div>
  );
}
