'use client';

import { Movie } from '#/types';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import getImagePath from '@/util/getImagePath';

Autoplay.globalOptions = { delay: 8000 };

function Banner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (


    <div ref={emblaRef} className='relative cursor-pointer overflow-hidden'>
      <div className='flex xxl:ml-144'>
        {movies?.map((movie) => (
          <div className='flex-full relative min-w-0' key={movie.id}>
            <Image
              src={getImagePath(movie.backdrop_path, true)}
              key={movie.id}
              width={1920}
              height={1080}
              alt={`${movie.title} cover image`}
            />
            <div className='absolute left-0 top-0 z-20 mt-0 hidden h-full w-full bg-transparent bg-gradient-to-r from-rsdark-800/90 to-transparent px-8 pt-40 md:inline lg:pt-62 xl:pt-92 space-y-5'>
              <h2 className='z-50 max-w-xl text-5xl font-bold'>
                {movie.title}
              </h2>
              <p className='line-clamp-3 max-w-xl'>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-rssilver-300/5 via-rssilver-800/25 to-rssilver-500 dark:to-rsdark-900' />
    </div>

  );
}

export default Banner;
