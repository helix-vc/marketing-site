'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Newsletter } from '@/components/Newsletter';
import { HousePlants } from '@/components/HousePlants';
import { StartUps } from '@/components/StartUps';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StartUps />
        <HousePlants />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
