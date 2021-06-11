import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/Menu';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="relative">
      <Menu></Menu>
      <Hero></Hero>
    </div>
  );
}
