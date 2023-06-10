'use client';

import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background.jpg';

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Helix Ventures- </span> Building the DNA of the Future
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              At Helix Ventures, we believe in the power of ideas and the people behind them. Our mission is to
              facilitate the emergence of startups that push the boundaries of technology and reshape the world for the
              better. So, if you are ready to transform your dream into a reality, join us today and let's co-create the
              future.
            </p>
            <p>
              Helix Ventures is not just an incubator; it is a birthplace of game-changing technologies and disruptive
              startups. With our finger on the pulse of future trends, we are dedicated to fostering and igniting sector
              agnostic entrepreneurial ideas.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Start-ups 🚀', '4'],
              ['Founders 👨‍💼', '3'],
              ['Dogs 🐕', 2],
              ['House Plants 🌱', 32],
              ['Location 📍', 'Seattle, WA'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
