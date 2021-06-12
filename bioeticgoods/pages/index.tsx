import Head from 'next/head';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <div className="relative">
      <Menu></Menu>
      <Hero></Hero>
      <About></About>
    </div>
  );
}
